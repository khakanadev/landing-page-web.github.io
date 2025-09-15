import styled from 'styled-components'

const Root = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 123px;
`

const Title = styled.h1`
  margin: 0;
  font-family: Inter, sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 120%;
  color: #e4ecff;
  letter-spacing: 0.25em; /* 25% */
  text-align: center;
`

const Headline = styled.h2`
  margin: 22px 0 0;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 100%;
  letter-spacing: -3.6px;
  color: #ffffff;
  width: 1100px;
  height: 144px;
  text-align: center;

  span {
    color: #CBACF9;
  }
`

const SubTitle = styled.p`
  margin: 30px 0 0;
  font-family: Inter, sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #e4ecff;
  text-align: center;
`

const CtaButton = styled.button`
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

  /* Vibrant gradient background with subtle movement */
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

  /* soft glossy sheen */
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

  /* Arrow slide on hover */
  &:hover svg { transform: translateX(4px); opacity: 1; }
`


export function MainHeader() {
  return (
    <Root>
      <Title>Современные сайты и приложения на React</Title>
      <Headline>
      Разрабатываю сайты, которые повышают <span>онлайн-продажи</span>
      </Headline>
      <SubTitle>Приветствую! Я Александр Хакана, веб-разработчик с опытом более двух лет</SubTitle>
      <CtaButton>
        Посмотреть работы
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 9H13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9.75 4.5L13.5 9L9.75 13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </CtaButton>
    </Root>
  )
}


