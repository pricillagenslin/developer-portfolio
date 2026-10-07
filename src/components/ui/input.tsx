import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const base = 'w-full rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:border-primary'
export const Input = ({ className, ...p }: ComponentProps<'input'>) => <input className={cn(base, 'h-11', className)} {...p} />
export const Textarea = ({ className, ...p }: ComponentProps<'textarea'>) => <textarea className={cn(base, 'min-h-32 py-2', className)} {...p} />
