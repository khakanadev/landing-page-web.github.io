import { Header } from '@/widgets/header'
import { MainHeader } from '@/widgets/main-header'
import { Advantages } from '@/widgets/advantages'
import { About } from '@/widgets/about'
import { Projects } from '@/widgets/projects'
import { Reviews } from '@/widgets/reviews'
import { Approach } from '@/widgets/approach'
import { Footer } from '@/widgets/footer'
import { TooltipProvider } from '@/shared/ui/tooltip'
import gridBackground from '@/assets/number-input.png'
import spotlightLeft from '@/assets/spotlight-left.png'
import spotlightRight from '@/assets/spotlight-right.png'

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="relative isolate min-h-svh overflow-x-clip">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]">
          <img src={gridBackground} alt="" className="absolute inset-0 size-full object-cover object-top opacity-60 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
          <img src={spotlightLeft} alt="" className="absolute -top-32 -left-40 w-[min(720px,90vw)] opacity-70" />
          <img src={spotlightRight} alt="" className="absolute -top-32 -right-40 w-[min(720px,90vw)] opacity-70" />
        </div>
        <Header />
        <main>
          <MainHeader />
          <Advantages />
          <About id="about" />
          <Projects id="projects" />
          <Reviews id="reviews" />
          <Approach id="process" />
        </main>
        <Footer id="contacts" />
      </div>
    </TooltipProvider>
  )
}

export default App
