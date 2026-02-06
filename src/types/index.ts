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

export interface HabitLogEntry {
  id: string;
  date: string;
  imageData?: string;
  note: string;
  mood: string;
  energy: string;
  createdAt: string;
}

export interface WeeklyReflection {
  weekKey: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
