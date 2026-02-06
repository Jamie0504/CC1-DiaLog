import MealCard from '../components/MealCard';
import { mealIdeas } from '../data/mealIdeas';

export default function MealPrepSection() {
  return (
    <section id="meal-prep" className="bg-white">
      <div className="section-container">
        <p className="badge bg-accent-50 text-accent-500 mb-4">Feature 1</p>
        <h2 className="section-title">🍳 Smart Meal Prep Support</h2>
        <p className="section-subtitle">
          Simple, practical meal ideas to keep you going — with flexible swaps, easy steps,
          and zero pressure. Pick what works for your day.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mealIdeas.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        {/* Hydration reminder */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-5 py-2.5 text-sm font-medium">
            💧 Hydration Reminder: Aim for 6–8 glasses of water throughout your day!
          </div>
        </div>
      </div>
    </section>
  );
}
