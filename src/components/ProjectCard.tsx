import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { Badge, Card } from '@/components/ui/card'
import { fadeUp } from '@/utils/motion'
import { selectProject, useAppDispatch } from '@/store'
import { cn } from '@/lib/utils'

export function ProjectCard({ project }: { project: Project }) {
  const dispatch = useAppDispatch()
  const pro = project.type === 'Professional Work'
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="h-full">
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden bg-primary/10">
          {project.image ? (
            <motion.img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
          ) : (
            <div className="flex h-full items-center justify-center text-5xl font-extrabold text-primary/40" aria-hidden>{project.id.slice(0, 2).toUpperCase()}</div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <Badge className={cn('w-fit', pro ? 'border-primary text-primary' : 'text-muted-foreground')}>{project.type}</Badge>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">{project.technologies.map((t) => <Badge key={t}>{t}</Badge>)}</div>
          <button onClick={() => dispatch(selectProject(project.id))} className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-primary">
            View Details <ArrowUpRight size={16} />
          </button>
        </div>
      </Card>
    </motion.div>
  )
}
