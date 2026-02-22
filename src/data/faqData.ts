import { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: 'Is this medical advice?',
    answer:
      'No. DiaLog is a healthy living support tool created for educational purposes. It does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.',
  },
  {
    question: 'Does this replace glucose monitoring or insulin management?',
    answer:
      'Absolutely not. DiaLog complements your existing healthcare by supporting daily wellbeing habits like meal consistency and self-reflection. It does not track blood sugar, calculate insulin doses, or replace any clinical tools.',
  },
  {
    question: 'Who is this designed for?',
    answer:
      'DiaLog is designed for young adults (age 20–25) living with Type 1 Diabetes who want practical, low-effort support for building consistent, healthy meal routines — especially those with irregular schedules like freelance or part-time workers.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'Yes — you can sign in with Google or create an account using your email and password. Signing in keeps your data (timetable, habit log, allergy preferences) tied to your profile. All data is stored locally in your browser, keyed to your account, so each user gets their own personal experience.',
  },
  {
    question: 'Can I use this on my phone?',
    answer:
      'Yes! DiaLog is fully responsive and works on any modern mobile browser. No app download required.',
  },
  {
    question: 'How does the AI meal analysis work?',
    answer:
      'When you upload a meal photo in the Habit Log, you can click "Analyze Nutrition" to get an AI-estimated nutritional breakdown including calories, carbohydrates, sugar, protein, fat, fibre, sodium, and glycemic index. This uses Google Gemini AI and is designed to help with carb counting — especially useful for Type 1 Diabetes management. These are AI estimates only and should not replace professional dietary advice or clinical tools.',
  },
  {
    question: 'Will you add more meal ideas?',
    answer:
      'This is a prototype demo. In a full version, we envision a growing library of simple, practical meal ideas contributed by the community and reviewed for general healthy-living suitability.',
  },
];
