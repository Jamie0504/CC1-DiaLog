import { useState, useEffect, useMemo } from 'react';
import MealCard from '../components/MealCard';
import AllergyFilter from '../components/AllergyFilter';
import { mealIdeas } from '../data/mealIdeas';
import { getAllergyPrefs, saveAllergyPrefs } from '../utils/localStorage';
import { useAuth } from '../contexts/AuthContext';

export default function MealPrepSection() {
  const { user } = useAuth();
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  useEffect(() => {
    setSelectedAllergens(getAllergyPrefs());
  }, [user]);

  const handleAllergyChange = (next: string[]) => {
    setSelectedAllergens(next);
    saveAllergyPrefs(next);
  };

  const filtered = useMemo(
    () =>
      mealIdeas.filter(
        (m) => !m.allergens.some((a) => selectedAllergens.includes(a))
      ),
    [selectedAllergens]
  );

  return (
    <section id="meal-prep" className="bg-white">
      <div className="section-container">
        <p className="badge bg-accent-50 text-accent-500 mb-4">Feature 1</p>
        <h2 className="section-title">🍳 Smart Meal Prep Support</h2>
        <p className="section-subtitle">
          Simple, practical meal ideas to keep you going — with flexible swaps, easy steps,
          and zero pressure. Pick what works for your day.
        </p>

        {/* Allergy filter */}
        <AllergyFilter
          selected={selectedAllergens}
          onChange={handleAllergyChange}
        />

        {/* Results count */}
        {selectedAllergens.length > 0 && (
          <p className="text-sm text-slate-500 mb-4">
            Showing <strong>{filtered.length}</strong> of {mealIdeas.length} recipes
          </p>
        )}

        {/* Meal grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-medium text-slate-600">No matching recipes</p>
            <p className="text-sm text-slate-400 mt-1">
              Try removing some allergy filters to see more meal ideas.
            </p>
          </div>
        )}

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
