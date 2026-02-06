import { HabitLogEntry } from '../types';
import { formatDate } from '../utils/localStorage';

interface Props {
  entries: HabitLogEntry[];
  onDelete: (id: string) => void;
}

export default function HabitLogGallery({ entries, onDelete }: Props) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-5xl mb-4">📭</p>
        <p className="text-lg font-medium">No entries yet</p>
        <p className="text-sm mt-1">Start logging meals to build your visual diary!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {entries.map((entry) => (
        <div key={entry.id} className="card group relative">
          {/* Delete button */}
          <button
            onClick={() => onDelete(entry.id)}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-slate-300
                       hover:text-red-500 transition-all text-lg"
            title="Delete entry"
          >
            ✕
          </button>

          {/* Image */}
          {entry.imageData && entry.imageData !== 'placeholder' ? (
            <img
              src={entry.imageData}
              alt="Meal"
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
          ) : (
            <div className="w-full h-40 bg-slate-50 rounded-xl mb-3 flex items-center justify-center text-5xl">
              🍽️
            </div>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">
              {formatDate(entry.date)}
            </span>
            <div className="flex gap-1.5 text-lg">
              <span title="Mood">{entry.mood}</span>
              <span title="Energy">{entry.energy}</span>
            </div>
          </div>

          {/* Note */}
          {entry.note && (
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
              {entry.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
