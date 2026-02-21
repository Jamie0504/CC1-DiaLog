export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500"
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-accent-400/10 rounded-full blur-2xl" />

      {/* Disclaimer bar */}
      <div className="relative bg-amber-50 border-b border-amber-200 px-5 py-3">
        <p className="text-center text-sm text-amber-800 max-w-3xl mx-auto">
          <span className="font-bold">⚠️ Disclaimer:</span> This is <strong>not</strong> medical advice.
          DiaLog is for healthy living support and educational purposes only.
          It does not provide diagnosis, treatment, or replace professional healthcare.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <img src="/logo.jpg" alt="DiaLog" className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-3xl shadow-2xl mb-6 bg-white/10 backdrop-blur-sm" />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Dia<span className="text-sky-300">Log</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-brand-100 mb-4">
          Your daily dialogue with healthy living.
        </p>

        <p className="max-w-2xl mx-auto text-brand-100/90 text-base sm:text-lg leading-relaxed mb-10">
          Simple meal ideas, a personal habit log, and an editable daily timetable
          — all in one place to help you stay consistent without the overwhelm.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#meal-prep" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
            🍳 Meal Prep
          </a>
          <a href="#timetable" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
            📅 Timetable
          </a>
          <a href="#habit-log" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
            📸 Habit Log
          </a>
        </div>
      </div>
    </section>
  );
}
