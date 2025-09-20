import styled from 'styled-components'
import pattern from '../../../assets/pattern.png'

const Root = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000319;
  padding: 200px 0 50px 0;
  position: relative;
  scroll-margin-top: 100px;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`

const PatternLayer = styled.div`
  position: absolute;
  left: 50%;
  top: -500px;
  transform: translateX(-50%);
  width: 1388px;
  height: 1300px;
  pointer-events: none;
  z-index: 0;
  background-image: url(${pattern});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 1388px 1451px;
  opacity: 1;
  mix-blend-mode: screen;
  filter: brightness(1.25) contrast(1.1);
`

const Title = styled.h2`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  color: #ffffff;
  max-width: 720px;
  text-align: center;
  
  span {
    color: #CBACF9;
  }
`

const Subtitle = styled.p`
  margin: 24px 0 0;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #C1C2D3;
  width: 584px;
  height: 22px;
`

const CtaButton = styled.button`
  margin: 24px 0 0;
  width: 239px;
  height: 69px;
  background: linear-gradient(135deg, #6C5DD3 0%, #CBACF9 50%, #6C5DD3 100%);
  background-size: 200% 200%;
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(108, 93, 211, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  @keyframes gradientPulse {
    0%, 90% { 
      background-position: 0% 50%;
      box-shadow: 0 8px 32px rgba(108, 93, 211, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3);
    }
    95% { 
      background-position: 100% 50%;
      box-shadow: 0 8px 32px rgba(108, 93, 211, 0.6), 0 4px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(203, 172, 249, 0.4);
    }
    100% { 
      background-position: 0% 50%;
      box-shadow: 0 8px 32px rgba(108, 93, 211, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3);
    }
  }
  
  animation: gradientPulse 3s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(135deg, #CBACF9, #6C5DD3, #CBACF9);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    background-position: 100% 0%;
    box-shadow: 0 16px 48px rgba(108, 93, 211, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4);
  }
  
  
  &:hover::after {
    opacity: 1;
  }
  
  &:hover svg {
    transform: rotate(45deg) translateY(-2px);
  }
  
  &:active {
    transform: translateY(-2px) scale(1.01);
  }
  
  &:focus-visible {
    outline: 2px solid rgba(203, 172, 249, 0.7);
    outline-offset: 3px;
  }
`

const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
  animation: bounce 2s ease-in-out infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(2px) rotate(45deg);
    }
    50% {
      transform: translateY(-2px) rotate(45deg);
    }
  }
`

const BottomSection = styled.div`
  margin-top: 200px;
  width: 1255px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`

const Copyright = styled.span`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #C1C2D3;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #C1C2D3;
  text-decoration: none;
  transition: all 0.2s ease;
  
  svg path { transition: fill 0.3s ease; }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
  }

  &:hover svg path { fill: url(#grad-social); }
`

type FooterProps = { id?: string }

export function Footer({ id }: FooterProps) {
  return (
    <Root id={id}
    >
      <PatternLayer />
      <MainContent>
        <Title>
          Хотите <span>современный сайт</span>, который работает на вас?
        </Title>
        <Subtitle>
          Давайте обсудим проект и создадим решение под ваш бизнес!
        </Subtitle>
        <CtaButton as="a" href="https://t.me/khakanadev" target="_blank" rel="noopener noreferrer">
          Написать сейчас
          <ArrowIcon viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L12 12M12 12V4M12 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </ArrowIcon>
        </CtaButton>
      </MainContent>
      
      <BottomSection>
        <Copyright>© 2025 Alexander Khakana</Copyright>
        <SocialLinks>
          <SocialLink href="https://github.com/KalashiQ" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad-social" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#CBACF9" />
                  <stop offset="100%" stop-color="#6C5DD3" />
                </linearGradient>
              </defs>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://wa.me/79114564506" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad-social" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#CBACF9" />
                  <stop offset="100%" stop-color="#6C5DD3" />
                </linearGradient>
              </defs>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </SocialLink>
          <SocialLink href="https://t.me/khakanadev" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad-social" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#CBACF9" />
                  <stop offset="100%" stop-color="#6C5DD3" />
                </linearGradient>
              </defs>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </SocialLink>
          <SocialLink href="mailto:Kalashiq.org@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad-social" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#CBACF9" />
                  <stop offset="100%" stop-color="#6C5DD3" />
                </linearGradient>
              </defs>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </SocialLink>
        </SocialLinks>
      </BottomSection>
    </Root>
  )
}
