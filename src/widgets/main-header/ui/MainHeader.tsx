import { ArrowRightIcon, SendIcon } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { contacts } from '@/shared/config/site'

export function MainHeader() {
  return (
    <section id="top" className="relative px-4 pt-32 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="motion-safe:animate-[reveal_800ms_ease-out_both] text-balance text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Разрабатываю сайты, которые повышают{' '}
          <span className="bg-linear-to-r from-brand to-[#9d8cff] bg-clip-text text-transparent">онлайн продажи</span>
        </h1>

        <p className="motion-safe:animate-[reveal_800ms_ease-out_240ms_both] mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-xl">
          Приветствую! Я Александр Хакана — веб-разработчик с опытом более трёх лет.
        </p>

        <div className="motion-safe:animate-[reveal_800ms_ease-out_360ms_both] mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="xl"
            className="btn-gradient btn-shine group w-full font-semibold text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.8)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(168_85_247/0.95)] active:translate-y-0 sm:w-auto"
          >
            <a href="#projects">
              Посмотреть работы
              <span className="grid size-6 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon className="size-3.5" />
              </span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="btn-beam group w-full border-white/10 bg-white/[0.03] backdrop-blur transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brand/10 hover:text-foreground sm:w-auto"
          >
            <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
              <SendIcon className="text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
              Обсудить проект
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
