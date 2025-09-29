import styled from 'styled-components'
import { useIntersectionObserver } from '../lib/useIntersectionObserver'
import { type ReactNode } from 'react'


const AnimatedContainer = styled.div<{
  $isVisible: boolean
  $animationType: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale'
  $delay?: number
  $duration?: number
}>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible, $animationType }) => {
    if (!$isVisible) {
      switch ($animationType) {
        case 'fadeInLeft':
          return 'translateX(-30px)';
        case 'fadeInRight':
          return 'translateX(30px)';
        case 'fadeInScale':
          return 'scale(0.95)';
        default:
          return 'translateY(30px)';
      }
    }
    return 'none';
  }};
  animation: ${({ $isVisible, $animationType, $duration = 600 }) =>
    $isVisible
      ? `${$animationType} ${$duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
      : 'none'};
  animation-delay: ${({ $delay = 0 }) => $delay}ms;
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  /* Fallback для случаев, когда анимация не срабатывает */
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    animation: none;
  }
`

interface AnimatedSectionProps {
  children: ReactNode
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale'
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px'
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  return (
    <AnimatedContainer
      ref={elementRef}
      $isVisible={isIntersecting}
      $animationType={animationType}
      $delay={delay}
      $duration={duration}
    >
      {children}
    </AnimatedContainer>
  )
}
