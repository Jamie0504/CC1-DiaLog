import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonaSection from './sections/PersonaSection';
import EvidenceSection from './sections/EvidenceSection';
import ReadinessSection from './sections/ReadinessSection';
import SolutionSection from './sections/SolutionSection';
import MealPrepSection from './sections/MealPrepSection';
import HabitLogSection from './sections/HabitLogSection';
import FeasibilitySection from './sections/FeasibilitySection';
import FAQSection from './sections/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <PersonaSection />
        <EvidenceSection />
        <ReadinessSection />
        <SolutionSection />
        <MealPrepSection />
        <HabitLogSection />
        <FeasibilitySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
