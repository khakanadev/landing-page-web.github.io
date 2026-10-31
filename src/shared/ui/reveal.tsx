import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { useIntersectionObserver } from '@/shared/lib/useIntersectionObserver'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver()

  return (
    <div
      ref={elementRef}
      className={cn(
        'motion-safe:opacity-0',
        isIntersecting && 'motion-safe:animate-[reveal_700ms_cubic-bezier(0.22,1,0.36,1)_forwards]',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
