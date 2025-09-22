import styled, { keyframes, css } from 'styled-components'
import { useEffect, useState } from 'react'
import macbook from '../../../assets/macbook.png'
import macbookAd from '../../../assets/macbook-ad.png'
import countries from '../../../assets/countries.png'
import countriesAd from '../../../assets/countries-ad.png'
import stack from '../../../assets/stack.png'
import stackAd from '../../../assets/stack-ad.png'
import gridPattern from '../../../assets/grid-pattern.png'
import development from '../../../assets/development.png'
import developmentAd from '../../../assets/development-ad.png'
import button from '../../../assets/button.png'
import buttonAd from '../../../assets/button-ad.png'
import code from '../../../assets/code.png'
import codeAd from '../../../assets/code-ad.png'
import bg from '../../../assets/bg.png'

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

const Root = styled.section`
  width: 100%;
  margin-top: 170px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 1175px;
  background: #000319;

  @media (max-width: 1300px) {
    height: auto;
    padding-top: 30px;
    padding-bottom: 60px;
  }
  @media (max-width: 450px) {
    margin-top: 120px;
    padding-top: 16px;
  }
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url(${gridPattern});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  opacity: 0.6;
`

const AdvantagesBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100% auto;
  opacity: 0.3;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%);
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1300px) {
    padding-top: 40px;
  }
`

const Container = styled.div`
  width: min(1280px, 92vw);
  display: grid;
  grid-template-columns: 55.8% 41.8%;
  column-gap: clamp(16px, 2.34vw, 30px);
  row-gap: 0;
  align-items: start;
  justify-content: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
    & > * { margin: 0; }
  }
`

const Left = styled.div<{ animate?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  height: 541px;
  border-radius: 12px;
  aspect-ratio: 694 / 541;
  
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: 1px;
    bottom: -1px;
    left: 0px;
    border-radius: 25px;
    border: 1.5px solid transparent;
    box-shadow: 0 0 0 0 rgba(203, 172, 249, 0);
    transform-origin: center;
    will-change: transform, box-shadow, border-color;
    transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 250ms ease, box-shadow 250ms ease;
    pointer-events: none;
  }
  
  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeInScale} 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 200ms;
  `}
  
  &:hover img[alt='Macbook'],
  &:hover div[data-macbook-overlay] {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
  }

  &:hover img[alt='Macbook'] {
    filter: none;
  }

  &:hover::after {
    border-color: rgba(203, 172, 249, 0.85);
    box-shadow: 0 0 22px rgba(203, 172, 249, 0.5), 0 10px 22px rgba(108, 93, 211, 0.38);
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
  }

  @media (max-width: 800px) {
    &:hover::after {
      border-color: transparent;
      box-shadow: none;
    }
  }

  @media (max-width: 1300px) {
    height: auto;
    min-height: 0;
  }
  @media (max-width: 800px) {
    order: 1;
  }
`

const Right = styled.div<{ animate?: boolean }>`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 30px;
  justify-items: start;
  margin-top: 0px;

  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeSlideUp} 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 400ms;
  `}

  @media (max-width: 800px) {
    order: 2;
    width: 100%;
    row-gap: 24px;
  }
`

const Card = styled.div`
  display: block;
  position: relative;
  border-radius: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -1px; 
    border-radius: 23px;
    border: 1.5px solid transparent;
    box-shadow: 0 0 0 0 rgba(203, 172, 249, 0);
    transform-origin: center;
    will-change: transform, border-color, box-shadow;
    transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1), border-color 250ms ease, box-shadow 250ms ease;
    pointer-events: none;
  }

  &:hover img,
  &:hover div[data-stack-overlay-inner] {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }

  &:hover::after {
    border-color: rgba(203, 172, 249, 0.6);
    box-shadow: 0 0 18px rgba(203, 172, 249, 0.35), 0 6px 14px rgba(108, 93, 211, 0.28);
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
  }

  @media (max-width: 800px) {
    &:hover::after {
      border-color: transparent;
      box-shadow: none;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

const MacbookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
  z-index: 1;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 350ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 250ms ease;
  border-radius: 12px;
  pointer-events: auto;

  @media (max-width: 1300px) {
    position: absolute;
  }
`

const MacbookFrame = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`

const ResponsivePicture = styled.picture`
  display: block;
  line-height: 0;
  width: 100%;
