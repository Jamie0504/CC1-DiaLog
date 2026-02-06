const features = [
  {
    icon: '🍳',
    title: 'Smart Meal Prep Support',
    description:
      'Simple, practical meal ideas with step-by-step guidance — no calorie counting, no carb calculations. Just easy recipes, flexible ingredient swaps, and tips to make meal prep work with your schedule.',
    link: '#meal-prep',
    cta: 'View Meal Ideas →',
  },
  {
    icon: '📸',
    title: 'Low-Effort Visual Habit Log',
    description:
      'A personal reflection tool — snap a photo, add a note, pick your mood and energy, and build a visual diary of your meals. Review your week and reflect on what helped you stay consistent.',
    link: '#habit-log',
    cta: 'Try Habit Log →',
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-stone-50">
      <div className="section-container">
        <p className="badge bg-brand-50 text-brand-700 mb-4">Proposed Solution</p>
        <h2 className="section-title">How SteadyPlate Helps</h2>
        <p className="section-subtitle">
          A lightweight, web-based healthy living support platform with two core features
          designed to reduce friction and reinforce positive habits.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card group hover:border-brand-200 flex flex-col">
              <span className="text-4xl mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{f.description}</p>
              <a
                href={f.link}
                className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                {f.cta}
              </a>
            </div>
          ))}
        </div>

        {/* How it connects */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 max-w-3xl">
          <h3 className="font-bold text-slate-900 mb-3">🔗 How It All Connects</h3>
          <ul className="space-y-2">
            {[
              'Meal Prep Support reduces decision fatigue by offering ready-made, flexible ideas.',
              'The Habit Log encourages self-awareness through gentle reflection — not performance tracking.',
              'Together, they create a low-effort feedback loop: plan → cook → reflect → improve.',
              'The platform respects Bobby\'s autonomy and pace — no notifications, no pressure.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-brand-500 font-bold shrink-0">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
