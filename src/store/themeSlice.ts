import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThemeMode } from '../types';
const KEY = 'theme-mode';
const initial = (): ThemeMode => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* storage unavailable */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
const slice = createSlice({
  name: 'theme', initialState: { mode: initial() } as { mode: ThemeMode },
  reducers: {
    toggleMode(s) { s.mode = s.mode === 'dark' ? 'light' : 'dark'; try { localStorage.setItem(KEY, s.mode); } catch { /* ignore */ } },
    setMode(s, a: PayloadAction<ThemeMode>) { s.mode = a.payload; },
  },
});
export const { toggleMode, setMode } = slice.actions;
export default slice.reducer;
