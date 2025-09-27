import styled from 'styled-components'
import { AnimatedSection } from '../../../shared/ui/AnimatedSection'
import macbook from '../../../assets/macbook.png'
import countries from '../../../assets/countries.png'
import stack from '../../../assets/stack.png'
import gridPattern from '../../../assets/grid-pattern.png'
import development from '../../../assets/development.png'
import button from '../../../assets/button.png'
import code from '../../../assets/code.png'
import bg from '../../../assets/bg.png'


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
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: 24px;
    & > * { margin: 0; }
  }
`

const Left = styled.div`
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
    
    transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), border-color 250ms ease, box-shadow 250ms ease;
    pointer-events: none;
  }
  
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
    width: calc(100% - 32px);
    margin: 0 16px;
    
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
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

const Right = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 30px;
  justify-items: start;
  margin-top: 0px;

  @media (max-width: 800px) {
    order: 2;
    width: 100%;
    row-gap: 24px;
    justify-items: center;
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
    width: calc(100% - 32px);
    margin: 0 16px;
    
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
      margin: 0 !important;
      image-rendering: auto;
    }
  }
`

const MacbookOverlay = styled.div``

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
  
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

const StackSubtitle = styled.div``

const StackTitle = styled.div``

const Row2 = styled.div`
  width: min(1280px, 92vw);
  margin-top: 30px;
  display: grid;
  grid-template-columns: 28.3% 69.3%;
  column-gap: clamp(16px, 2.34vw, 30px);
  align-items: start;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
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
    justify-items: center;
  }
`

const Right2 = styled.div`
  display: block;

  @media (max-width: 800px) {
    order: 1;
    display: flex;
    justify-content: center;
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
    width: calc(100% - 32px);
    margin: 0 16px;
    
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
      margin: 0 !important;
      image-rendering: auto;
    }
  }
`

const DevOverlay = styled.div``


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
    width: calc(100% - 32px);
    margin: 0 16px;
    
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
      margin: 0 !important;
      image-rendering: auto;
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
    width: calc(100% - 32px);
    margin: 0 16px;
    
    img {
      width: 100% !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
      margin: 0 !important;
      image-rendering: auto;
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

  return (
    <Root>
      <AdvantagesBg />
      <Background />
      <Content>
        <AnimatedSection animationType="fadeInUp" delay={0}>
          <Container>
            <AnimatedSection animationType="fadeInLeft" delay={200}>
              <Left>
                <img
                  src={macbook}
                  alt="Macbook"
                  style={{ width: '100%', height: 'auto' }}
                />
                <MacbookOverlay data-macbook-overlay>
                  
                </MacbookOverlay>
              </Left>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInRight" delay={400}>
              <Right>
                <AnimatedSection animationType="fadeInScale" delay={600}>
                  <Card>
                    <img
                      src={countries}
                      alt="Countries"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <CountriesOverlay data-countries-overlay>
                      
                    </CountriesOverlay>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInScale" delay={800}>
                  <Card>
                    <img
                      src={stack}
                      alt="Stack"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <StackOverlay>
                      <StackOverlayInner data-stack-overlay-inner>
                        <StackSubtitle>
                          
                        </StackSubtitle>
                        <StackTitle>
                          
                        </StackTitle>
                      </StackOverlayInner>
                    </StackOverlay>
                  </Card>
                </AnimatedSection>
              </Right>
            </AnimatedSection>
          </Container>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={200}>
          <Row2>
            <AnimatedSection animationType="fadeInLeft" delay={400}>
              <Left2>
                <AnimatedSection animationType="fadeInScale" delay={600}>
                  <DevCard>
                    <img
                      src={development}
                      alt="Development"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <DevOverlay data-dev-overlay>
                      
                    </DevOverlay>
                  </DevCard>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInScale" delay={800}>
                  <BtnCard>
                    <img
                      src={button}
                      alt="Button"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <BtnOverlay>
                      <BtnOverlayInner data-button-overlay-inner>
                        <BtnOverlayText></BtnOverlayText>
                        <BtnOverlayCta as="a" href="https://t.me/khakanadev" target="_blank" rel="noopener noreferrer">Заказать</BtnOverlayCta>
                      </BtnOverlayInner>
                    </BtnOverlay>
                  </BtnCard>
                </AnimatedSection>
              </Left2>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInRight" delay={600}>
              <Right2>
                <AnimatedSection animationType="fadeInScale" delay={800}>
                  <CodeCard>
                    <img
                      src={code}
                      alt="Code"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <CodeOverlay>
                      <CodeOverlayInner data-code-overlay-inner>
                        <CodeTitle></CodeTitle>
                        <CodeSubtitle>
                          
                        </CodeSubtitle>
                      </CodeOverlayInner>
                    </CodeOverlay>
                  </CodeCard>
                </AnimatedSection>
              </Right2>
            </AnimatedSection>
          </Row2>
        </AnimatedSection>
      </Content>
    </Root>
  )
}


