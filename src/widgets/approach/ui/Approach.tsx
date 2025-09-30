import styled from 'styled-components'
import sectionInput from '../../../assets/section input.png'
import card1 from '../../../assets/card1-ad.png'
import card2 from '../../../assets/card2-ad.png'
import card3 from '../../../assets/card3-ad.png'
import { AnimatedSection } from '../../../shared/ui/AnimatedSection'

const Root = styled.section`
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #000319;
  position: relative;
  isolation: isolate;
  backface-visibility: hidden;
  transform: translateZ(0);

  &::before { display: none; }

  @media (max-width: 800px) {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 64px;
  }

  @media (max-width: 500px) {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 64px;
  }

  @media (min-width: 500px) {
    margin-top: clamp(64px, calc(64px + 0.70 * (100vw - 500px)), 150px);
  }
`

const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1300px) {
    width: 100%;
    padding: 0 16px;
  }
`

const Title = styled.h2`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #FFFFFF;
  text-align: center;
  
  span {
    color: #CBACF9;
  }

  @media (max-width: 1000px) {
    font-size: 36px;
  }
`

const Subtitle = styled.div`
  margin-top: 10px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: clamp(12px, 1.25vw, 16px);
  line-height: 1.4;
  color: #E4ECFF;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Row = styled.div`
  margin-top: 40px;
  width: 1280px;
  display: grid;
  grid-template-columns: 387px 387px 387px;
  column-gap: 40px;
  align-items: start;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 1300px) {
    display: none;
  }
`

const Card = styled.div`
  position: relative;
  width: 387px;
  height: 620px;
  border-radius: 16px;
  overflow: visible;
  border: 0.1px solid #242938;
  background: linear-gradient(135deg, #04071D 0%, #0C0E23 100%);
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  will-change: transform, box-shadow, filter, border-color;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 280ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 200ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 0 0 0 rgba(203, 172, 249, 0);
    transition: box-shadow 220ms ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02) rotateZ(0.25deg);
    border-color: rgba(203, 172, 249, 0.35);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }

  &:hover::after { box-shadow: inset 0 0 0 1.5px rgba(203, 172, 249, 0.85); }

  &:active { transform: translateY(-1px) scale(1.01); }
`
const Label = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 14px;
  border: 2px solid transparent;
  background:
    linear-gradient(rgba(0, 3, 25, 0.75), rgba(0, 3, 25, 0.75)) padding-box,
    linear-gradient(135deg, rgba(108, 93, 211, 0.95) 0%, rgba(203, 172, 249, 0.95) 50%, rgba(108, 92, 231, 0.95) 100%) border-box;
  box-shadow: 0 10px 24px rgba(108, 93, 211, 0.18), 0 4px 14px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  pointer-events: none;
  margin-bottom: 24px;
  opacity: 1;
  filter: none;
  transition: none;
  will-change: auto;
  backface-visibility: hidden;
`

const LabelText = styled.div`
  color: #CBACF9;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  opacity: 1;
  filter: none;
  transition: none;
  will-change: auto;
  backface-visibility: hidden;
`

const CardOverlay = styled.div`
  position: absolute;
  top: 41%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
`

const CardTitle = styled.div`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1;
  width: 278px;
  min-height: 70px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: normal;
  word-break: break-word;
  opacity: 1;
  filter: none;
  transition: none;
  will-change: auto;
  backface-visibility: hidden;

  @keyframes titleShimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  ${Card}:hover & {
    background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
    background-size: 200% 100%;
    background-position: 0% 50%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: titleShimmer 1.4s ease-in-out infinite;
  }
`

const CardSubtitle = styled.div`
  margin-top: 18px;
  color: #E4ECFF;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  width: 338px;
  height: 96px;
  text-align: center;
  opacity: 1;
  filter: none;
  transition: none;
  will-change: auto;
  backface-visibility: hidden;
`

const Corner = styled.img<{ $pos: 'tl' | 'tr' | 'bl' | 'br' }>`
  position: absolute;
  width: 42px;
  height: 42px;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
  transition: top 220ms ease, left 220ms ease, right 220ms ease, bottom 220ms ease;

  ${(p) => p.$pos === 'tl' && 'top: -15px; left: -15px;'}
  ${(p) => p.$pos === 'tr' && 'top: -15px; right: -15px;'}
  ${(p) => p.$pos === 'bl' && 'bottom: -15px; left: -15px;'}
  ${(p) => p.$pos === 'br' && 'bottom: -15px; right: -15px;'}

  ${Card}:hover & {
    ${(p) => p.$pos === 'tl' && 'top: -21px; left: -21px;'}
    ${(p) => p.$pos === 'tr' && 'top: -21px; right: -21px;'}
    ${(p) => p.$pos === 'bl' && 'bottom: -21px; left: -21px;'}
    ${(p) => p.$pos === 'br' && 'bottom: -21px; right: -21px;'}
  }
`

