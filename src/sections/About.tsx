import { motion } from 'framer-motion'
import { about } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Badge, Card } from '@/components/ui/card'
import { fadeUp, stagger, viewport } from '@/utils/motion'

export function About() {
  return (
    <AnimatedSection id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="space-y-4 text-muted-foreground">
          {about.summary.map((t) => <motion.p key={t} variants={fadeUp}>{t}</motion.p>)}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">{about.highlights.map((h) => <Badge key={h} className="text-foreground">{h}</Badge>)}</motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid grid-cols-2 gap-4">
          {about.stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <Card className="h-full p-5"><p className="text-2xl font-extrabold text-primary">{s.value}</p><p className="mt-1 text-sm text-muted-foreground">{s.label}</p></Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
