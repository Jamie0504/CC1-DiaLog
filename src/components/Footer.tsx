export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-5">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Disclaimer */}
        <div className="bg-slate-800/60 rounded-xl p-5 max-w-3xl mx-auto">
          <p className="text-xs leading-relaxed">
            <strong className="text-slate-300">Disclaimer:</strong> This prototype is for
            educational purposes and healthy living support only. It does not provide medical
            advice, diagnosis, or treatment, and does not replace professional healthcare or
            glucose monitoring systems.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-xl">🍽️</span>
          <span className="font-bold text-slate-300">SteadyPlate</span>
        </div>

        <p className="text-xs">
          NTU CC0005 Healthy Living &amp; Wellbeing · AY 2025-2026 Semester 2 · Group 1
        </p>
        <p className="text-xs text-slate-500">
          Built as a prototype demonstration. Not intended for clinical use.
        </p>
      </div>
    </footer>
  );
}
