export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500"
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-accent-400/10 rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <p className="inline-block badge bg-white/20 text-white/90 mb-6 backdrop-blur-sm">
          NTU CC0005 · Group 1 · Challenge 3 Disease
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Steady<span className="text-accent-300">Plate</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-brand-100 mb-4">
          Small steps. Steady plates. Your pace.
        </p>

        <p className="max-w-2xl mx-auto text-brand-100/90 text-base sm:text-lg leading-relaxed mb-10">
          A healthy living support platform for young adults managing Type&nbsp;1 Diabetes
          — helping you build confident, consistent meal routines without the overwhelm.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#meal-prep" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
            🍳 Explore Meal Prep Support
          </a>
          <a href="#habit-log" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:border-white/50">
            📸 Try Visual Habit Log
          </a>
        </div>
      </div>
    </section>
  );
}
