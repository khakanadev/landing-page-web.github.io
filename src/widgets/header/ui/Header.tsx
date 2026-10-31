import { useEffect, useState } from 'react'
import { MenuIcon, SendIcon } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet'
import { contacts, navItems } from '@/shared/config/site'
import { useActiveSection } from '@/shared/lib/useActiveSection'
import { cn } from '@/shared/lib/utils'

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div
        className={cn(
          'mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 pl-4 transition-colors duration-300 sm:h-16 sm:px-4 sm:pl-5',
          scrolled
            ? 'border-white/10 bg-[#04071d]/80 shadow-[0_8px_30px_rgb(0_0_0/0.45)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        )}
      >
        <a href="#top" className="rounded-md text-base font-semibold tracking-tight outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
          khakana<span className="text-brand">.dev</span>
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'inline-flex h-10 items-center rounded-lg px-3.5 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-white/5 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50',
                    active === item.id && 'bg-white/5 text-brand'
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden h-10 rounded-full border-brand/30 bg-brand/10 px-4 text-brand hover:border-brand/60 hover:bg-brand/20 hover:text-foreground sm:inline-flex"
          >
            <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
              <SendIcon />
              Связаться
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Открыть меню">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-white/10 bg-[#04071d]">
              <SheetHeader>
                <SheetTitle>
                  khakana<span className="text-brand">.dev</span>
                </SheetTitle>
                <SheetDescription>Разработка сайтов на React</SheetDescription>
              </SheetHeader>
              <nav aria-label="Мобильная навигация" className="px-4">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <SheetClose asChild>
                        <a
                          href={`#${item.id}`}
                          className={cn(
                            'flex h-12 items-center rounded-xl px-4 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground',
                            active === item.id && 'bg-white/5 text-brand'
                          )}
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Separator className="mx-4 w-auto!" />
              <div className="px-4">
                <Button asChild variant="brand" size="xl" className="w-full">
                  <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                    <SendIcon />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
