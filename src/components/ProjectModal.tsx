import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { Badge } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { selectProject, useAppDispatch, useAppSelector } from '@/store'

export function ProjectModal() {
  const dispatch = useAppDispatch()
  const id = useAppSelector((s) => s.ui.selectedProject)
  const p = projects.find((x) => x.id === id)

  useEffect(() => {
    if (!id) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && dispatch(selectProject(null))
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [id, dispatch])

  return (
    <AnimatePresence>
      {p && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => dispatch(selectProject(null))}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-card p-6 md:p-8">
            <Button variant="ghost" size="icon" className="absolute right-3 top-3" aria-label="Close details" autoFocus onClick={() => dispatch(selectProject(null))}><X size={18} /></Button>
            <Badge className="border-primary text-primary">{p.type}</Badge>
            <h3 id="project-title" className="mt-3 pr-10 text-2xl font-extrabold">{p.title}</h3>
            <p className="mt-3 text-muted-foreground">{p.description}</p>
            {p.contribution && <p className="mt-4 rounded-md border-l-2 border-primary bg-primary/5 p-3 text-sm"><strong>My contribution: </strong>{p.contribution}</p>}
            <h4 className="mt-6 font-bold">Features</h4>
            <ul className="mt-2 grid gap-x-6 gap-y-1 text-sm text-muted-foreground sm:grid-cols-2">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <h4 className="mt-6 font-bold">Technologies</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">{p.technologies.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.github ? <Button href={p.github} variant="outline" size="sm">GitHub</Button> : <Button variant="outline" size="sm" disabled>GitHub link coming soon</Button>}
              {p.live ? <Button href={p.live} size="sm">Live Demo</Button> : <Button size="sm" disabled>Live demo coming soon</Button>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
