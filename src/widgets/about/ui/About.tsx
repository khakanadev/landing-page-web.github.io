import { Card, CardContent } from '@/shared/ui/card'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'
import cardone from '@/assets/cardone.png'
import cardtwo from '@/assets/cardtwo.png'
import cardthree from '@/assets/cardthree.png'
import cardfour from '@/assets/cardfour.png'

const facts = [
  {
    icon: cardone,
    title: 'Обо мне',
    text: 'Я веб-разработчик, создающий современные сайты, которые помогают бизнесу расти и находить новых клиентов.',
  },
  {
    icon: cardtwo,
    title: 'Более 3 лет в разработке',
    text: 'Работаю с React, TypeScript и Figma, создаю быстрые, надёжные и современные страницы.',
  },
  {
    icon: cardthree,
    title: 'Индивидуальные решения',
    text: 'Никаких шаблонов — каждый проект уникален, сроки и стоимость фиксируются заранее, а результат довожу до конца.',
  },
  {
    icon: cardfour,
    title: 'Разработка сайтов с нуля',
    text: 'От лендингов и визиток до корпоративных решений и интернет-магазинов — под задачи именно вашего бизнеса.',
  },
]

type AboutProps = { id?: string }

export function About({ id }: AboutProps) {
  return (
    <section id={id} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Ваш" accent="будущий разработчик" />
        <ul className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2 lg:gap-5">
          {facts.map((fact, index) => (
            <Reveal key={fact.title} delay={index * 80} className="h-full">
              <li className="h-full">
                <Card className="card-glow h-full rounded-3xl border-white/10 bg-[#080b22] py-0">
                  <CardContent className="flex gap-5 p-6 sm:p-8">
                    <img src={fact.icon} alt="" loading="lazy" className="size-16 shrink-0 object-contain sm:size-20" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{fact.title}</h3>
                      <p className="text-pretty text-muted-foreground">{fact.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
