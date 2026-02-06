import { HabitLogEntry, WeeklyReflection } from '../types';

const ENTRIES_KEY = 'steadyplate_habit_entries';
const REFLECTIONS_KEY = 'steadyplate_reflections';

/* ── Habit Log Entries ────────────────────────────────── */

export function getEntries(): HabitLogEntry[] {
  try {
    const raw = localStorage.getItem(ENTRIES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveEntries(entries: HabitLogEntry[]): void {
  localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
}

export function addEntry(entry: HabitLogEntry): HabitLogEntry[] {
  const entries = getEntries();
  entries.unshift(entry);
  saveEntries(entries);
  return entries;
}

export function deleteEntry(id: string): HabitLogEntry[] {
  const entries = getEntries().filter((e) => e.id !== id);
  saveEntries(entries);
  return entries;
}

/* ── Weekly Reflections ───────────────────────────────── */

export function getReflections(): WeeklyReflection[] {
  try {
    const raw = localStorage.getItem(REFLECTIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveReflection(reflection: WeeklyReflection): void {
  const reflections = getReflections();
  const idx = reflections.findIndex((r) => r.weekKey === reflection.weekKey);
  if (idx >= 0) {
    reflections[idx] = reflection;
  } else {
    reflections.unshift(reflection);
  }
  localStorage.setItem(REFLECTIONS_KEY, JSON.stringify(reflections));
}

export function getReflectionByWeek(weekKey: string): string {
  const reflections = getReflections();
  return reflections.find((r) => r.weekKey === weekKey)?.text ?? '';
}

/* ── Image Resize Helper ──────────────────────────────── */

export function resizeImage(file: File, maxWidth = 400): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ratio = Math.min(maxWidth / img.width, 1);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas not supported'));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

/* ── Helpers ──────────────────────────────────────────── */

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function getCurrentWeekKey(): string {
  const now = new Date();
  const day = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((day + 6) % 7));
  return monday.toISOString().split('T')[0];
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-SG', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}
