import { NutritionData } from '../types';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const GEMINI_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function analyzeFood(base64Data: string): Promise<NutritionData> {
  const base64 = base64Data.replace(/^data:image\/\w+;base64,/, '');

  const prompt = `Analyze this image. First determine if it contains food.

If it does NOT contain food, respond with exactly:
{"isFood":false,"foodName":"","calories":null,"carbohydrates":null,"sugar":null,"protein":null,"fat":null,"fibre":null,"sodium":null,"glycemicIndex":null,"carbCountingNote":null,"disclaimer":"No food detected in image."}

If it DOES contain food, identify the food items and estimate the nutritional content for the entire visible portion/serving. Respond with a JSON object in this exact format:
{
  "isFood": true,
  "foodName": "Brief description of the food",
  "calories": <number in kcal or null>,
  "carbohydrates": <number in grams or null>,
  "sugar": <number in grams or null>,
  "protein": <number in grams or null>,
  "fat": <number in grams or null>,
  "fibre": <number in grams or null>,
  "sodium": <number in mg or null>,
  "glycemicIndex": "Low" or "Medium" or "High" or null,
  "carbCountingNote": "Approximate carb exchanges, e.g. ~3 exchanges (45g carbs)" or null,
  "disclaimer": "AI-estimated values. Not a substitute for professional dietary advice or medical guidance."
}

IMPORTANT: Respond ONLY with the JSON object, no other text.`;

  const response = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: prompt },
            { inline_data: { mime_type: 'image/jpeg', data: base64 } },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 1024,
      },
    }),
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error('Invalid API key. Please check your Gemini API key.');
    }
    if (response.status === 429) {
      throw new Error('Rate limit exceeded. Please wait a moment and try again.');
    }
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `API error (${response.status})`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response from AI model.');

  const jsonStr = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

  let parsed: NutritionData;
  try {
    parsed = JSON.parse(jsonStr);
  } catch {
    throw new Error('Could not parse analysis result. Please try again.');
  }

  if (!parsed.disclaimer) {
    parsed.disclaimer =
      'AI-estimated values. Not a substitute for professional dietary advice.';
  }

  return parsed;
}
