import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toggleTheme, useAppDispatch, useAppSelector } from '@/store'

export function ThemeToggle() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((s) => s.theme.mode)
  return (
    <Button variant="ghost" size="icon" aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`} onClick={() => dispatch(toggleTheme())}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={mode} initial={{ rotate: -80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 80, opacity: 0 }} transition={{ duration: 0.18 }}>
          {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
