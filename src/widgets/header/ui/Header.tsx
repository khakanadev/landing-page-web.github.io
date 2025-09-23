import styled, { css, keyframes } from 'styled-components'
import { useEffect, useRef, useState } from 'react'

const Root = styled.header`
  width: 100%;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 5;
  height: 116px; 

  @media (max-width: 500px) {
    height: calc(116px * (100vw / 500));
  }
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Nav = styled.nav`
  width: 451px;
  height: 66px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(135deg, #04071D 0%, #0C0E23 100%);
  position: fixed;
  left: 50%;
  top: 16px;
  transform: translateX(-50%);
  z-index: 1000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);

  @media (max-width: 500px) {
    width: min(92vw, 451px);
    height: calc(66px * (100vw / 500));
    border-radius: calc(13px * (100vw / 500));
    top: calc(16px * (100vw / 500));
  }
`

const StrokeOuter = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 13px;
  pointer-events: none;
  padding: 1px;
  background: linear-gradient(135deg, #6971A2 0%, #272A3C 1%);
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  @media (max-width: 500px) {
    border-radius: calc(13px * (100vw / 500));
  }
`

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const NavButton = styled.button<{ $active?: boolean }>`
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({ $active }) => ($active ? 'transparent' : '#C1C2D3')};
  font-size: 16px;
  line-height: 110%;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.15s ease;
  &:hover { color: ${({ $active }) => ($active ? 'transparent' : '#FFFFFF')}; }

  ${({ $active }) => $active && css`
    background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
    background-size: 200% 100%;
    background-position: 0% 50%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: ${shimmer} 1.4s ease-in-out infinite;
    
  `}
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FFFFFF;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  @media (max-width: 500px) {
    font-size: calc(16px * (100vw / 500));
    &::after {
      bottom: calc(-10px * (100vw / 500));
      width: calc(6px * (100vw / 500));
      height: calc(6px * (100vw / 500));
    }
  }
`

const ActiveDot = styled.div<{ $visible: boolean; $x: number }>`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FFFFFF;
  transform: translate3d(${({ $x }) => $x}px, 0, 0);
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 160ms ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  

  @media (max-width: 500px) {
    bottom: calc(10px * (100vw / 500));
    width: calc(6px * (100vw / 500));
    height: calc(6px * (100vw / 500));
  }
`

export function Header() {
  const [active, setActive] = useState<'about' | 'projects' | 'skills' | 'contacts' | null>(null)
  const [isClicking, setIsClicking] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLButtonElement | null>(null)
  const projectsRef = useRef<HTMLButtonElement | null>(null)
  const skillsRef = useRef<HTMLButtonElement | null>(null)
  const contactsRef = useRef<HTMLButtonElement | null>(null)
  const [dotX, setDotX] = useState(0)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }

  useEffect(() => {
    const idToKey: Record<string, 'about' | 'projects' | 'skills' | 'contacts'> = {
      about: 'about',
      projects: 'projects',
      reviews: 'skills',
      footer: 'contacts',
    }

    const targets = Object.keys(idToKey)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (targets.length === 0) return

    let ticking = false

    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking) return
        ticking = true
        if (isClicking) {
          requestAnimationFrame(() => { ticking = false })
          return
        }
        if (window.scrollY <= 20) {
          setActive(null)
          requestAnimationFrame(() => { ticking = false })
          return
        }
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
        if (visible[0]?.target?.id) {
          const key = idToKey[visible[0].target.id]
          if (key) setActive(key)
        }
        requestAnimationFrame(() => { ticking = false })
      },
      {
        root: null,
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-80px 0px -40% 0px',
      }
    )

    targets.forEach((el) => observer.observe(el))
    const onScroll = () => { if (!isClicking && window.scrollY <= 20) setActive(null) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [isClicking])

  useEffect(() => {
    const computeDotX = () => {
      const navEl = navRef.current
      if (!navEl || !active) return
      const map: Record<'about' | 'projects' | 'skills' | 'contacts', HTMLButtonElement | null> = {
        about: aboutRef.current,
        projects: projectsRef.current,
        skills: skillsRef.current,
        contacts: contactsRef.current,
      }
      const btn = map[active]
      if (!btn) return
      const navRect = navEl.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      const centerX = btnRect.left + btnRect.width / 2 - navRect.left
      setDotX(centerX - 3)
    }

    computeDotX()
    const onResize = () => computeDotX()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  return (
    <Root>
      <Container>
        <Nav ref={navRef}>
          <StrokeOuter />
          <NavButton ref={aboutRef} $active={active === 'about'} onClick={() => {
            setIsClicking(true)
            setActive('about')
            scrollTo('about')
            setTimeout(() => setIsClicking(false), 360)
          }}>Обо мне</NavButton>
          <NavButton ref={projectsRef} $active={active === 'projects'} onClick={() => {
            setIsClicking(true)
            setActive('projects')
            scrollTo('projects')
            setTimeout(() => setIsClicking(false), 360)
          }}>Проекты</NavButton>
          <NavButton ref={skillsRef} $active={active === 'skills'} onClick={() => {
            setIsClicking(true)
            setActive('skills')
            scrollTo('reviews')
            setTimeout(() => setIsClicking(false), 360)
          }}>Отзывы</NavButton>
          <NavButton ref={contactsRef} $active={active === 'contacts'} onClick={() => {
            setIsClicking(true)
            setActive('contacts')
            scrollTo('footer')
            setTimeout(() => setIsClicking(false), 360)
          }}>Контакты</NavButton>
          <ActiveDot $visible={!!active} $x={dotX} />
        </Nav>
      </Container>
    </Root>
  )
}

