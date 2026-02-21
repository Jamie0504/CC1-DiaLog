import { ALL_ALLERGENS } from '../types';

const allergenEmoji: Record<string, string> = {
  Dairy: '🥛',
  Gluten: '🌾',
  Nuts: '🥜',
  Soy: '🫘',
  Fish: '🐟',
  Eggs: '🥚',
  Shellfish: '🦐',
};

interface Props {
  selected: string[];
  onChange: (next: string[]) => void;
}

export default function AllergyFilter({ selected, onChange }: Props) {
  const toggle = (allergen: string) => {
    onChange(
      selected.includes(allergen)
        ? selected.filter((a) => a !== allergen)
        : [...selected, allergen]
    );
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-slate-700">Filter by allergies:</span>
        {selected.length > 0 && (
          <button
            onClick={() => onChange([])}
            className="text-xs text-slate-400 hover:text-slate-600 font-medium"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_ALLERGENS.map((allergen) => {
          const active = selected.includes(allergen);
          return (
            <button
              key={allergen}
              onClick={() => toggle(allergen)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium
                         transition-all border-2 ${
                           active
                             ? 'bg-red-50 border-red-300 text-red-700'
                             : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                         }`}
            >
              <span>{allergenEmoji[allergen]}</span>
              <span>{allergen}</span>
              {active && <span className="ml-0.5 text-red-400">&times;</span>}
            </button>
          );
        })}
      </div>
      {selected.length > 0 && (
        <p className="mt-2 text-xs text-slate-400">
          Hiding recipes that contain: {selected.join(', ')}
        </p>
      )}
    </div>
  );
}
