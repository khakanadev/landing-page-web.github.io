import styled, { keyframes, css } from 'styled-components'
import { useEffect, useState } from 'react'

const Root = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: clamp(56px, 15.375vw, 123px);
`

const fadeSlideUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px) scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`

const fadeInScale = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(40px) scale(0.9); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`

const Title = styled.h1<{ animate?: boolean }>`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 120%;
  color: #e4ecff;
  letter-spacing: 0.25em;
  text-align: center;

  @media (max-width: 700px) {
    font-size: clamp(12px, 2.29vw, 16px);
  }

  @media (max-width: 400px) {
    white-space: nowrap;
    font-size: clamp(10px, 3.2vw, 12px);
  }

  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeSlideUp} 600ms ease forwards;
    animation-delay: 120ms;
  `}
`

const Headline = styled.h2<{ animate?: boolean }>`
  margin: 22px 0 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: clamp(36px, 8vw, 72px);
  line-height: 100%;
  letter-spacing: -3.6px;
  color: #ffffff;
  width: 100%;
  max-width: 1100px;
  padding: 0 16px;
  text-align: center;

  span {
    color: #CBACF9;
  }

  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeInScale} 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 300ms;
  `}
`

const SubTitle = styled.p<{ animate?: boolean }>`
  margin: 30px 0 0;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: clamp(14px, 2.4vw, 24px);
  color: #e4ecff;
  text-align: center;
  padding: 0 16px;
  white-space: normal;

  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeSlideUp} 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 600ms;
  `}
`

const CtaButton = styled.button<{ animate?: boolean }>`
  margin: 30px 0 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 14px;
  border: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  background: linear-gradient(135deg, #6C5DD3 0%, #CBACF9 50%, #6C5DD3 100%);
  background-size: 200% 200%;
  color: #FFFFFF;

  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;

  box-shadow: 0 10px 28px rgba(108, 93, 211, 0.35), 0 6px 18px rgba(0, 0, 0, 0.35);
  transform: translateY(0);
  transition: transform 200ms ease, box-shadow 200ms ease, background-position 300ms ease;

  &::before {
    content: '';
    position: absolute;
    top: -120%;
    left: -20%;
    width: 60%;
    height: 300%;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
    transform: rotate(20deg);
    transition: transform 400ms ease, opacity 300ms ease;
    opacity: 0.6;
    pointer-events: none;
  }

  svg { transition: transform 200ms ease, opacity 200ms ease; opacity: 0.9; }

  &:hover {
    transform: translateY(-2px);
    background-position: 100% 0%;
    box-shadow: 0 16px 36px rgba(108, 93, 211, 0.45), 0 10px 22px rgba(0, 0, 0, 0.45);
  }

  &:hover::before { transform: rotate(20deg) translateX(40%); opacity: 0.8; }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid rgba(203, 172, 249, 0.7); outline-offset: 3px; }

  &:hover svg { transform: translateX(4px); opacity: 1; }

  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeSlideUp} 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 900ms;
  `}

  @media (max-width: 800px) {
    align-self: stretch;
    width: calc(100% - 32px);
    margin: 30px 16px 0;
  }
`

const ForcedBreak = styled.br`
  display: none;

  @media (max-width: 1047px) {
    display: initial;
  }
`


export function MainHeader() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    setShouldAnimate(true)
  }, [])

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('projects')
    if (projectsElement) {
      projectsElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Root>
      <Title animate={shouldAnimate}>Современные сайты и приложения на React</Title>
      <Headline animate={shouldAnimate}>
        Разрабатываю сайты, которые повышают <ForcedBreak />
        <span>онлайн продажи</span>
      </Headline>
      <SubTitle animate={shouldAnimate}>Приветствую! Я Александр Хакана, веб-разработчик с опытом в сфере более двух лет</SubTitle>
      <CtaButton animate={shouldAnimate} onClick={scrollToProjects}>
        Посмотреть работы
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 9H13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9.75 4.5L13.5 9L9.75 13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </CtaButton>
    </Root>
  )
}


