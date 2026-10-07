import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { ThemeMode } from '../types';
const heading = '"Bricolage Grotesque", system-ui, sans-serif';
export const buildTheme = (mode: ThemeMode) => {
  const dark = mode === 'dark';
  return responsiveFontSizes(createTheme({
    palette: {
      mode,
      primary: { main: dark ? '#8EA2FF' : '#3A4FE0' },
      secondary: { main: dark ? '#5EEAD4' : '#0F9F8F' },
      background: { default: dark ? '#0C1220' : '#F5F6FA', paper: dark ? '#141C2E' : '#FFFFFF' },
      text: { primary: dark ? '#EEF1F8' : '#10172A', secondary: dark ? '#A3ADC4' : '#505A73' },
      divider: dark ? 'rgba(255,255,255,.09)' : 'rgba(16,23,42,.10)',
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: '"Instrument Sans", system-ui, sans-serif',
      h1: { fontFamily: heading, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.02 },
      h2: { fontFamily: heading, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 },
      h3: { fontFamily: heading, fontWeight: 700, letterSpacing: '-0.02em' },
      h4: { fontFamily: heading, fontWeight: 700 }, h5: { fontFamily: heading, fontWeight: 700 }, h6: { fontFamily: heading, fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 600 },
      body1: { lineHeight: 1.7 },
    },
    components: {
      MuiCssBaseline: { styleOverrides: { html: { scrollBehavior: 'smooth', scrollPaddingTop: 72 }, '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } }, '::selection': { background: dark ? '#8EA2FF55' : '#3A4FE033' } } },
      MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 12, padding: '10px 22px' } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
    },
  }));
};
