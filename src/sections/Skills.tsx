import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Badge, Card } from '@/components/ui/card'
import { fadeUp, stagger, viewport } from '@/utils/motion'

export function Skills() {
  return (
    <AnimatedSection id="skills" title="Technical Skills" subtitle="Tools and technologies I work with, grouped by area.">
      <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon: Icon, items }) => (
          <motion.div key={category} variants={fadeUp} whileHover={{ y: -4 }}>
            <Card className="h-full p-6 transition-colors hover:border-primary">
              <Icon className="text-primary" size={24} aria-hidden />
              <h3 className="mt-3 font-bold">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">{items.map((i) => <Badge key={i}>{i}</Badge>)}</div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  )
}
