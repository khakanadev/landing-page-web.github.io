import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { Reveal } from '@/shared/ui/reveal'

interface SectionHeadingProps {
  title: ReactNode
  accent: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHeading({ title, accent, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mx-auto max-w-3xl text-center', className)}>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title} <span className="text-brand">{accent}</span>
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
