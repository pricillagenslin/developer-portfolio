import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const Card = ({ className, ...p }: ComponentProps<'div'>) => (
  <div className={cn('rounded-xl border border-border bg-card', className)} {...p} />
)
export const Badge = ({ className, ...p }: ComponentProps<'span'>) => (
  <span className={cn('inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold', className)} {...p} />
)
