import styled from 'styled-components'
import cardone from '../../../assets/cardone.png'
import cardtwo from '../../../assets/cardtwo.png'
import cardthree from '../../../assets/cardthree.png'
import cardfour from '../../../assets/cardfour.png'

const Root = styled.section`
  width: 100%;
  min-height: 700px;
  padding-bottom: 100px;
  background: #000319;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  scroll-margin-top: 100px;

  @media (max-width: 1300px) and (min-width: 801px) {
    padding-bottom: calc(70px + (100 - 70) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    padding-bottom: 60px;
  }
`

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 800px) {
    padding: 0 16px;
  }
`

const Title = styled.h2`
  margin: 0;
  margin-top: 120px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #ffffff;
  text-align: center;

  @media (max-width: 1300px) and (min-width: 801px) {
    margin-top: calc(80px + (120 - 80) * ((100vw - 800px) / 500));
    font-size: calc(38px + (48 - 38) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    margin-top: 56px;
    font-size: 34px;
  }

  @media (max-width: 500px) {
    white-space: nowrap;
    font-size: clamp(18px, 7.2vw, 34px);
  }

  span {
    color: #CBACF9;
  }
`

const Grid = styled.div`
  margin-top: 70px;
  width: 1240px;
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: 190px 190px;
  column-gap: 40px;
  row-gap: 40px;

  @media (max-width: 1300px) and (min-width: 801px) {
    width: calc(760px + (1240 - 760) * ((100vw - 800px) / 500));
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    column-gap: calc(24px + (40 - 24) * ((100vw - 800px) / 500));
    row-gap: calc(24px + (40 - 24) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 40px;
    grid-template-columns: 1fr;
    grid-template-rows: none;
    column-gap: 0;
    row-gap: 20px;
  }
`

const Card = styled.div`
  position: relative;
  width: 600px;
  height: 190px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg, #04071D 0%, #0C0E23 100%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 26px 28px;
  transform-origin: center;
  transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 280ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 200ms ease;

  @media (max-width: 1300px) and (min-width: 801px) {
    width: 100%;
    height: calc(160px + (190 - 160) * ((100vw - 800px) / 500));
    padding: calc(18px + (26 - 18) * ((100vw - 800px) / 500))
      calc(20px + (28 - 20) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 16px 16px 18px;
    border-radius: 12px;
    align-items: center;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(36, 41, 56, 1);
    transition: box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10px;
    background: #161935;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    z-index: 0;
    transition: background 260ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  @media (max-width: 1300px) and (min-width: 801px) {
    &::after {
      height: calc(8px + (10 - 8) * ((100vw - 800px) / 500));
    }
  }

  @media (max-width: 800px) {
    &::after {
      height: 8px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }

  &:hover {
    transform: translateY(-3px) scale(1.012) rotateZ(0.15deg);
  }

  &:hover::before {
    box-shadow:
      inset 0 0 0 1px rgba(203, 172, 249, 0.6),
      inset 0 0 36px rgba(108, 93, 211, 0.22);
  }

  &:hover::after {
    background: linear-gradient(90deg, #6C5DD3 0%, #CBACF9 50%, #6C5DD3 100%);
    box-shadow: 0 0 18px rgba(203, 172, 249, 0.35), 0 6px 14px rgba(108, 93, 211, 0.28);
  }
`

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;

  @media (max-width: 1300px) and (min-width: 801px) {
    gap: calc(12px + (18 - 12) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    align-items: center;
    gap: 14px;
  }
`

const CardIcon = styled.img`
  width: 94px;
  height: 87px;
  object-fit: contain;
  display: block;
  flex: 0 0 94px;

  @media (max-width: 1300px) and (min-width: 801px) {
    width: calc(80px + (94 - 80) * ((100vw - 800px) / 500));
    height: calc(74px + (87 - 74) * ((100vw - 800px) / 500));
    flex: 0 0 auto;
  }

  @media (max-width: 800px) {
    width: 72px;
    height: 66px;
    flex: 0 0 72px;
  }
`

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  @media (max-width: 1300px) and (min-width: 801px) {
    gap: calc(6px + (8 - 6) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    gap: 6px;
  }
`

const CardTitle = styled.div`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  
  opacity: 1;
  filter: none;
  transition: none;

  @media (max-width: 1300px) and (min-width: 801px) {
    font-size: calc(22px + (26 - 22) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @keyframes titleShimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  ${Card}:hover & {
    color: transparent;
    animation: titleShimmer 1.4s ease-in-out infinite;
  }
`

const CardSubtitle = styled.div`
  color: #BEC1DD;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  max-width: 520px;
  opacity: 1;
  filter: none;
  transition: none;

  @media (max-width: 1300px) and (min-width: 801px) {
    font-size: calc(14px + (16 - 14) * ((100vw - 800px) / 500));
    max-width: calc(440px + (520 - 440) * ((100vw - 800px) / 500));
  }

  @media (max-width: 800px) {
    font-size: 14px;
    max-width: none;
  }
`

type AboutProps = { id?: string }

export function About({ id }: AboutProps) {
  return (
    <Root id={id}
    >
      <Inner>
        <Title>
          Ваш <span>будущий разработчик</span>
        </Title>
        <Grid>
          <Card>
            <CardContent>
              <CardIcon src={cardone} alt="icon one" />
              <CardText>
                <CardTitle>Обо мне</CardTitle>
                <CardSubtitle>Я веб-разработчик, создающий современные сайты, которые помогают бизнесу расти и находить новых клиентов.</CardSubtitle>
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardIcon src={cardtwo} alt="icon two" />
              <CardText>
                <CardTitle>Более 2 лет в разработке</CardTitle>
                <CardSubtitle>Работаю с React, TypeScript и Figma, создаю быстрые, надёжные и современные страницы.</CardSubtitle>
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardIcon src={cardthree} alt="icon three" />
              <CardText>
                <CardTitle>Индивидуальные решения</CardTitle>
                <CardSubtitle>Никаких шаблонов — каждый проект уникален, сроки и стоимость фиксируются заранее, а результат довожу до конца.</CardSubtitle>
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardIcon src={cardfour} alt="icon four" />
              <CardText>
                <CardTitle>Разработка сайтов с нуля</CardTitle>
                <CardSubtitle>От лендингов и визиток до корпоративных решений и интернет-магазинов — под задачи именно вашего бизнеса.</CardSubtitle>
              </CardText>
            </CardContent>
          </Card>
        </Grid>
      </Inner>
    </Root>
  )
}



