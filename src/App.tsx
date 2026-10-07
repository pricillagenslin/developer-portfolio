import { useMemo } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { buildTheme } from './theme';
import { useAppSelector } from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './pages/PageTransition';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  const mode = useAppSelector((s) => s.theme.mode);
  const theme = useMemo(() => buildTheme(mode), [mode]);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MotionConfig reducedMotion="user">
        <Box
          component="a"
          href="#main"
          sx={{
            position: 'fixed',
            left: 16,
            top: -60,
            zIndex: 2000,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            px: 2,
            py: 1,
            borderRadius: 2,
            '&:focus': { top: 16 },
          }}
        >
          Skip to content
        </Box>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}