import styled from 'styled-components'
import redDragonVideo from '../../../assets/reddragon.mov'
import fitnessArtVideo from '../../../assets/fitnessart.mov'
import profCourseVideo from '../../../assets/profcourse.mov'
import eatDeliveryVideo from '../../../assets/eatdelivery.mov'

const Root = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  padding-bottom: 100px;
  background: #000319;
  scroll-margin-top: 100px;
`

const Title = styled.h2`
  margin: 0;
  padding: 80px 0 50px 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #ffffff;
  width: 900px;
  height: 48px;
  text-align: center;

  span {
    color: #CBACF9;
  }
`

const Grid = styled.div`
  margin-top: 50px;
  width: 1240px; /* 600 + 600 + 40 gap */
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: 678px 678px;
  gap: 40px;
`

const Card = styled.div`
  position: relative;
  width: 600px;
  height: 678px;
  border-radius: 16px;
  overflow: visible;
  border: 0.1px solid #242938;
  background: linear-gradient(135deg, #04071D 0%, #0C0E23 100%);
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const VideoPlaceholder = styled.div`
  width: 552px;
  height: 360px;
  margin: 48px 2px 0 2px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 52, 96, 0.95) 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 6px 18px rgba(0,0,0,0.25);
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  min-width: 552px;
  max-width: 552px;
  min-height: 360px;
  max-height: 360px;
  flex: 0 0 auto;
`

const Video = styled.video`
  width: 450px;
  height: calc(100% - 25px);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  object-position: center;
  transform-origin: center;
  will-change: transform;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: translateX(-50%) scale(1.02);
  }
`

const TextBlock = styled.div`
  width: 552px;
  margin: 36px 2px 30px 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const ProjectTitle = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1;
  color: #FFFFFF;
  background-image: linear-gradient(90deg, #ffffff 0%, #CBACF9 50%, #ffffff 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  will-change: background-position, color;
  opacity: 1;
  filter: none;
  transition: none;

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

const ProjectSubtitle = styled.div`
  margin-top: 18px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: #BEC1DD;
`

const ProjectLink = styled.a`
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #CBACF9;
  text-decoration: none;
  cursor: pointer;
  pointer-events: auto;
  transition: color 200ms ease;

  svg { transition: transform 200ms ease, opacity 200ms ease; opacity: 0.95; }
  &:hover svg { transform: translateX(4px); opacity: 1; }
  &:focus-visible { outline: 2px solid rgba(203, 172, 249, 0.6); outline-offset: 3px; border-radius: 6px; }
`

 

// removed inner content components per new empty card design

type ProjectsProps = { id?: string }

export function Projects({ id }: ProjectsProps) {
  return (
    <Root id={id}
    >
      <Title>
        Последние <span>реализованные проекты</span>
      </Title>
      <Grid>
        <Card>
          <VideoPlaceholder>
            <Video
              src={redDragonVideo}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          </VideoPlaceholder>
          <TextBlock>
            <ProjectTitle>"Машины Красного Дракона"</ProjectTitle>
            <ProjectSubtitle>Профессиональный импорт автомобилей из Японии, Китая и Кореи - от подбора до доставки под ключ.</ProjectSubtitle>
            <ProjectLink href="https://rdcar.ru/" target="_blank" rel="noopener noreferrer">
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </TextBlock>
        </Card>
        <Card>
          <VideoPlaceholder>
            <Video
              src={fitnessArtVideo}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          </VideoPlaceholder>
          <TextBlock>
            <ProjectTitle>Фитнес-пространство "FitnessArt"</ProjectTitle>
            <ProjectSubtitle>Современное фитнес-пространство с разнообразными тренировками и зонами для спорта.</ProjectSubtitle>
            <ProjectLink href="#">
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </TextBlock>
        </Card>
        <Card>
          <VideoPlaceholder>
            <Video
              src={profCourseVideo}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          </VideoPlaceholder>
          <TextBlock>
            <ProjectTitle>Курс тренировок</ProjectTitle>
            <ProjectSubtitle>Тренировки, которые работают: персональный план, поддержка 24/7 и реальные результаты.</ProjectSubtitle>
            <ProjectLink href="https://aliorudzhev.ru/" target="_blank" rel="noopener noreferrer">
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </TextBlock>
        </Card>
        <Card>
          <VideoPlaceholder>
            <Video
              src={eatDeliveryVideo}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          </VideoPlaceholder>
          <TextBlock>
            <ProjectTitle>Доставка еды "IceYou"</ProjectTitle>
            <ProjectSubtitle>Платформа онлайн-доставки еды с удобным интерфейсом.</ProjectSubtitle>
            <ProjectLink href="https://iceyou.ru/" target="_blank" rel="noopener noreferrer">
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </TextBlock>
        </Card>
      </Grid>
    </Root>
  )
}


