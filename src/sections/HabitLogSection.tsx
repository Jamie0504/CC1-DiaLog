import { useState, useEffect, useMemo } from 'react';
import HabitLogForm from '../components/HabitLogForm';
import HabitLogGallery from '../components/HabitLogGallery';
import WeeklyReflectionComponent from '../components/WeeklyReflection';
import { HabitLogEntry } from '../types';
import { getEntries, addEntry, deleteEntry } from '../utils/localStorage';

export default function HabitLogSection() {
  const [entries, setEntries] = useState<HabitLogEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const handleAdd = (entry: HabitLogEntry) => {
    const updated = addEntry(entry);
    setEntries(updated);
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Remove this entry?')) return;
    const updated = deleteEntry(id);
    setEntries(updated);
  };

  const filtered = useMemo(() => {
    if (!dateFilter) return entries;
    return entries.filter((e) => e.date === dateFilter);
  }, [entries, dateFilter]);

  return (
    <section id="habit-log" className="bg-stone-50">
      <div className="section-container">
        <p className="badge bg-accent-50 text-accent-500 mb-4">Feature 2</p>
        <h2 className="section-title">📸 Visual Habit Log</h2>
        <p className="section-subtitle">
          Build a personal visual diary of your meals. Reflect on your patterns, moods,
          and energy — no tracking scores, just gentle self-awareness.
        </p>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          {!showForm && (
            <button onClick={() => setShowForm(true)} className="btn-primary text-sm">
              + Log a Meal
            </button>
          )}

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">Filter by date:</label>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            {dateFilter && (
              <button
                onClick={() => setDateFilter('')}
                className="text-sm text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <span className="text-sm text-slate-400 ml-auto">
            {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}
          </span>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-10">
            <HabitLogForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {/* Gallery */}
        <HabitLogGallery entries={filtered} onDelete={handleDelete} />

        {/* Weekly Reflection */}
        <div className="mt-12">
          <WeeklyReflectionComponent />
        </div>
      </div>
    </section>
  );
}
