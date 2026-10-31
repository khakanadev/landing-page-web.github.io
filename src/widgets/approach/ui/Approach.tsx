import { CodeXmlIcon, MessagesSquareIcon, RocketIcon } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { Card, CardContent } from '@/shared/ui/card'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'

const steps = [
  {
    icon: MessagesSquareIcon,
    title: 'Анализ и обсуждение задачи',
    text: 'Подробно обсуждаем вашу идею и формируем техническое задание: цели сайта, аудиторию, нужные функции. Определяем структуру и дизайн, согласовываем сроки и бюджет — так ожидания прозрачны с самого начала.',
  },
  {
    icon: CodeXmlIcon,
    title: 'Разработка и создание проекта',
    text: 'Разрабатываю уникальный дизайн в Figma, затем создаю сайт на современных технологиях. Каждый блок продумываю так, чтобы он был не только красивым, но и удобным. По ходу работы показываю промежуточные результаты.',
  },
  {
    icon: RocketIcon,
    title: 'Финализация и запуск',
    text: 'Вместе тестируем сайт на разных устройствах и в браузерах, вношу правки. Подключаю нужные сервисы: формы обратной связи, чаты, аналитику. Вы получаете готовый продукт, инструкцию и поддержку после сдачи.',
  },
]

type ApproachProps = { id?: string }

export function Approach({ id }: ApproachProps) {
  return (
    <section id={id} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="От идеи" accent="до результата" description="Три понятных шага к запуску вашего проекта" />
        <ol className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-5">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100} className="h-full">
              <li className="h-full">
                <Card className="card-glow h-full gap-0 rounded-3xl border-white/10 bg-linear-to-b from-[#0b0e27] to-[#060920] py-0">
                  <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl border border-brand/25 bg-brand/10 text-brand">
                        <step.icon className="size-6" aria-hidden="true" />
                      </span>
                      <Badge variant="outline" className="rounded-full border-brand/30 px-3 py-1 text-sm text-brand">
                        Шаг {index + 1}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{step.text}</p>
                  </CardContent>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
