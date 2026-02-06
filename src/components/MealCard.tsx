import { useState } from 'react';
import { MealIdea } from '../types';

interface Props {
  meal: MealIdea;
}

export default function MealCard({ meal }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl leading-none">{meal.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-slate-900 leading-snug">{meal.title}</h3>
          <p className="text-sm text-slate-500 mt-0.5">⏱ {meal.prepTime}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {meal.tags.map((tag) => (
          <span key={tag} className="badge bg-brand-50 text-brand-700">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{meal.description}</p>

      {/* Toggle details */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors text-left mb-2"
      >
        {expanded ? '▾ Hide details' : '▸ View ingredients & steps'}
      </button>

      {expanded && (
        <div className="space-y-4 mt-2 animate-fadeIn">
          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Ingredients</h4>
            <ul className="space-y-1">
              {meal.ingredients.map((ing, i) => (
                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                  <span className="text-brand-400 mt-0.5">•</span> {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">How To</h4>
            <ol className="space-y-1.5">
              {meal.steps.map((step, i) => (
                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                  <span className="font-bold text-brand-500 text-xs mt-0.5 shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Swap Suggestions */}
          <div className="bg-accent-50 rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wide text-accent-500 mb-2">
              Swap Suggestions
            </h4>
            <ul className="space-y-1">
              {meal.swapSuggestions.map((swap, i) => (
                <li key={i} className="text-sm text-slate-600">
                  {swap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
