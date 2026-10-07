import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { damping: 28, stiffness: 320 })
  const sy = useSpring(y, { damping: 28, stiffness: 320 })

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('cursor-on')
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY)
      setHover(!!(e.target as HTMLElement).closest('a,button,[role="button"],input,textarea'))
    }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); document.body.classList.remove('cursor-on') }
  }, [enabled, x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 h-8 w-8 rounded-full border border-primary" style={{ x: sx, y: sy }} animate={{ scale: hover ? 1.7 : 1, opacity: hover ? 0.6 : 1 }} />
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-primary" style={{ x, y }} />
    </>
  )
}
