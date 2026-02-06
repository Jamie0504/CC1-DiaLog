const bpssItems = [
  {
    icon: '🧬',
    label: 'Biological',
    color: 'bg-red-50 text-red-700 border-red-100',
    text: 'Living with T1D means the body requires careful attention to nutrition and meal timing for overall wellbeing and energy stability. Inconsistent eating patterns can affect how Bobby feels day to day.',
  },
  {
    icon: '🧠',
    label: 'Psychological',
    color: 'bg-purple-50 text-purple-700 border-purple-100',
    text: 'Decision fatigue and low confidence can make even simple meal choices feel overwhelming — especially on busy, unpredictable days. The chronic mental load of self-management adds up.',
  },
  {
    icon: '👥',
    label: 'Social',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    text: 'Irregular freelance schedules make it harder to share meals, plan ahead, or follow structured routines. Social eating situations can also create pressure or uncertainty.',
  },
  {
    icon: '🏗️',
    label: 'Systemic',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    text: 'Most health resources target clinical management or assume 9-to-5 schedules. Few tools offer flexible, practical support for daily healthy-living habits tailored to gig workers.',
  },
];

export default function EvidenceSection() {
  return (
    <section id="evidence" className="bg-stone-50">
      <div className="section-container">
        <p className="badge bg-brand-50 text-brand-700 mb-4">Evidence &amp; Relevance</p>
        <h2 className="section-title">Why Consistent Healthy Living Is Hard</h2>
        <p className="section-subtitle">
          Using the Biopsychosocial-Systemic (BPSS) framework, we examine why building
          steady meal routines is challenging for someone like Bobby.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {bpssItems.map((item) => (
            <div key={item.label} className={`card border ${item.color.split(' ')[2]}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className={`badge ${item.color}`}>{item.label}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