`

const MacbookOverlay = styled.div``

const SmallImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 15px;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  &:hover {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }
`

const CountriesOverlay = styled.div``

const StackOverlay = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  pointer-events: none;
`

const StackOverlayInner = styled.div`
  transform-origin: center;
  will-change: transform;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

const StackSubtitle = styled.div``

const StackTitle = styled.div``

const Row2 = styled.div<{ animate?: boolean }>`
  width: min(1280px, 92vw);
  margin-top: 30px;
  display: grid;
  grid-template-columns: 28.3% 69.3%;
  column-gap: clamp(16px, 2.34vw, 30px);
  align-items: start;
  justify-content: center;

  ${props => props.animate && css`
    opacity: 0;
    animation: ${fadeSlideUp} 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 600ms;
  `}

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`

const Left2 = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 30px;

  @media (max-width: 800px) {
    order: 2;
    row-gap: 24px;
  }
`

const Right2 = styled.div`
  display: block;

  @media (max-width: 800px) {
    order: 1;
  }
`

const DevImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: 12px;
  &:hover {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }
`

const DevCard = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    border: 1.5px solid transparent;
    box-shadow: 0 0 0 0 rgba(203, 172, 249, 0);
    transition: border-color 250ms ease, box-shadow 250ms ease;
    pointer-events: none;
  }

  &:hover img,
  &:hover div[data-dev-overlay] {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }

  &:hover::after {
    border-color: rgba(203, 172, 249, 0.6);
    box-shadow: 0 0 18px rgba(203, 172, 249, 0.35), 0 6px 14px rgba(108, 93, 211, 0.28);
  }

  @media (max-width: 800px) {
    &:hover::after {
      border-color: transparent;
      box-shadow: none;
    }
  }
`

const DevOverlay = styled.div``

const BtnImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top;
  display: block;
  margin: 0;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: 20px;
  &:hover {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }
`

const BtnCard = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;
  margin: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1.5px solid transparent;
    box-shadow: 0 0 0 0 rgba(203, 172, 249, 0);
    transition: border-color 250ms ease, box-shadow 250ms ease;
    pointer-events: none;
  }

  &:hover img,
  &:hover div[data-button-overlay-inner] {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }

  &:hover::after {
    border-color: rgba(203, 172, 249, 0.6);
    box-shadow: 0 0 18px rgba(203, 172, 249, 0.35), 0 6px 14px rgba(108, 93, 211, 0.28);
  }

  @media (max-width: 800px) {
    &:hover::after {
      border-color: transparent;
      box-shadow: none;
    }
  }
`

const BtnOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 291px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform-origin: center;
  pointer-events: none;

  @media (max-width: 1300px) {
    width: min(291px, 65%);
  }
  @media (max-width: 800px) {
    position: absolute;
    left: 50%;
    top: 46%;
    transform: translate(-50%, -54%) translateY(20px);
    width: min(320px, 90%);
  }
  @media (max-width: 450px) {
    top: 50%;
    transform: translate(-50%, -50%) translateY(8px);
    width: min(78vw, 280px);
  }
`

const BtnOverlayInner = styled.div`
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BtnOverlayText = styled.div``

const BtnOverlayCta = styled.button`
  margin: 56px 0 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 22px;
  border-radius: 14px;
  border: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  pointer-events: auto;
  box-sizing: border-box;

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

  &:hover {
    transform: translateY(-2px);
    background-position: 100% 0%;
    box-shadow: 0 16px 36px rgba(108, 93, 211, 0.45), 0 10px 22px rgba(0, 0, 0, 0.45);
  }
  &:hover::before { transform: rotate(20deg) translateX(40%); opacity: 0.8; }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid rgba(203, 172, 249, 0.7); outline-offset: 3px; }

  @media (max-width: 1000px) and (min-width: 801px) {
    width: calc(25vw - 50px);
  }
  @media (max-width: 800px) {
    padding: 14px 24px;
    width: 200px;
  }
  @media (max-width: 450px) {
    margin-top: 28px;
    font-size: clamp(13px, 4vw, 15px);
    padding: 12px clamp(16px, 6vw, 22px);
    border-radius: 12px;
    width: 150px;
  }
`

const CodeImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 350ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 250ms ease;
  border-radius: 18px;
  &:hover {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }
`

