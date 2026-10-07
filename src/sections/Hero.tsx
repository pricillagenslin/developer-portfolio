import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { site } from '@/data/portfolio'
import { Button } from '@/components/ui/button'

const code = [
  ['const', ' developer', ' = {'],
  ['  name', ': ', `"${site.name}",`],
  ['  role', ': ', `"${site.title}",`],
  ['  stack', ': ', '["React", "TypeScript", "React Native"],'],
  ['  state', ': ', '["Redux Toolkit", "Zustand", "TanStack Query"],'],
  ['}', '', ''],
]

export function Hero() {
  const words = site.name.split(' ')
  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20">
      <motion.div aria-hidden className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" animate={{ y: [0, -24, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div aria-hidden className="absolute -left-24 bottom-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" animate={{ y: [0, 20, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {words.map((w, i) => (
              <span key={w} className="mr-3 inline-block overflow-hidden align-bottom">
                <motion.span className="inline-block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: 'easeOut' }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-3 text-xl font-bold text-primary sm:text-2xl">{site.title}</motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="mt-5 max-w-xl text-muted-foreground">{site.intro}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View My Work</Button>
            <Button href={site.resumePath} download variant="outline">Download Resume</Button>
            <Button href="#contact" variant="ghost">Contact Me</Button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="hidden lg:block" aria-hidden>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="rounded-xl border border-border bg-card p-5 font-mono text-sm shadow-xl">
            <div className="mb-4 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-border" /><i className="h-3 w-3 rounded-full bg-border" /><i className="h-3 w-3 rounded-full bg-primary" /></div>
            {code.map(([a, b, c], i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="whitespace-pre-wrap">
                <span className="text-primary">{a}</span><span className="text-muted-foreground">{b}</span><span>{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><ChevronDown /></motion.a>
    </section>
  )
}
