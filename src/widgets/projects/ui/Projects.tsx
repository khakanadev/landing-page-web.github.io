import { ArrowUpRightIcon } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { Card, CardContent } from '@/shared/ui/card'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'
import diplomGptImage from '@/assets/diplomGptImage.jpg'
import fitnessArtImage from '@/assets/fitnessArtImage.jpg'
import profCourseImage from '@/assets/profCourseImage.jpg'
import eatDeliveryImage from '@/assets/eatDeliveryImage.jpg'

const projects = [
  {
    title: 'DiplomGPT',
    description: 'Сервис на основе искусственного интеллекта для генерации и оформления учебных работ любого уровня.',
    href: 'https://www.diplomgpt.ru/',
    image: diplomGptImage,
    tags: ['AI-сервис', 'Веб-приложение'],
  },
  {
    title: 'FitnessArt',
    description: 'Современное фитнес-пространство с разнообразными тренировками и зонами для спорта.',
    href: 'https://fitness-art-antei.ru/tcz-antej/',
    image: fitnessArtImage,
    tags: ['Корпоративный сайт'],
  },
  {
    title: 'Курс тренировок',
    description: 'Тренировки, которые работают: персональный план, поддержка 24/7 и реальные результаты.',
    href: 'https://aliorudzhev.ru/',
    image: profCourseImage,
    tags: ['Лендинг'],
  },
  {
    title: 'Доставка еды IceYou',
    description: 'Платформа онлайн-доставки еды с удобным интерфейсом.',
    href: 'https://iceyou.ru/',
    image: eatDeliveryImage,
    tags: ['Интернет-магазин'],
  },
]

type ProjectsProps = { id?: string }

export function Projects({ id }: ProjectsProps) {
  return (
    <section id={id} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Последние" accent="проекты" />
        <ul className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 100} className="h-full">
              <li className="h-full">
                <Card className="card-glow group h-full gap-0 overflow-hidden rounded-3xl border-white/10 bg-[#080b22] py-0">
                  <div className="aspect-[11/5] overflow-hidden border-b border-white/10 bg-[#0d1130]">
                    <img
                      src={project.image}
                      alt={`Главная страница проекта ${project.title}`}
                      loading="lazy"
                      className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full border-white/15 text-muted-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:ring-[3px] focus-visible:after:ring-ring/60"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-pretty text-muted-foreground">{project.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-medium text-brand" aria-hidden="true">
                      Перейти на сайт
                      <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
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
