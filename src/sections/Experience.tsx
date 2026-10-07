import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card } from '@/components/ui/card'
import { fadeUp, stagger, viewport } from '@/utils/motion'

export function Experience() {
  return (
    <AnimatedSection id="experience" title="Experience">
      <div className="relative border-l-2 border-border pl-6 md:pl-10">
        {experience.map((e) => (
          <motion.div key={e.role} initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="relative">
            <span aria-hidden className="absolute -left-[33px] top-6 h-4 w-4 rounded-full border-4 border-background bg-primary md:-left-[49px]" />
            <Card className="p-6 md:p-8">
              <motion.p variants={fadeUp} className="text-sm font-semibold text-primary">{e.duration}</motion.p>
              <motion.h3 variants={fadeUp} className="mt-1 text-xl font-bold">{e.role}</motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground">{e.focus}</motion.p>
              <ul className="mt-5 grid gap-x-8 gap-y-2 text-sm md:grid-cols-2">
                {e.responsibilities.map((r) => <motion.li key={r} variants={fadeUp} className="text-muted-foreground before:mr-2 before:text-primary before:content-['•']">{r}</motion.li>)}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}
