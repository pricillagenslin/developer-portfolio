import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ProjectCard } from '@/components/ProjectCard'
import { stagger, viewport } from '@/utils/motion'

export function Projects() {
  return (
    <AnimatedSection id="projects" title="Projects" subtitle="Professional work and personal projects, labelled separately.">
      <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </motion.div>
    </AnimatedSection>
  )
}
