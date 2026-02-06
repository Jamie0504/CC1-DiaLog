export default function PersonaSection() {
  return (
    <section id="persona" className="bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Bobby Card */}
          <div className="card bg-gradient-to-br from-brand-50 to-white border-brand-100 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-3xl shrink-0">
                🧑
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Meet Bobby</h3>
                <p className="text-sm text-slate-500">22 · Freelance TikTok Affiliate Creator</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { icon: '🕐', text: 'Irregular schedule — works late nights and shifts content days' },
                { icon: '🍳', text: 'Enjoys cooking and meal-prepping, but lacks consistent structure' },
                { icon: '🤹', text: 'Balancing freelance deadlines, social media, and personal wellbeing' },
                { icon: '💉', text: 'Living with Type 1 Diabetes since age 14' },
                { icon: '💪', text: 'Already taking steps toward healthy eating — just needs support to stay on track' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                  <span className="leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Problem statement */}
          <div>
            <p className="badge bg-red-50 text-red-600 mb-4">Challenge 3 · Autoimmune Disease</p>
            <h2 className="section-title">The Problem</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Young adults with Type&nbsp;1 Diabetes who work irregular schedules face a unique
              challenge: they <strong>want</strong> to maintain healthy eating habits, but the
              combination of unpredictable routines, decision fatigue, and the daily effort of
              self-management makes it hard to stay consistent — even when they&apos;ve already
              started trying.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-bold text-sm text-slate-900 mb-2">📋 Problem Statement</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bobby, a 22-year-old freelance creator living with T1D, has already begun
                meal-prepping and cooking at home. However, his irregular work schedule, limited
                routine structure, and the chronic self-management burden of his condition lead
                to inconsistent habits and low confidence. He needs a <strong>low-effort,
                practical support system</strong> that reinforces his existing actions and helps
                him build sustainable, healthy-living routines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
