import { useState, useRef, useEffect } from 'react';
import { MealIdea } from '../types';

const groceryPlatforms = [
  { name: 'FairPrice', icon: '🛒', url: 'https://www.fairprice.com.sg/' },
  { name: 'RedMart', icon: '🛍️', url: 'https://redmart.lazada.sg/' },
  { name: 'Amazon Fresh', icon: '📦', url: 'https://www.amazon.sg/fresh' },
];

interface Props {
  meal: MealIdea;
}

export default function MealCard({ meal }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const buyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showBuy) return;
    const handleClick = (e: MouseEvent) => {
      if (buyRef.current && !buyRef.current.contains(e.target as Node)) {
        setShowBuy(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showBuy]);

  return (
    <div className="card flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl leading-none">{meal.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-slate-900 leading-snug">{meal.title}</h3>
          <p className="text-sm text-slate-500 mt-0.5">⏱ {meal.prepTime}</p>
        </div>

        {/* Buy Ingredients button */}
        <div className="relative shrink-0" ref={buyRef}>
          <button
            onClick={() => setShowBuy(!showBuy)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all
                       ${showBuy
                         ? 'bg-brand-100 text-brand-700'
                         : 'bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-600'}`}
            title="Buy ingredients online"
          >
            🛒
          </button>

          {showBuy && (
            <div className="absolute right-0 top-11 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-10 animate-fadeIn">
              <p className="px-3 pb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Buy Ingredients
              </p>
              {groceryPlatforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  onClick={() => setShowBuy(false)}
                >
                  <span>{p.icon}</span>
                  <span className="font-medium">{p.name}</span>
                  <svg className="w-3.5 h-3.5 ml-auto text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-2">
        {meal.tags.map((tag) => (
          <span key={tag} className="badge bg-brand-50 text-brand-700">
            {tag}
          </span>
        ))}
      </div>

      {/* Allergen badges */}
      {meal.allergens.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {meal.allergens.map((a) => (
            <span key={a} className="badge bg-orange-50 text-orange-600 text-[10px]">
              {a}
            </span>
          ))}
        </div>
      )}

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