const CodeCard = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 18px;
  margin: 0;

  &:hover img,
  &:hover div[data-code-overlay-inner] {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }

  &:hover img {
    box-shadow: 0 0 0 1.5px rgba(203, 172, 249, 0.6), 0 0 18px rgba(203, 172, 249, 0.35), 0 6px 14px rgba(108, 93, 211, 0.28);
  }

  @media (max-width: 800px) {
    &:hover img {
      box-shadow: none;
    }
  }
`

const CodeOverlay = styled.div`
  position: absolute;
  inset: 0;
  left: 30px;
  display: flex;
  align-items: center;
  pointer-events: none;

  @media (max-width: 1300px) {
    left: 20px;
  }
  @media (max-width: 800px) {
    position: relative;
    left: 0;
    padding: 0;
  }
`

const CodeOverlayInner = styled.div`
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 350ms cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  top: -35px;

  @media (max-width: 1300px) {
    top: -20px;
  }
  @media (max-width: 800px) {
    top: 0;
  }
`

const CodeTitle = styled.div``

const CodeSubtitle = styled.div``

export function Advantages() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    setShouldAnimate(true)
  }, [])

  return (
    <Root>
      <AdvantagesBg />
      <Background />
      <Content>
        <Container>
          <Left animate={shouldAnimate}>
            <ResponsivePicture>
              <source media="(max-width: 800px)" srcSet={`${macbookAd} 1x, ${macbook} 2x`} />
              <MacbookImg src={macbook} alt="Macbook" />
            </ResponsivePicture>
            <MacbookFrame />
            <MacbookOverlay data-macbook-overlay>
              
            </MacbookOverlay>
          </Left>
          <Right animate={shouldAnimate}>
            <Card>
              <ResponsivePicture>
                <source media="(max-width: 800px)" srcSet={`${countriesAd} 1x, ${countries} 2x`} />
                <SmallImg src={countries} alt="Countries" />
              </ResponsivePicture>
              <CountriesOverlay data-countries-overlay>
                
              </CountriesOverlay>
            </Card>
            <Card>
              <ResponsivePicture>
                <source media="(max-width: 800px)" srcSet={`${stackAd} 1x, ${stack} 2x`} />
                <SmallImg src={stack} alt="Stack" />
              </ResponsivePicture>
              <StackOverlay>
                <StackOverlayInner data-stack-overlay-inner>
                  <StackSubtitle>
                    
                  </StackSubtitle>
                  <StackTitle>
                    
                  </StackTitle>
                </StackOverlayInner>
              </StackOverlay>
            </Card>
          </Right>
        </Container>
        <Row2 animate={shouldAnimate}>
          <Left2>
            <DevCard>
              <ResponsivePicture>
                <source media="(max-width: 800px)" srcSet={`${developmentAd} 1x, ${development} 2x`} />
                <DevImg src={development} alt="Development" />
              </ResponsivePicture>
              <DevOverlay data-dev-overlay>
                
              </DevOverlay>
            </DevCard>
            <BtnCard>
              <ResponsivePicture>
                <source media="(max-width: 800px)" srcSet={`${buttonAd} 1x, ${button} 2x`} />
                <BtnImg src={button} alt="Button" />
              </ResponsivePicture>
              <BtnOverlay>
                <BtnOverlayInner data-button-overlay-inner>
                  <BtnOverlayText></BtnOverlayText>
                  <BtnOverlayCta as="a" href="https://t.me/khakanadev" target="_blank" rel="noopener noreferrer">Заказать</BtnOverlayCta>
                </BtnOverlayInner>
              </BtnOverlay>
            </BtnCard>
          </Left2>
          <Right2>
            <CodeCard>
              <ResponsivePicture>
                <source media="(max-width: 800px)" srcSet={`${codeAd} 1x, ${code} 2x`} />
                <CodeImg src={code} alt="Code" />
              </ResponsivePicture>
              <CodeOverlay>
                <CodeOverlayInner data-code-overlay-inner>
                  <CodeTitle></CodeTitle>
                  <CodeSubtitle>
                    
                  </CodeSubtitle>
                </CodeOverlayInner>
              </CodeOverlay>
            </CodeCard>
          </Right2>
        </Row2>
      </Content>
    </Root>
  )
}


