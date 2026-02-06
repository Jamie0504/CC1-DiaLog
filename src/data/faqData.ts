import { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: 'Is this medical advice?',
    answer:
      'No. SteadyPlate is a healthy living support tool created for educational purposes. It does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.',
  },
  {
    question: 'Does this replace glucose monitoring or insulin management?',
    answer:
      'Absolutely not. SteadyPlate complements your existing healthcare by supporting daily wellbeing habits like meal consistency and self-reflection. It does not track blood sugar, calculate insulin doses, or replace any clinical tools.',
  },
  {
    question: 'Who is this designed for?',
    answer:
      'SteadyPlate is designed for young adults (age 20–25) living with Type 1 Diabetes who want practical, low-effort support for building consistent, healthy meal routines — especially those with irregular schedules like freelance or part-time workers.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No. All data (habit log entries, reflections) is stored locally in your browser using localStorage. Nothing is sent to any server. Your data stays on your device.',
  },
  {
    question: 'Can I use this on my phone?',
    answer:
      'Yes! SteadyPlate is fully responsive and works on any modern mobile browser. No app download required.',
  },
  {
    question: 'Will you add more meal ideas?',
    answer:
      'This is a prototype demo. In a full version, we envision a growing library of simple, practical meal ideas contributed by the community and reviewed for general healthy-living suitability.',
  },
];
