import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { setActive, useAppDispatch, useAppSelector } from '@/store'
import { cn } from '@/lib/utils'

export function Navbar() {
  const dispatch = useAppDispatch()
  const active = useAppSelector((s) => s.ui.activeSection)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && dispatch(setActive(e.target.id))),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [dispatch])

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('fixed inset-x-0 top-0 z-50 transition-all', scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'bg-transparent')}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-base font-extrabold tracking-tight">{site.name}</a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
              className={cn('relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground', active === n.id && 'text-foreground')}>
              {n.label}
              {active === n.id && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-primary" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href={site.resumePath} download size="sm" className="hidden sm:inline-flex">Resume</Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden">
            <div className="flex flex-col px-5 py-3">
              {navItems.map((n, i) => (
                <motion.a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0, transition: { delay: i * 0.04 } }}
                  className={cn('rounded-md px-2 py-3 font-medium', active === n.id ? 'text-primary' : 'text-muted-foreground')}>{n.label}</motion.a>
              ))}
              <Button href={site.resumePath} download className="my-2">Resume</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
