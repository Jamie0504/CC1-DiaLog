import { useState, useEffect, useCallback } from 'react';
import { TimetableRow } from '../types';
import { defaultTimetable } from '../data/timetableDefaults';
import { getTimetable, saveTimetable, generateId } from '../utils/localStorage';
import { useAuth } from '../contexts/AuthContext';

function loadRows(): TimetableRow[] {
  const saved = getTimetable();
  return saved ?? defaultTimetable.map((r) => ({ ...r, id: generateId() }));
}

/* Inline-editable cell */

function EditableCell({
  value,
  onChange,
  placeholder,
  className = '',
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => setDraft(value), [value]);

  const commit = () => {
    setEditing(false);
    if (draft.trim() !== value) onChange(draft.trim());
  };

  if (editing) {
    return (
      <input
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') commit();
          if (e.key === 'Escape') { setDraft(value); setEditing(false); }
        }}
        placeholder={placeholder}
        className={`w-full bg-white border border-brand-300 rounded-lg px-3 py-1.5 text-sm
                    focus:outline-none focus:ring-2 focus:ring-brand-400 ${className}`}
      />
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className={`w-full text-left px-3 py-1.5 rounded-lg text-sm
                  hover:bg-brand-50 transition-colors cursor-text ${className}`}
      title="Click to edit"
    >
      {value || <span className="text-slate-300 italic">{placeholder}</span>}
    </button>
  );
}

/* Main section */

export default function TimetableSection() {
  const { user } = useAuth();
  const [rows, setRows] = useState<TimetableRow[]>(loadRows);

  useEffect(() => { setRows(loadRows()); }, [user]);

  const persist = useCallback((next: TimetableRow[]) => {
    setRows(next);
    saveTimetable(next);
  }, []);

  const updateField = (id: string, field: 'time' | 'task', value: string) => {
    persist(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const addRow = () => {
    persist([...rows, { id: generateId(), time: '', task: '' }]);
  };

  const deleteRow = (id: string) => {
    persist(rows.filter((r) => r.id !== id));
  };

  const resetToDefault = () => {
    if (!confirm('Reset timetable to the sample template? Your current edits will be lost.')) return;
    const fresh = defaultTimetable.map((r) => ({ ...r, id: generateId() }));
    persist(fresh);
  };

  return (
    <section id="timetable" className="bg-white">
      <div className="section-container">
        {/* Header */}
        <p className="badge bg-brand-50 text-brand-700 mb-4">Editable Template</p>
        <h2 className="section-title">Daily Timetable</h2>
        <p className="section-subtitle">
          Start from this sample and customise it to your own routine.
          Click any cell to edit, and add or remove rows as you like.
        </p>

        {/* Disclaimer banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 max-w-3xl">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Please note:</strong> This timetable is a <strong>lifestyle support template</strong> and
            does not replace professional medical advice. DiaLog does not prescribe insulin doses or
            exercise treatment plans. Please follow your clinician's guidance for medication and
            exercise adjustments.
          </p>
        </div>

        {/* Table */}
        <div className="max-w-3xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left text-xs font-bold uppercase tracking-wide text-slate-400 pb-3 pl-3 w-[140px]">
                  Time
                </th>
                <th className="text-left text-xs font-bold uppercase tracking-wide text-slate-400 pb-3 pl-3">
                  What to Do
                </th>
                <th className="w-[48px]" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`group border-b border-slate-100 transition-colors hover:bg-slate-50/60 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-stone-50/40'
                  }`}
                >
                  <td className="py-1 align-middle">
                    <EditableCell
                      value={row.time}
                      onChange={(v) => updateField(row.id, 'time', v)}
                      placeholder="Time"
                      className="font-semibold text-slate-700 min-w-[110px]"
                    />
                  </td>
                  <td className="py-1 align-middle">
                    <EditableCell
                      value={row.task}
                      onChange={(v) => updateField(row.id, 'task', v)}
                      placeholder="Enter task..."
                      className="text-slate-600"
                    />
                  </td>
                  <td className="py-1 align-middle text-center">
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500
                                 transition-all p-1 rounded-lg hover:bg-red-50"
                      title="Delete row"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-6 max-w-3xl">
          <button onClick={addRow} className="btn-primary text-sm">
            + Add Row
          </button>
          <button onClick={resetToDefault} className="btn-secondary text-sm">
            Reset to Sample Template
          </button>
          <span className="text-xs text-slate-400 ml-auto">
            {rows.length} {rows.length === 1 ? 'item' : 'items'} · auto-saved locally
          </span>
        </div>

        {/* Bottom disclaimer */}
        <p className="mt-6 text-xs text-slate-400 max-w-3xl leading-relaxed">
          All content above is editable and stored in your browser only. This template is provided as a
          starting point — please adapt it to fit your personal routine and your medical professional's recommendations.
        </p>
      </div>
    </section>
  );
}
