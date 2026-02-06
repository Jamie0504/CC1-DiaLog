const metrics = [
  {
    icon: '📊',
    title: 'Meal Prep Consistency',
    desc: 'Track how many days per week the user engages in meal preparation activities.',
  },
  {
    icon: '💪',
    title: 'Self-Reported Confidence',
    desc: 'Periodic self-assessment of confidence in planning and preparing healthy meals.',
  },
  {
    icon: '📅',
    title: 'Routine Stability',
    desc: 'Measure regularity of meal times and preparation habits over time.',
  },
  {
    icon: '🧘',
    title: 'Decision Fatigue Reduction',
    desc: 'Qualitative feedback on whether meal ideas reduce the mental load of daily food choices.',
  },
  {
    icon: '📱',
    title: 'Habit Log Engagement',
    desc: 'Number of log entries per week as a proxy for sustained engagement with the platform.',
  },
  {
    icon: '💭',
    title: 'Reflective Practice',
    desc: 'Weekly reflections completed — indicating self-awareness and behavioural consolidation.',
  },
];

const swot = [
  {
    label: 'Strengths',
    color: 'bg-green-50 border-green-200 text-green-800',
    items: [
      'Low barrier to use — no accounts, no downloads',
      'Mobile-friendly and works offline (localStorage)',
      'Non-clinical tone reduces stigma and pressure',
    ],
  },
  {
    label: 'Weaknesses',
    color: 'bg-red-50 border-red-200 text-red-800',
    items: [
      'Limited to browser localStorage (data not synced across devices)',
      'No personalised recommendations (static meal ideas)',
      'Prototype scope — limited meal library',
    ],
  },
  {
    label: 'Opportunities',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    items: [
      'Integration with community-driven recipe sharing',
      'Partnership with campus health services',
      'Expansion to other chronic conditions and demographics',
    ],
  },
  {
    label: 'Threats',
    color: 'bg-amber-50 border-amber-200 text-amber-800',
    items: [
      'Users may confuse this with medical advice',
      'Existing health apps with larger feature sets',
      'Maintaining engagement beyond initial novelty',
    ],
  },
];

export default function FeasibilitySection() {
  return (
    <section id="feasibility" className="bg-white">
      <div className="section-container">
        <p className="badge bg-brand-50 text-brand-700 mb-4">Feasibility &amp; Effectiveness</p>
        <h2 className="section-title">Can It Work?</h2>
        <p className="section-subtitle">
          Realistic, healthy-living-focused metrics to measure progress — no clinical outcomes claimed.
        </p>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {metrics.map((m) => (
            <div key={m.title} className="card">
              <span className="text-2xl mb-2 block">{m.icon}</span>
              <h4 className="font-bold text-sm text-slate-900 mb-1">{m.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* SWOT */}
        <h3 className="text-xl font-bold text-slate-900 mb-4">📋 SWOT Analysis</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {swot.map((s) => (
            <div key={s.label} className={`rounded-2xl border p-5 ${s.color}`}>
              <h4 className="font-bold text-sm mb-3">{s.label}</h4>
              <ul className="space-y-1.5">
                {s.items.map((item, i) => (
                  <li key={i} className="text-xs leading-relaxed flex items-start gap-2">
                    <span className="mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
