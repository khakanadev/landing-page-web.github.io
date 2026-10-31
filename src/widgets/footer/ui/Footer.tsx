import { ArrowRightIcon, MailIcon, SendIcon } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip'
import { Reveal } from '@/shared/ui/reveal'
import { GithubIcon, TelegramIcon, WhatsappIcon } from '@/shared/ui/social-icons'
import { contacts } from '@/shared/config/site'
import pattern from '@/assets/pattern.png'

const socials = [
  { label: 'GitHub', href: contacts.github, icon: GithubIcon },
  { label: 'WhatsApp', href: contacts.whatsapp, icon: WhatsappIcon },
  { label: 'Telegram', href: contacts.telegram, icon: TelegramIcon },
  { label: 'Email', href: contacts.email, icon: MailIcon },
]

type FooterProps = { id?: string }

export function Footer({ id }: FooterProps) {
  return (
    <footer id={id} className="relative overflow-hidden px-4 pt-16 pb-10 sm:pt-24">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[720px] w-[1100px] max-w-none -translate-x-1/2 bg-contain bg-top bg-no-repeat opacity-70 mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        style={{ backgroundImage: `url(${pattern})` }}
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Хотите <span className="text-brand">современный сайт</span>, который работает на вас?
        </h2>
        <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Давайте обсудим проект и создадим решение под ваш бизнес!
        </p>
        <div className="relative mt-10 w-full sm:w-auto">
          <div
            className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(closest-side,rgb(168_85_247/0.45),transparent)] blur-xl"
            aria-hidden="true"
          />
          <div className="cta-halo relative rounded-2xl">
          <Button
            asChild
            className="btn-gradient group relative h-16 w-full rounded-2xl px-8 text-lg font-semibold text-white shadow-[0_20px_60px_-15px_rgb(168_85_247/0.9)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-100 sm:w-auto sm:px-10 [&_svg:not([class*='size-'])]:size-5"
          >
            <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
              <span className="btn-shine absolute inset-0 rounded-[inherit]" aria-hidden="true" />
              <SendIcon className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-12" />
              <span className="relative">Написать сейчас</span>
              <ArrowRightIcon className="relative transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Button>
          </div>
        </div>
        <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Telegram · @khakanalex
        </p>
      </Reveal>

      <div className="relative mx-auto mt-20 max-w-6xl sm:mt-24">
        <Separator className="bg-white/10" />
        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Alexander Khakana</p>
          <ul className="flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="ghost" size="icon-lg" className="size-11 rounded-xl bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-brand">
                      <a
                        href={social.href}
                        aria-label={social.label}
                        {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <social.icon className="size-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{social.label}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
