import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/utils/motion'

export function AnimatedSection({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="mb-10 max-w-2xl">
        <h2 id={`${id}-title`} className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  )
}
