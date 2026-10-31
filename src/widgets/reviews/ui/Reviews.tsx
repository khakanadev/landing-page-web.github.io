import { useEffect, useState } from 'react'
import { QuoteIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Card, CardContent, CardFooter } from '@/shared/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/shared/ui/carousel'
import { Reveal } from '@/shared/ui/reveal'
import { SectionHeading } from '@/shared/ui/section-heading'
import { cn } from '@/shared/lib/utils'
import reactLogo from '@/assets/react.svg'
import firebaseLogo from '@/assets/firebase.png'
import figmaLogo from '@/assets/figma.png'
import andreyAvatar from '@/assets/reviews/andrey.jpg'
import annAvatar from '@/assets/reviews/ann.jpg'
import artemAvatar from '@/assets/reviews/artem.jpg'
import ekaterinaAvatar from '@/assets/reviews/ekaterina.jpg'
import kirillAvatar from '@/assets/reviews/kirill.jpg'
import marinaAvatar from '@/assets/reviews/marina.jpg'
import sergeyAvatar from '@/assets/reviews/sergey.jpg'

const reviews = [
  { name: 'Астахова Марина', avatar: marinaAvatar, text: 'Очень довольна сотрудничеством! Сайт получился стильный и удобный, всё работает без ошибок.' },
  { name: 'Горчаков Артём', avatar: artemAvatar, text: 'Александр разработал для нашей компании корпоративный сайт. Всё было сделано в срок, дизайн аккуратный, структура продуманная. Особенно понравилось, что он сам предложил несколько идей, которые улучшили проект. Теперь сайт приносит клиентов, спасибо!' },
  { name: 'Демидов Кирилл', avatar: kirillAvatar, text: 'Работаем с Александром уже второй раз. Первый был лендинг, второй — интернет-магазин. В обоих случаях он проявил себя как ответственный разработчик: всегда на связи, все правки вносил быстро. Рекомендую!' },
  { name: 'Калинина Анна', avatar: annAvatar, text: 'Заказывала сайт-визитку. Получилось даже лучше, чем я представляла! Дизайн современный, открывается отлично и на телефоне, и на компьютере.' },
  { name: 'Рябинин Сергей', avatar: sergeyAvatar, text: 'Мы обратились к Александру, потому что нужен был сайт под ключ. Он взял на себя всё: от прототипа и дизайна до запуска и подключения аналитики. Видно, что человек работает на результат. Уже через неделю после запуска пошли первые заявки!' },
  { name: 'Шаповалова Екатерина', avatar: ekaterinaAvatar, text: 'Хочу отметить пунктуальность и внимательность к деталям. Все этапы работы обсуждались, Александр объяснял, как будет работать каждая функция. Для нас это было важно, так как раньше не имели опыта создания сайтов. Получили именно то, что нужно.' },
  { name: 'Черепанов Андрей', avatar: andreyAvatar, text: 'Сайт работает быстро и без багов. Хорошая работа.' },
]

const technologies = [
  { name: 'Figma', logo: <img src={figmaLogo} alt="" className="size-6 object-contain" /> },
  { name: 'TypeScript', logo: <span className="grid size-6 place-items-center rounded-md bg-[#3178c6] text-[10px] font-bold text-white">TS</span> },
  { name: 'React', logo: <img src={reactLogo} alt="" className="size-6 object-contain" /> },
  { name: 'Firebase', logo: <img src={firebaseLogo} alt="" className="size-6 object-contain" /> },
  { name: 'JavaScript', logo: <span className="grid size-6 place-items-center rounded-md bg-[#f7df1e] text-[10px] font-bold text-[#000319]">JS</span> },
]

function initials(name: string) {
  return name.split(' ').map((part) => part[0]).join('').slice(0, 2)
}

type ReviewsProps = { id?: string }

export function Reviews({ id }: ReviewsProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <section id={id} className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Отзывы" accent="довольных клиентов" />

        <Reveal className="mt-12 sm:mt-16">
          <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} aria-label="Отзывы клиентов">
            <CarouselContent className="-ml-4 py-2 lg:-ml-5">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={review.name}
                  aria-label={`${index + 1} из ${reviews.length}`}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 lg:pl-5"
                >
                  <Card className="card-glow h-full gap-0 rounded-3xl border-white/10 bg-[#080b22] py-0">
                    <CardContent className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                      <QuoteIcon className="size-7 text-brand/60" aria-hidden="true" />
                      <blockquote className="text-pretty leading-relaxed text-foreground/90">{review.text}</blockquote>
                    </CardContent>
                    <CardFooter className="gap-3 border-t border-white/10 px-6 py-5 sm:px-7">
                      <Avatar className="size-11">
                        <AvatarImage src={review.avatar} alt="" className="object-cover" />
                        <AvatarFallback>{initials(review.name)}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold">{review.name}</p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Выбор отзыва">
                {reviews.map((review, index) => (
                  <button
                    key={review.name}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Отзыв ${index + 1}`}
                    aria-current={selected === index ? 'true' : undefined}
                    className="group/dot grid size-6 place-items-center rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <span
                      className={cn(
                        'h-1.5 rounded-full bg-white/20 transition-all duration-300 group-hover/dot:bg-white/40',
                        selected === index ? 'w-5 bg-brand group-hover/dot:bg-brand' : 'w-1.5'
                      )}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <CarouselPrevious className="static size-11 translate-y-0 border-white/15 bg-white/5" />
                <CarouselNext className="static size-11 translate-y-0 border-white/15 bg-white/5" />
              </div>
            </div>
          </Carousel>
        </Reveal>
      </div>

      <Reveal className="mt-16 sm:mt-20">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16" aria-label="Технологии">
            {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
              <li
                key={`${tech.name}-${index}`}
                aria-hidden={index >= technologies.length ? 'true' : undefined}
                className="flex items-center gap-3 text-base font-semibold tracking-wide text-foreground/80 uppercase sm:text-lg"
              >
                {tech.logo}
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
