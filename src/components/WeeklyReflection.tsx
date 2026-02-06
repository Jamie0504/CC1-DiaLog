import { useState, useEffect } from 'react';
import { getCurrentWeekKey, getReflectionByWeek, saveReflection } from '../utils/localStorage';

export default function WeeklyReflection() {
  const weekKey = getCurrentWeekKey();
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setText(getReflectionByWeek(weekKey));
  }, [weekKey]);

  const handleSave = () => {
    saveReflection({ weekKey, text });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="card bg-brand-50/50 border-brand-100 max-w-lg mx-auto">
      <h3 className="font-bold text-lg text-slate-900 mb-1">💭 Weekly Reflection</h3>
      <p className="text-sm text-slate-500 mb-4">
        Week of {new Date(weekKey + 'T00:00:00').toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' })}
      </p>

      <label className="block text-sm font-medium text-slate-700 mb-2">
        What helped you stay consistent this week?
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder="E.g., I prepped meals on Sunday and it made weekdays so much easier…"
        className="w-full border border-brand-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none bg-white"
      />

      <div className="flex items-center gap-3 mt-3">
        <button onClick={handleSave} className="btn-primary text-sm py-2">
          Save Reflection
        </button>
        {saved && <span className="text-sm text-brand-600 font-medium">✓ Saved!</span>}
      </div>
    </div>
  );
}
