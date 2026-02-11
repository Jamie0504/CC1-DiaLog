import { useState, useRef } from 'react';
import { HabitLogEntry, NutritionData } from '../types';
import { generateId, resizeImage } from '../utils/localStorage';
import { analyzeFood } from '../utils/nutritionApi';
import NutritionDisplay from './NutritionDisplay';

const moods = ['😊', '😌', '😐', '😔', '😤', '🥳'];
const energyLevels = ['⚡', '💪', '🔋', '😴', '🌟'];

interface Props {
  onAdd: (entry: HabitLogEntry) => void;
  onCancel: () => void;
}

export default function HabitLogForm({ onAdd, onCancel }: Props) {
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');
  const [mood, setMood] = useState('');
  const [energy, setEnergy] = useState('');
  const [imageData, setImageData] = useState<string | undefined>();
  const [imageLoading, setImageLoading] = useState(false);
  const [nutrition, setNutrition] = useState<NutritionData | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageLoading(true);
    setNutrition(null);
    setAnalysisError(null);
    try {
      const resized = await resizeImage(file, 400);
      setImageData(resized);
    } catch {
      alert('Could not process this image. Please try another one.');
    } finally {
      setImageLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!imageData || imageData === 'placeholder') return;
    setAnalyzing(true);
    setAnalysisError(null);
    try {
      const result = await analyzeFood(imageData);
      setNutrition(result);
    } catch (err) {
      setAnalysisError(err instanceof Error ? err.message : 'Analysis failed. Please try again.');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood || !energy) {
      alert('Please pick a mood and energy level.');
      return;
    }

    const entry: HabitLogEntry = {
      id: generateId(),
      date,
      imageData,
      note,
      mood,
      energy,
      createdAt: new Date().toISOString(),
      ...(nutrition ? { nutrition } : {}),
    };
    onAdd(entry);
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 max-w-lg mx-auto">
      <h3 className="font-bold text-lg text-slate-900">📝 Log a Meal</h3>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Meal Photo <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="btn-secondary text-sm py-2"
          >
            {imageLoading ? 'Processing…' : '📷 Upload Photo'}
          </button>
          {!imageData && (
            <button
              type="button"
              onClick={() => setImageData('placeholder')}
              className="text-sm text-brand-600 hover:text-brand-800 font-medium"
            >
              or use placeholder 🍽️
            </button>
          )}
          {imageData && (
            <button
              type="button"
              onClick={() => {
                setImageData(undefined);
                setNutrition(null);
                setAnalysisError(null);
                if (fileRef.current) fileRef.current.value = '';
              }}
              className="text-sm text-red-500 hover:text-red-700 font-medium"
            >
              ✕ Remove
            </button>
          )}
        </div>
        {imageData && imageData !== 'placeholder' && (
          <img src={imageData} alt="Preview" className="mt-3 rounded-xl w-full max-w-xs object-cover" />
        )}
        {imageData === 'placeholder' && (
          <div className="mt-3 w-full max-w-xs h-40 bg-slate-100 rounded-xl flex items-center justify-center text-5xl">
            🍽️
          </div>
        )}
      </div>

      {/* Nutrition Analysis */}
      {imageData && imageData !== 'placeholder' && (
        <div>
          {analyzing && (
            <p className="text-sm text-brand-600 animate-pulse">Analyzing your meal...</p>
          )}
          {analysisError && (
            <div className="flex items-center gap-2">
              <p className="text-sm text-red-500">{analysisError}</p>
              <button
                type="button"
                onClick={handleAnalyze}
                className="text-sm text-brand-600 hover:text-brand-800 font-medium"
              >
                Retry
              </button>
            </div>
          )}
          {nutrition && <NutritionDisplay nutrition={nutrition} />}
          {!analyzing && !analysisError && !nutrition && (
            <button
              type="button"
              onClick={handleAnalyze}
              className="btn-secondary text-sm py-2"
            >
              🔬 Analyze Nutrition
            </button>
          )}
        </div>
      )}

      {/* Note */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Note <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          placeholder="What did you eat? How was your cooking experience?"
          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
        />
      </div>

      {/* Mood */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Mood</label>
        <div className="flex gap-2 flex-wrap">
          {moods.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMood(m)}
              className={`text-2xl p-2 rounded-xl transition-all ${
                mood === m
                  ? 'bg-brand-100 ring-2 ring-brand-400 scale-110'
                  : 'bg-slate-50 hover:bg-slate-100'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Energy */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Energy Level</label>
        <div className="flex gap-2 flex-wrap">
          {energyLevels.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setEnergy(e)}
              className={`text-2xl p-2 rounded-xl transition-all ${
                energy === e
                  ? 'bg-accent-100 ring-2 ring-accent-400 scale-110'
                  : 'bg-slate-50 hover:bg-slate-100'
              }`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button type="submit" className="btn-primary text-sm">
          ✓ Save Entry
        </button>
        <button type="button" onClick={onCancel} className="text-sm text-slate-500 hover:text-slate-700 font-medium">
          Cancel
        </button>
      </div>
    </form>
  );
}
