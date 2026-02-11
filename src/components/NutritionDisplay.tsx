import { NutritionData } from '../types';

interface Props {
  nutrition: NutritionData;
  compact?: boolean;
}

function GiBadge({ gi }: { gi: string }) {
  const colors: Record<string, string> = {
    Low: 'bg-green-100 text-green-700',
    Medium: 'bg-amber-100 text-amber-700',
    High: 'bg-red-100 text-red-700',
  };
  return (
    <span className={`badge ${colors[gi] || 'bg-slate-100 text-slate-600'}`}>
      GI: {gi}
    </span>
  );
}

function NutrientItem({ label, value, unit }: { label: string; value: number | null; unit: string }) {
  return (
    <div className="text-center">
      <p className="text-lg font-bold text-slate-800">{value != null ? value : '--'}</p>
      <p className="text-xs text-slate-400">{unit}</p>
      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

export default function NutritionDisplay({ nutrition, compact }: Props) {
  if (!nutrition.isFood) {
    if (compact) return null;
    return (
      <div className="bg-slate-50 rounded-xl p-4 text-center text-sm text-slate-400">
        <p className="text-2xl mb-1">🔍</p>
        <p>This doesn't appear to contain food. No nutritional analysis available.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-1.5 mb-2 text-xs">
        <span className="font-medium text-slate-600 truncate max-w-[140px]">
          {nutrition.foodName}
        </span>
        <span className="text-slate-300">·</span>
        {nutrition.calories != null && (
          <span className="badge bg-brand-50 text-brand-700">
            {nutrition.calories} kcal
          </span>
        )}
        {nutrition.carbohydrates != null && (
          <span className="badge bg-accent-50 text-accent-500">
            Carbs {nutrition.carbohydrates}g
          </span>
        )}
        {nutrition.sugar != null && (
          <span className="badge bg-accent-50 text-accent-500">
            Sugar {nutrition.sugar}g
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-xl p-4 space-y-3 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-slate-800 text-sm">{nutrition.foodName}</h4>
        {nutrition.calories != null && (
          <span className="text-lg font-extrabold text-brand-600">
            {nutrition.calories} <span className="text-xs font-medium text-slate-400">kcal</span>
          </span>
        )}
      </div>

      {/* T1D Focus: Carbs & Sugar */}
      <div className="bg-accent-50 border border-accent-200 rounded-lg p-3">
        <p className="text-xs font-semibold text-accent-500 mb-2">Carbs & Sugar (T1D Focus)</p>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xl font-bold text-slate-800">
              {nutrition.carbohydrates != null ? `${nutrition.carbohydrates}g` : '--'}
            </p>
            <p className="text-xs text-slate-500">Carbohydrates</p>
          </div>
          <div>
            <p className="text-xl font-bold text-slate-800">
              {nutrition.sugar != null ? `${nutrition.sugar}g` : '--'}
            </p>
            <p className="text-xs text-slate-500">Sugar</p>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1">
            {nutrition.glycemicIndex && <GiBadge gi={nutrition.glycemicIndex} />}
            {nutrition.carbCountingNote && (
              <span className="text-xs text-slate-500">{nutrition.carbCountingNote}</span>
            )}
          </div>
        </div>
      </div>

      {/* Nutrient Grid */}
      <div className="grid grid-cols-4 gap-2">
        <NutrientItem label="Protein" value={nutrition.protein} unit="g" />
        <NutrientItem label="Fat" value={nutrition.fat} unit="g" />
        <NutrientItem label="Fibre" value={nutrition.fibre} unit="g" />
        <NutrientItem label="Sodium" value={nutrition.sodium} unit="mg" />
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-slate-400 italic">{nutrition.disclaimer}</p>
    </div>
  );
}
