import type { ReactNode } from 'react'
import { CheckIcon, MousePointer2Icon, SendIcon } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Reveal } from '@/shared/ui/reveal'
import { contacts } from '@/shared/config/site'
import { cn } from '@/shared/lib/utils'
import macbook from '@/assets/macbook.png'

const stackRows = [
  ['HTML', 'CSS', 'React', 'TypeScript', 'Next.js', 'Vue'],
  ['Nuxt', 'Express', 'GraphQL', 'Firebase', 'React Native', 'Figma'],
]

const regions = [
  { name: 'США', x: '18%', y: '38%' },
  { name: 'Германия', x: '50%', y: '24%' },
  { name: 'Россия', x: '78%', y: '30%' },
]

const palette = ['#6c5dd3', '#cbacf9', '#8ec5ff', '#f0abfc']

const checks = ['Строгая типизация', 'Тесты пройдены', 'Кроссбраузерность', 'Быстрая загрузка']

function BentoCard({ className, children, delay }: { className?: string; children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} className={cn("min-w-0", className)}>
      <Card className="card-glow group h-full gap-0 overflow-hidden rounded-3xl border-white/10 bg-linear-to-b from-[#0b0e27] to-[#060920] py-0">
        {children}
      </Card>
    </Reveal>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">{children}</p>
}

function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-balance text-xl font-semibold tracking-tight sm:text-2xl', className)}>{children}</h3>
}

function StackRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul
        className={cn(
          'flex w-max shrink-0 gap-2 pr-2 group-hover:[animation-play-state:paused]',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee-slow'
        )}
      >
        {[...items, ...items].map((tech, index) => (
          <li key={`${tech}-${index}`} aria-hidden={index >= items.length ? 'true' : undefined}>
            <Badge
              variant="secondary"
              className="rounded-lg border border-white/5 bg-[#141833] px-3 py-1.5 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand"
            >
              {tech}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Device({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1.5 rounded-lg border border-white/15 bg-[#0d1130] p-2 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-brand/50',
        className
      )}
    >
      <span className="h-1.5 w-2/3 rounded-full bg-brand/60" />
      <span className="h-1 w-full rounded-full bg-white/15" />
      <span className="h-1 w-4/5 rounded-full bg-white/15" />
      {children}
    </div>
  )
}

export function Advantages() {
  return (
    <section aria-label="Преимущества" className="px-4 pb-8 sm:pb-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        <BentoCard className="md:col-span-2 lg:col-span-7 lg:row-span-2">
          <div className="relative aspect-[691/340] overflow-hidden bg-[#2a1f7a]">
            <img
              src={macbook}
              alt=""
              loading="eager"
              className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0b0e27] to-transparent" />
            <div
              className="absolute top-4 right-4 flex animate-float gap-1.5 rounded-full border border-white/15 bg-[#0b0e27]/80 p-1.5 backdrop-blur sm:top-6 sm:right-6"
              aria-hidden="true"
            >
              {palette.map((color) => (
                <span key={color} className="size-5 rounded-full ring-1 ring-white/20 sm:size-6" style={{ background: color }} />
              ))}
            </div>
            <div className="absolute top-[38%] left-[58%] motion-safe:animate-[cursor-move_7s_ease-in-out_infinite]" aria-hidden="true">
              <MousePointer2Icon className="size-5 fill-[#f0abfc] text-[#f0abfc] drop-shadow" />
              <span className="ml-4 inline-block rounded-md rounded-tl-none bg-[#f0abfc] px-2 py-0.5 text-xs font-semibold text-[#2a0a3a]">
                Александр
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-3 p-6 sm:p-8">
            <Eyebrow>Дизайн</Eyebrow>
            <CardTitle className="sm:text-3xl">Уникальный дизайн в Figma, а не шаблоны с конструкторов</CardTitle>
            <p className="text-pretty text-muted-foreground">
              Каждый макет проектируется под ваш бизнес и аудиторию, а затем переносится в код без потерь.
            </p>
          </div>
        </BentoCard>

        <BentoCard delay={100} className="lg:col-span-5">
          <div className="relative flex h-full min-h-60 flex-col p-6 sm:p-8">
            <CardTitle className="relative z-10">Ответственный подход к каждому проекту</CardTitle>
            <div className="relative mt-4 min-h-28 flex-1" aria-label="География клиентов: США, Германия, Россия" role="img">
              <div
                className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
                style={{ backgroundImage: 'radial-gradient(rgb(255 255 255 / 0.4) 1px, transparent 1px)', backgroundSize: '9px 9px' }}
              />
              <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M18 38 Q34 -4 50 24 Q64 4 78 30"
                  fill="none"
                  stroke="url(#route)"
                  strokeWidth="0.6"
                  strokeDasharray="2 2"
                  vectorEffect="non-scaling-stroke"
                  className="[stroke-width:1.5px] motion-safe:animate-[dash_2s_linear_infinite]"
                />
                <defs>
                  <linearGradient id="route" x1="0" x2="1">
                    <stop offset="0%" stopColor="#6c5dd3" />
                    <stop offset="100%" stopColor="#cbacf9" />
                  </linearGradient>
                </defs>
              </svg>
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                  style={{ left: region.x, top: region.y }}
                >
                  <span className="relative flex size-3">
                    <span
                      className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60"
                      style={{ animationDelay: `${index * 400}ms` }}
                    />
                    <span className="relative inline-flex size-3 rounded-full bg-brand ring-4 ring-brand/20" />
                  </span>
                  <Badge variant="outline" className="rounded-full border-white/15 bg-[#0b0e27]/90 px-2.5 py-0.5 text-xs text-foreground backdrop-blur sm:text-sm">
                    {region.name}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard delay={200} className="lg:col-span-5">
          <div className="flex h-full flex-col gap-6 py-6 sm:py-8">
            <div className="space-y-2 px-6 sm:px-8">
              <Eyebrow>Всё для веб-сайта</Eyebrow>
              <CardTitle>Используемые технологии</CardTitle>
            </div>
            <div className="mt-auto flex flex-col gap-2">
              <StackRow items={stackRows[0]} />
              <StackRow items={stackRows[1]} reverse />
            </div>
          </div>
        </BentoCard>

        <BentoCard delay={100} className="lg:col-span-4">
          <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
            <CardTitle>Полная адаптивность под любые устройства</CardTitle>
            <div className="mt-auto flex items-end gap-3" aria-hidden="true">
              <div className="flex flex-col items-center">
                <Device className="h-16 w-28 sm:h-20 sm:w-32">
                  <div className="mt-auto grid grid-cols-3 gap-1">
                    <span className="h-3 rounded-sm bg-white/10" />
                    <span className="h-3 rounded-sm bg-white/10" />
                    <span className="h-3 rounded-sm bg-white/10" />
                  </div>
                </Device>
                <span className="h-2 w-1 bg-white/15" />
                <span className="h-1 w-10 rounded-full bg-white/15" />
              </div>
              <Device className="h-20 w-14 delay-75 sm:h-24 sm:w-16">
                <div className="mt-auto grid grid-cols-2 gap-1">
                  <span className="h-3 rounded-sm bg-white/10" />
                  <span className="h-3 rounded-sm bg-white/10" />
                </div>
              </Device>
              <Device className="h-16 w-9 rounded-xl p-1.5 delay-150 sm:h-[4.5rem] sm:w-10">
                <span className="mt-auto h-3 rounded-sm bg-white/10" />
              </Device>
            </div>
          </div>
        </BentoCard>

        <BentoCard delay={200} className="md:col-span-2 lg:col-span-8 lg:row-span-2">
          <div className="grid h-full gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="space-y-4">
              <Eyebrow>Гарантия качества</Eyebrow>
              <CardTitle className="sm:text-3xl">Делаю проекты, которые работают стабильно и без ошибок</CardTitle>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {checks.map((check) => (
                  <li key={check} className="flex items-center gap-2.5 text-muted-foreground">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <CheckIcon className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {check}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#050717] shadow-[0_20px_50px_-20px_rgb(108_93_211/0.5)] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]" aria-hidden="true">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-muted-foreground">landing.tsx</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-[#c7cbe0] sm:text-[13px]">
                <code>
                  <span className="text-[#c792ea]">import</span> {'{ '}<span className="text-[#82aaff]">Hero</span>{' }'} <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">'@/widgets/hero'</span>{'\n'}
                  {'\n'}
                  <span className="text-[#c792ea]">export function</span> <span className="text-[#82aaff]">Landing</span>() {'{'}{'\n'}
                  {'  '}<span className="text-[#c792ea]">return</span> ({'\n'}
                  {'    '}&lt;<span className="text-[#f07178]">Hero</span> <span className="text-[#ffcb6b]">goal</span>=<span className="text-[#c3e88d]">"sales"</span> /&gt;{'\n'}
                  {'  '}){'\n'}
                  {'}'}<span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-brand" />
                </code>
              </pre>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                  Сборка успешна
                </span>
                <span>0 ошибок</span>
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard delay={300} className="lg:col-span-4">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl motion-safe:animate-[spin_8s_linear_infinite]"
            style={{ background: 'conic-gradient(from 0deg, #6c5dd3, #a855f7, #8ec5ff, #6c5dd3)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#060920]/55" aria-hidden="true" />
          <div className="relative flex h-full flex-col items-center justify-center gap-5 p-6 text-center sm:p-8">
            <CardTitle>Начнём разработку сайта уже сегодня?</CardTitle>
            <Button
              asChild
              size="xl"
              className="btn-gradient btn-shine group w-full font-semibold text-white shadow-[0_10px_40px_-10px_rgb(139_92_246/0.8)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                <SendIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Заказать сайт
              </a>
            </Button>
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
