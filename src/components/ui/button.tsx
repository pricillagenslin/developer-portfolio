import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:opacity-90',
        outline: 'border border-border bg-card hover:border-primary hover:text-primary',
        ghost: 'hover:bg-primary/10 hover:text-primary',
      },
      size: { sm: 'h-9 px-4 text-sm', md: 'h-11 px-6 text-sm', icon: 'h-10 w-10' },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
)

type Props = ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { href?: string; download?: boolean }

export function Button({ className, variant, size, href, ...props }: Props) {
  const cls = cn(buttonVariants({ variant, size }), className)
  if (href) return <a href={href} className={cls} {...(props as ComponentProps<'a'>)} />
  return <button className={cls} {...props} />
}
