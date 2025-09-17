import styled from 'styled-components'
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
`

const Container = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: 694px 521px;
  column-gap: 30px;
  row-gap: 0;
  align-items: start;
  justify-content: center;
`

const Left = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  height: 541px;
  border-radius: 12px;
  
  &:hover img[alt='Macbook'],
  &:hover div[data-macbook-overlay] {
    transform: translateY(-3px) scale(1.015) rotateZ(-0.2deg);
    filter: saturate(1.03) brightness(1.02)
      drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32))
      drop-shadow(0 6px 18px rgba(255, 255, 255, 0.06));
  }

  &:hover img[alt='Macbook'] {
    /* Minimal: thin outline following PNG alpha + very subtle glow */
    filter: saturate(1.02) brightness(1.01)
      drop-shadow(0 0 2px rgba(203, 172, 249, 1))
      drop-shadow(0 0 16px rgba(203, 172, 249, 0.35));
  }
`

const Right = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 30px;
  justify-items: start;
  margin-top: 77px;
`

const Card = styled.div`
  display: block;
  position: relative;
  border-radius: 12px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -3px; 
    border-radius: 12px;
    border: 1.5px solid transparent;
    box-shadow: 0 0 0 0 rgba(203, 172, 249, 0);
    transition: border-color 250ms ease, box-shadow 250ms ease;
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
  }
`

const MacbookImg = styled.img`
  width: 694px;
  height: 695px;
  object-fit: contain;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 350ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 250ms ease;
  border-radius: 12px;
`

const MacbookOverlay = styled.div`
  position: absolute;
  left: 50px;
  bottom: 10px;
  width: 393px;
  height: 114px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 0;
  text-align: left;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 350ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;

  /* Gradient text shimmer like in About */
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;

  @keyframes titleShimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  ${Left}:hover & {
    color: transparent;
    animation: titleShimmer 1.4s ease-in-out infinite;
  }
`

const SmallImg = styled.img`
  width: 521px;
  height: 255.5px;
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

const CountriesOverlay = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  width: 370px;
  height: 72px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2;
  transform-origin: center;
  will-change: transform;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;

  /* Gradient text shimmer like in About */
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;

  ${Card}:hover & { color: #ffffff; }
`

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

const StackSubtitle = styled.div`
  color: #c1c2d3;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 190px;
  height: 17px;
  line-height: 17px;
`

const StackTitle = styled.div`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 30px;
  width: 300px;
  height: 70px;
  line-height: 38px;

  /* Gradient text shimmer like in About */
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;

  ${Card}:hover & { color: #ffffff; }
`

const Row2 = styled.div`
  width: 1280px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 351px 859px;
  column-gap: 30px;
  align-items: start;
  justify-content: center;
`

const Left2 = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 30px;
`

const Right2 = styled.div`
  display: block;
`

const DevImg = styled.img`
  width: 351px;
  height: 180px;
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
  width: 351px;
  height: 180px;
  border-radius: 12px;

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
`

const DevOverlay = styled.div`
  position: absolute;
  left: 30px;
  top: 29px;
  width: 301px;
  height: 58px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;

  /* Gradient text shimmer like in About */
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;

  ${DevCard}:hover & {
    color: transparent;
    animation: titleShimmer 1.4s ease-in-out infinite;
  }
`

const BtnImg = styled.img`
  width: 351px;
  height: 180px;
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

const BtnCard = styled.div`
  position: relative;
  display: block;
  width: 351px;
  height: 180px;
  border-radius: 12px;

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

const BtnOverlayText = styled.div`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  width: 300px;
  height: 58px;
  line-height: 1.2;

  /* Gradient text shimmer like in About */
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;

  ${BtnCard}:hover & {
    color: transparent;
    animation: titleShimmer 1.4s ease-in-out infinite;
  }
`

const BtnOverlayCta = styled.button`
  margin-top: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 14px;
  border: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  pointer-events: auto;

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
`

const CodeImg = styled.img`
  width: 859px;
  height: 390px;
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
  width: 859px;
  height: 390px;
  border-radius: 18px;

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
`

const CodeOverlay = styled.div`
  position: absolute;
  left: 30px;
  top: 0;
  height: 390px;
  display: flex;
  align-items: center;
  pointer-events: none;
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
`

const CodeTitle = styled.div`
  color: #e4ecff;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`

const CodeSubtitle = styled.div`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  width: 311px;
  height: 150px;
  line-height: 1.2;

  /* Gradient text shimmer like in About */
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;

  ${CodeCard}:hover & {
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    animation: titleShimmer 1.4s ease-in-out infinite;
  }
`

export function Advantages() {
  return (
    <Root>
      <AdvantagesBg />
      <Background />
      <Content>
        <Container>
          <Left>
            <MacbookImg src={macbook} alt="Macbook" />
            <MacbookOverlay data-macbook-overlay>
              Уникальный дизайн в Figma, а не шаблоны с конструкторов
            </MacbookOverlay>
          </Left>
          <Right>
            <Card>
              <SmallImg src={countries} alt="Countries" />
              <CountriesOverlay data-countries-overlay>
                Ответственный подход к каждому проекту
              </CountriesOverlay>
            </Card>
            <Card>
              <SmallImg src={stack} alt="Stack" />
              <StackOverlay>
                <StackOverlayInner data-stack-overlay-inner>
                  <StackSubtitle>
                    Всё для веб-сайта
                  </StackSubtitle>
                  <StackTitle>
                    Используемые технологии
                  </StackTitle>
                </StackOverlayInner>
              </StackOverlay>
            </Card>
          </Right>
        </Container>
        <Row2>
          <Left2>
            <DevCard>
              <DevImg src={development} alt="Development" />
              <DevOverlay data-dev-overlay>
                Полная адаптивность под любые устройства
              </DevOverlay>
            </DevCard>
            <BtnCard>
              <BtnImg src={button} alt="Button" />
              <BtnOverlay>
                <BtnOverlayInner data-button-overlay-inner>
                  <BtnOverlayText>Начнем разработку сайта уже сегодня?</BtnOverlayText>
                  <BtnOverlayCta>Заказать!</BtnOverlayCta>
                </BtnOverlayInner>
              </BtnOverlay>
            </BtnCard>
          </Left2>
          <Right2>
            <CodeCard>
              <CodeImg src={code} alt="Code" />
              <CodeOverlay>
                <CodeOverlayInner data-code-overlay-inner>
                  <CodeTitle>Гарантия качества</CodeTitle>
                  <CodeSubtitle>
                    Делаю проекты, которые работают стабильно и без ошибок
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