const AltRow = styled.div`
  display: none;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  @media (max-width: 1300px) {
    display: flex;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const AltImg = styled.img`
  display: block;
  height: auto;
  width: min(380px, calc((100vw - 32px - 2 * 16px) / 3));
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);

  @media (max-width: 800px) {
    width: min(500px, calc(100vw - 32px));
    margin: 0 auto;
  }
`

export function Approach() {
  return (
    <Root>
      <Container>
        <AnimatedSection animationType="fadeInUp" delay={0}>
          <Title>
            От идеи <span>до результата</span>
          </Title>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={200}>
          <Subtitle>Три понятных шага к запуску вашего проекта</Subtitle>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={400}>
          <Row>
            <AnimatedSection animationType="fadeInLeft" delay={600}>
              <Card>
                <Corner src={sectionInput} alt="decor" $pos="tl" />
                <Corner src={sectionInput} alt="decor" $pos="tr" />
                <Corner src={sectionInput} alt="decor" $pos="bl" />
                <Corner src={sectionInput} alt="decor" $pos="br" />
                <CardOverlay>
                  <Label><LabelText>Шаг 1</LabelText></Label>
                  <CardTitle>Анализ и обсуждение задачи</CardTitle>
                  <CardSubtitle>
                    На этом этапе мы подробно обсуждаем вашу идею и формируем техническое задание. Я уточняю все детали: какие цели должен решать сайт, какая аудитория у бизнеса, какие функции необходимы. Вместе определяем структуру и дизайн, согласовываем сроки и бюджет. Это помогает сразу выстроить прозрачные ожидания и избежать недопонимания в дальнейшем.
                  </CardSubtitle>
                </CardOverlay>
              </Card>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInUp" delay={800}>
              <Card>
                <Corner src={sectionInput} alt="decor" $pos="tl" />
                <Corner src={sectionInput} alt="decor" $pos="tr" />
                <Corner src={sectionInput} alt="decor" $pos="bl" />
                <Corner src={sectionInput} alt="decor" $pos="br" />
                <CardOverlay>
                  <Label><LabelText>Шаг 2</LabelText></Label>
                  <CardTitle>Разработка и создание проекта</CardTitle>
                  <CardSubtitle>
                    После утверждения плана начинается работа над проектом. Я разрабатываю уникальный дизайн в Figma, затем создаю сайт на современных технологиях. Каждый блок тщательно продумывается, чтобы сайт был не только красивым, но и удобным для пользователей. В процессе показываю вам промежуточные результаты, чтобы вы всегда были в курсе прогресса.
                  </CardSubtitle>
                </CardOverlay>
              </Card>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInRight" delay={1000}>
              <Card>
                <Corner src={sectionInput} alt="decor" $pos="tl" />
                <Corner src={sectionInput} alt="decor" $pos="tr" />
                <Corner src={sectionInput} alt="decor" $pos="bl" />
                <Corner src={sectionInput} alt="decor" $pos="br" />
                <CardOverlay>
                  <Label><LabelText>Шаг 3</LabelText></Label>
                  <CardTitle>Финализация и доработка проекта</CardTitle>
                  <CardSubtitle>
                    Когда проект готов, мы вместе его тестируем: проверяем, как сайт работает на разных устройствах и в разных браузерах. Если есть пожелания, я оперативно вношу правки. После этого подключаются все нужные сервисы: формы обратной связи, чаты, аналитика. Вы получаете готовый продукт и подробную инструкцию, а также поддержку после сдачи проекта.
                  </CardSubtitle>
                </CardOverlay>
              </Card>
            </AnimatedSection>
          </Row>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={1200}>
          <AltRow>
            <AnimatedSection animationType="fadeInScale" delay={1400}>
              <AltImg src={card1} alt="Этап 1" />
            </AnimatedSection>
            <AnimatedSection animationType="fadeInScale" delay={1600}>
              <AltImg src={card2} alt="Этап 2" />
            </AnimatedSection>
            <AnimatedSection animationType="fadeInScale" delay={1800}>
              <AltImg src={card3} alt="Этап 3" />
            </AnimatedSection>
          </AltRow>
        </AnimatedSection>
      </Container>
    </Root>
  )
}


