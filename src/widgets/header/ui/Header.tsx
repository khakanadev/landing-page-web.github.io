import styled from 'styled-components'
import { useState } from 'react'

const Root = styled.header`
  width: 100%;
  background: transparent;
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
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  margin: 50px auto 0;
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
`

const NavButton = styled.button<{ active?: boolean }>`
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({ active }) => (active ? '#FFFFFF' : '#C1C2D3')};
  font-size: 16px;
  line-height: 110%;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.15s ease;
  &:hover { color: #FFFFFF; }
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
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.15s ease;
  }
`

export function Header() {
  const [active, setActive] = useState<'about' | 'projects' | 'skills' | 'contacts' | null>(null)

  return (
    <Root>
      <Container>
        <Nav>
          <StrokeOuter />
          <NavButton active={active === 'about'} onClick={() => setActive('about')}>Обо мне</NavButton>
          <NavButton active={active === 'projects'} onClick={() => setActive('projects')}>Проекты</NavButton>
          <NavButton active={active === 'skills'} onClick={() => setActive('skills')}>Специализация</NavButton>
          <NavButton active={active === 'contacts'} onClick={() => setActive('contacts')}>Контакты</NavButton>
        </Nav>
      </Container>
    </Root>
  )
}

