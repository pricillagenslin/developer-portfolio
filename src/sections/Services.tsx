import { motion } from 'framer-motion'
import { process, services } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Card } from '@/components/ui/card'
import { fadeUp, stagger, viewport } from '@/utils/motion'

export function Services() {
  return (
    <AnimatedSection id="services" title="What I Do">
      <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <motion.div key={title} variants={fadeUp} whileHover={{ y: -4 }}>
            <Card className="h-full p-6 transition-colors hover:border-primary">
              <Icon className="text-primary" aria-hidden />
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <h3 className="mb-6 mt-20 text-2xl font-extrabold">Work Process</h3>
      <motion.ol initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {process.map((step, i) => (
          <motion.li key={step} variants={fadeUp}>
            <Card className="p-4"><span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, '0')}</span><p className="mt-1 font-semibold">{step}</p></Card>
          </motion.li>
        ))}
      </motion.ol>
    </AnimatedSection>
  )
}
