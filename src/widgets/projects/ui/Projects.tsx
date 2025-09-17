import styled from 'styled-components'
import projectCard from '../../../assets/project-card.png'

const Root = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  padding-bottom: 100px;
  background: #000319;
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
  grid-template-rows: 518px 518px;
  gap: 40px;
`

const Card = styled.div`
  position: relative;
  width: 600px;
  height: 518px;
  border: 0.1px solid #242938;
  border-radius: 24px;
  overflow: hidden;
  background: #0c0f1d;
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

  &:hover {
    transform: translateY(-4px) scale(1.02) rotateZ(0.25deg);
    border-color: rgba(203, 172, 249, 0.5);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35),
      0 0 18px rgba(203, 172, 249, 0.25),
      0 0 36px rgba(108, 93, 211, 0.25);
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transform-origin: center;
  will-change: transform, filter;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 260ms cubic-bezier(0.22, 1, 0.36, 1);
  filter: saturate(0.98) brightness(0.98);

  ${Card}:hover & {
    transform: translateY(-6px) scale(1.035);
    filter: saturate(1.05) brightness(1.03);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  padding: 0 30px 30px 30px;
  pointer-events: none;
  z-index: 1;
  display: block;
`

const OverlayInner = styled.div`
  position: absolute;
  left: 30px;
  right: 30px;
  top: calc(56% + 145px);
  transform: translateY(-50%);
  transform-origin: center;
  will-change: transform;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);

  ${Card}:hover & {
    transform: translateY(calc(-50% - 6px));
  }
`

const ProjectTitle = styled.div`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  width: 485px;
  height: 36px;
  line-height: 1.1;
  opacity: 1;
  filter: none;
  transition: none;
`

const ProjectDescription = styled.div`
  margin-top: 10px;
  color: #bec1dd;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  width: 552px;
  height: 52px;
  line-height: 1.3;
  opacity: 1;
  filter: none;
  transition: none;
`

const ProjectLink = styled.a`
  position: absolute;
  right: 30px;
  bottom: 30px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #CBACF9;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  pointer-events: auto;
  transition: color 200ms ease;

  svg { transition: transform 200ms ease, opacity 200ms ease; opacity: 0.95; }
  &:hover svg { transform: translateX(4px); opacity: 1; }
  &:focus-visible { outline: 2px solid rgba(203, 172, 249, 0.6); outline-offset: 3px; border-radius: 6px; }
`

export function Projects() {
  return (
    <Root>
      <Title>
        Ключевые <span>реализованные проекты</span>
      </Title>
      <Grid>
        <Card>
          <CardImage src={projectCard} alt="Project" />
          <Overlay>
            <OverlayInner data-project-overlay-inner>
              <ProjectTitle>Проект</ProjectTitle>
              <ProjectDescription>описание проекта</ProjectDescription>
            </OverlayInner>
            <ProjectLink>
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </Overlay>
        </Card>
        <Card>
          <CardImage src={projectCard} alt="Project" />
          <Overlay>
            <OverlayInner data-project-overlay-inner>
              <ProjectTitle>Проект</ProjectTitle>
              <ProjectDescription>описание проекта</ProjectDescription>
            </OverlayInner>
            <ProjectLink>
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </Overlay>
        </Card>
        <Card>
          <CardImage src={projectCard} alt="Project" />
          <Overlay>
            <OverlayInner data-project-overlay-inner>
              <ProjectTitle>Проект</ProjectTitle>
              <ProjectDescription>описание проекта</ProjectDescription>
            </OverlayInner>
            <ProjectLink>
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </Overlay>
        </Card>
        <Card>
          <CardImage src={projectCard} alt="Project" />
          <Overlay>
            <OverlayInner data-project-overlay-inner>
              <ProjectTitle>Проект</ProjectTitle>
              <ProjectDescription>описание проекта</ProjectDescription>
            </OverlayInner>
            <ProjectLink>
              Перейти на сайт
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5H13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectLink>
          </Overlay>
        </Card>
      </Grid>
    </Root>
  )
}


