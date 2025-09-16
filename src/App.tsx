import { Header } from './widgets/header'
import { MainHeader } from './widgets/main-header'
import { About } from './widgets/about'
import { Projects } from './widgets/projects'
import { Reviews } from './widgets/reviews'
import styled from 'styled-components'
import numberInput from './assets/number-input.png'
import spotlightLeft from './assets/spotlight-left.png'
import spotlightRight from './assets/spotlight-right.png'

const Root = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url(${numberInput});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100% auto; /* stretch full width, keep aspect ratio */
  opacity: 0.7;
`

const SpotlightLeft = styled.div`
  position: absolute;
  top: -120px;
  left: -160px;
  width: 720px;
  height: 720px;
  z-index: 2; /* above content */
  pointer-events: none;
  background-image: url(${spotlightLeft});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 0.75;
`

const SpotlightRight = styled.div`
  position: absolute;
  top: -120px;
  right: -160px;
  width: 720px;
  height: 720px;
  z-index: 2; /* above content */
  pointer-events: none;
  background-image: url(${spotlightRight});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 0.75;
`

function App() {
  return (
    <Root>
      <SpotlightLeft />
      <SpotlightRight />
      <GridBackground />
      <Content>
        <Header />
        <MainHeader />
        <About />
        <Projects />
        <Reviews />
      </Content>
    </Root>
    
  )
}

export default App
