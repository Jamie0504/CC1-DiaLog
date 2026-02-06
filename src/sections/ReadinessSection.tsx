const stages = [
  { label: 'Precontemplation', description: 'Not yet aware', active: false },
  { label: 'Contemplation', description: 'Thinking about it', active: false },
  { label: 'Preparation', description: 'Getting ready', active: false },
  { label: 'Action', description: 'Taking steps', active: true },
  { label: 'Maintenance', description: 'Sustaining habits', active: false },
];

export default function ReadinessSection() {
  return (
    <section id="readiness" className="bg-white">
      <div className="section-container">
        <p className="badge bg-brand-50 text-brand-700 mb-4">Transtheoretical Model (TTM)</p>
        <h2 className="section-title">Readiness to Change</h2>

        {/* Stage visual */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-center shrink-0">
              <div
                className={`rounded-xl px-4 py-3 text-center transition-all ${
                  s.active
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 scale-105'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <p className={`text-xs font-bold ${s.active ? 'text-brand-100' : ''}`}>
                  Stage {i + 1}
                </p>
                <p className={`text-sm font-semibold ${s.active ? '' : 'text-slate-700'}`}>
                  {s.label}
                </p>
                <p className={`text-xs mt-0.5 ${s.active ? 'text-brand-200' : 'text-slate-400'}`}>
                  {s.description}
                </p>
              </div>
              {i < stages.length - 1 && (
                <div className={`w-6 h-0.5 ${i < 3 ? 'bg-brand-300' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl">
          <div className="card bg-gradient-to-r from-brand-50 to-white border-brand-100">
            <h3 className="font-bold text-brand-800 mb-2">
              Bobby is in the <span className="text-brand-600">Action Stage</span> — Supported Action
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Bobby has already started meal-prepping and cooking at home — he&apos;s not starting
              from zero. But early action is fragile. Without structure, gentle guidance, and
              encouragement, it&apos;s easy to slip back into inconsistent patterns.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>What this means for our solution:</strong> SteadyPlate is designed with
              <strong> low-barrier, habit-refinement tools</strong> that support and refine Bobby&apos;s
              existing efforts rather than initiating change from scratch. We meet him where he is:
              already trying, just needing a steadier foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
