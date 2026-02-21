import { AuthProvider } from './contexts/AuthContext';
import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MealPrepSection from './sections/MealPrepSection';
import TimetableSection from './sections/TimetableSection';
import HabitLogSection from './sections/HabitLogSection';
import FAQSection from './sections/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-stone-50 text-slate-800">
        <DemoBanner />
        <Navbar />
        <main>
          <Hero />
          <MealPrepSection />
          <TimetableSection />
          <HabitLogSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
