export interface MealIdea {
  id: string;
  title: string;
  emoji: string;
  description: string;
  prepTime: string;
  tags: string[];
  ingredients: string[];
  steps: string[];
  swapSuggestions: string[];
}

export interface NutritionData {
  isFood: boolean;
  foodName: string;
  calories: number | null;
  carbohydrates: number | null;
  sugar: number | null;
  protein: number | null;
  fat: number | null;
  fibre: number | null;
  sodium: number | null;
  glycemicIndex: string | null;
  carbCountingNote: string | null;
  disclaimer: string;
}

export interface HabitLogEntry {
  id: string;
  date: string;
  imageData?: string;
  note: string;
  mood: string;
  energy: string;
  createdAt: string;
  nutrition?: NutritionData;
}

export interface WeeklyReflection {
  weekKey: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimetableRow {
  id: string;
  time: string;
  task: string;
}
