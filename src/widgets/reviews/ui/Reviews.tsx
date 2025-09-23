import styled from 'styled-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from '../../../assets/react.svg'
import firebaseLogo from '../../../assets/firebase.png'
import figmaLogo from '../../../assets/figma.png'

const Root = styled.section`
  width: 100%;
  padding-top: 150px; 
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto; 
  background: #000319; 
  scroll-margin-top: 100px;

  @media (max-width: 500px) {
    padding-bottom: 40px;
  }
`

const Title = styled.h2<{ $fs?: number; $maxw?: number }>`
  margin: 0;
  padding-top: 0;
  font-family: Inter, sans-serif;
  font-weight: 700; 
  font-size: ${({ $fs }) => ($fs ? `${$fs}px` : '48px')}; 
  line-height: 100%;
  color: #FFFFFF; 
  width: ${({ $maxw }) => ($maxw ? `${$maxw}px` : '900px')};
  height: auto;
  text-align: center;

  span {
    color: #CBACF9; 
  }

  @media (max-width: 800px) {
    font-size: 36px;
    white-space: normal;
  }
`

type ReviewsProps = { id?: string }

export function Reviews({ id }: ReviewsProps) {
  const reviews = useMemo(
    () => [
      { id: 1, text: '"Очень довольна сотрудничеством! Сайт получился стильный и удобный, всё работает без ошибок."', name: 'Астахова Марина' },
      { id: 2, text: '"Александр разработал для нашей компании корпоративный сайт. Всё было сделано в срок, дизайн аккуратный, структура продуманная. Особенно понравилось, что он сам предложил несколько идей, которые улучшили проект. Теперь сайт приносит клиентов, спасибо!"', name: 'Горчаков Артём' },
      { id: 3, text: '"Работаем с Александром уже второй раз. Первый был лендинг, второй — интернет-магазин. В обоих случаях он проявил себя как ответственный разработчик: всегда на связи, все правки вносил быстро. Рекомендую!"', name: 'Демидов Кирилл' },
      { id: 4, text: '"Заказывала сайт-визитку. Получилось даже лучше, чем я представляла! Дизайн современный, открывается отлично и на телефоне, и на компьютере."', name: 'Калинина Анна' },
      { id: 5, text: '"Мы обратились к Александру, потому что нужен был сайт под ключ. Он взял на себя всё: от прототипа и дизайна до запуска и подключения аналитики. Видно, что человек работает на результат. Уже через неделю после запуска пошли первые заявки!"', name: 'Рябинин Сергей' },
      { id: 6, text: '"Хочу отметить пунктуальность и внимательность к деталям. Все этапы работы обсуждались, Александр объяснял, как будет работать каждая функция. Для нас это было важно, так как раньше не имели опыта создания сайтов. Получили именно то, что нужно."', name: 'Шаповалова Екатерина' },
      { id: 7, text: '"Сайт работает быстро и без багов. Хорошая работа."', name: 'Черепанов Андрей' }
    ],
    []
  )


  // Responsive sizing based on viewport
  const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1440)

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sizes = useMemo(() => {
    const w = viewportWidth

    // Scale content gradually below 1000px, keep 1 above
    const scale = w >= 1000 ? 1 : Math.max(0.65, w / 1000)

    const baseSlideW = 910
    const baseSlideH = 300
    const baseGap = 52
    const baseCarouselGap = 115
    const baseArrow = 80
    const baseTitleFs = 48
    const baseTextFs = 20
    const baseNameFs = 18
    const baseAvatar = 50

    // Bring arrows closer between 1000-1300 so they don't overflow
    let carouselGap = baseCarouselGap
    if (w <= 1300) {
      // Linearly reduce gap from 1300->1000
      const t = Math.max(0, Math.min(1, (w - 1000) / 300))
      carouselGap = Math.max(24, Math.round(baseCarouselGap * (0.5 + 0.5 * t)))
    }
    if (w <= 650) {
      carouselGap = 16
    }

    // Clamp to viewport to avoid overflow on small screens
    const clampedWidth = Math.max(240, w - 32)
    const slideWidth = w <= 700
      ? Math.min(Math.round(baseSlideW * scale), clampedWidth)
      : Math.round(baseSlideW * scale)
    const slideHeightBase = Math.round(baseSlideH * scale)
    let gap = Math.max(20, Math.round(baseGap * scale))
    if (w <= 650) {
      gap = Math.max(10, Math.round(32 * scale))
    }

    const arrowSize = w <= 1300 ? Math.max(56, Math.round(baseArrow * (w < 1000 ? scale : 0.85))) : baseArrow
    let titleFontSize = Math.round(baseTitleFs * (w < 1200 ? Math.max(0.8, Math.min(1, w / 1200)) : 1))
    if (w <= 650) {
      titleFontSize = Math.max(24, Math.round(baseTitleFs * 0.54))
    }
    let titleMaxWidth = Math.min(900, Math.round(900 * (w < 1000 ? Math.max(0.75, w / 1000) : 1)))
    if (w <= 650) {
      titleMaxWidth = Math.max(220, Math.min(titleMaxWidth, w - 32))
    }
    const reviewFontSize = Math.max(14, Math.round(baseTextFs * scale))
    const reviewWidth = Math.round(slideWidth * 0.89)
    const reviewHeightBase = Math.max(90, Math.round(120 * scale))

    // Increase heights under 650px to keep text inside
    let slideHeight = w <= 650 ? slideHeightBase + 80 : slideHeightBase
    let reviewHeight = w <= 650 ? Math.max(reviewHeightBase, 160) : reviewHeightBase
    // Extra safety for <=500px
    if (w <= 500) {
      slideHeight += 40
      reviewHeight = Math.max(reviewHeight, 200)
    }

    const nameFontSize = Math.max(14, Math.round(baseNameFs * scale))
    const nameWidth = Math.round(260 * scale)
    const avatarSize = Math.max(40, Math.round(baseAvatar * scale))

    // Border geometry derived from scale so it stays aligned
    let borderThickness = Math.max(1, Math.round(2 * scale))
    if (w <= 650) borderThickness = Math.max(borderThickness + 1, 2)
    const slideRadius = Math.max(14, Math.round(20 * scale))
    const beforeRadius = slideRadius + borderThickness + 2
    const afterRadius = Math.max(12, slideRadius - 1)
    const innerBottomInset = Math.max(4, Math.round(7 * scale))
    const innerTopInset = Math.max(3, borderThickness + 2)
    const innerSideInset = Math.max(2, borderThickness)

    // Tech logos and labels scaling
    const techLogoSize = w <= 650 ? 22 : 30
    const techTextFs = w <= 650 ? 16 : 24

    return {
      slideWidth,
      slideHeight,
      gap,
      carouselGap,
      arrowSize,
      titleFontSize,
      titleMaxWidth,
      reviewFontSize,
      reviewWidth,
      reviewHeight,
      nameFontSize,
      nameWidth,
      avatarSize,
      borderThickness,
      slideRadius,
      beforeRadius,
      afterRadius,
      innerBottomInset,
      innerTopInset,
      innerSideInset,
      techLogoSize,
      techTextFs
    }
  }, [viewportWidth])

  const SLIDE_WIDTH = sizes.slideWidth
  const GAP = sizes.gap
  const STEP = SLIDE_WIDTH + GAP
  const enableSwipe = viewportWidth <= 1300

  // Auto-advance timer and navigation
  const autoTimerRef = useRef<number | null>(null)
  const isJumpingRef = useRef(false)
  const isAnimatingRef = useRef(false)
  const count = reviews.length
  const [index, setIndex] = useState(0)
  const [isInstant, setIsInstant] = useState(false)
  const maxIndex = count - 1

  const resetAuto = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current)
    autoTimerRef.current = window.setInterval(() => {
      if (isJumpingRef.current || isAnimatingRef.current) return
      setIsInstant(false)
      isAnimatingRef.current = true
      setIndex((prev) => prev + 1)
    }, 30000)
  }, [])

  const go = useCallback((dir: 'left' | 'right') => {
    if (isJumpingRef.current || isAnimatingRef.current) return
    setIsInstant(false)
    isAnimatingRef.current = true
    setIndex((prev) => (dir === 'right' ? prev + 1 : prev - 1))
    resetAuto()
  }, [resetAuto])

  // Swipe state
  const isPointerDownRef = useRef(false)
  const startXRef = useRef(0)
  const lastXRef = useRef(0)

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableSwipe) return
    isPointerDownRef.current = true
    startXRef.current = e.clientX
    lastXRef.current = e.clientX
    ;(e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId)
  }, [enableSwipe])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableSwipe || !isPointerDownRef.current) return
    lastXRef.current = e.clientX
  }, [enableSwipe])

  const endPointer = useCallback(() => {
    if (!isPointerDownRef.current) return
    isPointerDownRef.current = false
    const dx = lastXRef.current - startXRef.current
    const threshold = Math.max(50, Math.round(SLIDE_WIDTH * 0.15))
    if (Math.abs(dx) >= threshold) {
      if (dx > 0) {
        go('left')
      } else {
        go('right')
      }
    }
  }, [SLIDE_WIDTH, go])

  useEffect(() => {
    resetAuto()
    const visibilityHandler = () => {
      if (document.visibilityState === 'visible') {
        resetAuto()
      } else if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current)
      }
    }
    document.addEventListener('visibilitychange', visibilityHandler)
    return () => { if (autoTimerRef.current) clearInterval(autoTimerRef.current) }
  }, [resetAuto])

  return (
    <Root id={id}
    >
      <Title $fs={sizes.titleFontSize} $maxw={sizes.titleMaxWidth}>
        Отзывы <span>довольных клиентов</span>
      </Title>
      <Carousel $gap={sizes.carouselGap}>
        {viewportWidth > 1300 && (
          <ArrowLeft onClick={() => go('left')} aria-label="Назад" $size={sizes.arrowSize}>
            <ArrowSvg viewBox="0 0 32 32" width={sizes.arrowSize * 0.8} height={sizes.arrowSize * 0.8} aria-hidden>
              <path d="M20 8l-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </ArrowSvg>
          </ArrowLeft>
        )}
        <Frame 
          $w={sizes.slideWidth} 
          $h={sizes.slideHeight}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          onPointerLeave={endPointer}
        >
          <Track
            $instant={isInstant}
            $gap={sizes.gap}
            style={{ transform: `translateX(-${(() => {
              if (index === -1) return 0 * STEP
              if (index === count) return (count + 1) * STEP
              return (index + 1) * STEP
            })()}px)` }}
            onTransitionEnd={() => {
              if (isJumpingRef.current) return
              if (index === -1) {
                isJumpingRef.current = true
                setIsInstant(true)
                setIndex(maxIndex)
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    setIsInstant(false)
                    isJumpingRef.current = false
                    isAnimatingRef.current = false
                  })
                })
              } else if (index === count) {
                isJumpingRef.current = true
                setIsInstant(true)
                setIndex(0)
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    setIsInstant(false)
                    isJumpingRef.current = false
                    isAnimatingRef.current = false
                  })
                })
              } else {
                isAnimatingRef.current = false
              }
              resetAuto()
            }}
          >
            {[reviews[count - 1], ...reviews, reviews[0]].map((r, i) => {
              const realIdx = i - 1
              const activeIdx = (index < 0 ? maxIndex : index > maxIndex ? 0 : index)
              const isActive = realIdx === activeIdx

              // Circular delta between current slide and active slide
              let delta = realIdx - activeIdx
              if (delta > count / 2) delta -= count
              if (delta < -count / 2) delta += count
              // Limit influence distance
              const clamped = Math.max(-2, Math.min(2, delta))

              // Derive 3D coverflow transforms
              const angle = clamped === 0 ? 0 : (clamped < 0 ? 24 : -24)
              const depth = clamped === 0 ? 140 : clamped === -1 || clamped === 1 ? 60 : 20
              const scale = clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.9 : 0.82
              const opacity = clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.85 : 0.5
              const zIndex = clamped === 0 ? 30 : clamped === -1 || clamped === 1 ? 20 : 10

              return (
                <Slide
                  key={`${r.id}-${i}`}
                  data-active={isActive}
                  $w={sizes.slideWidth}
                  $h={sizes.slideHeight}
                  $sr={sizes.slideRadius}
                  $bt={sizes.borderThickness}
                  $rOut={sizes.beforeRadius}
                  $rIn={sizes.afterRadius}
                  $insetB={sizes.innerBottomInset}
                  $insetT={sizes.innerTopInset}
                  $insetS={sizes.innerSideInset}
                  style={{
                    zIndex,
                    filter: isActive ? 'drop-shadow(0 18px 40px rgba(203,172,249,0.25))' : 'drop-shadow(0 10px 26px rgba(0,0,0,0.35))'
                  }}
                >
                  <SlideInner
                    $instant={isInstant}
                    style={{
                      transform: `translateZ(${depth}px) rotateY(${angle}deg) scale(${scale})`,
                      opacity
                    }}
                  >
                    <ReviewText $fs={sizes.reviewFontSize} $w={sizes.reviewWidth} $h={sizes.reviewHeight}>{r.text}</ReviewText>
                    <Reviewer>
                      <Avatar $size={sizes.avatarSize}>{getInitials(r.name)}</Avatar>
                      <ReviewerName $fs={sizes.nameFontSize} $w={sizes.nameWidth}>{r.name}</ReviewerName>
                    </Reviewer>
                  </SlideInner>
                </Slide>
              )
            })}
          </Track>
        </Frame>
        {viewportWidth > 1300 && (
          <ArrowRight onClick={() => go('right')} aria-label="Вперёд" $size={sizes.arrowSize}>
            <ArrowSvg viewBox="0 0 32 32" width={sizes.arrowSize * 0.8} height={sizes.arrowSize * 0.8} aria-hidden>
              <path d="M12 8l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </ArrowSvg>
          </ArrowRight>
        )}
      </Carousel>

      <TechList>
        <TechItem>
          <LogoImg src={figmaLogo} alt="figma" $size={sizes.techLogoSize} />
          <TechText $fs={sizes.techTextFs}>figma</TechText>
        </TechItem>
        <TechItem>
          <LogoCircle style={{ background: '#3178C6' }} $size={sizes.techLogoSize}>TS</LogoCircle>
          <TechText $fs={sizes.techTextFs}>typescript</TechText>
        </TechItem>
        <TechItem>
          <LogoImg src={reactLogo} alt="React" $size={sizes.techLogoSize} />
          <TechText $fs={sizes.techTextFs}>React</TechText>
        </TechItem>
        <TechItem>
          <LogoImg src={firebaseLogo} alt="firebase" $size={sizes.techLogoSize} />
          <TechText $fs={sizes.techTextFs}>firebase</TechText>
        </TechItem>
        <TechItem>
          <LogoCircle style={{ background: '#F7DF1E', color: '#000319' }} $size={sizes.techLogoSize}>JS</LogoCircle>
          <TechText $fs={sizes.techTextFs}>javascript</TechText>
        </TechItem>
      </TechList>
    </Root>
  )
}

function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const second = parts[1]?.[0] ?? ''
  return (first + second).toUpperCase()
}

const Carousel = styled.div<{ $gap?: number }>`
  margin-top: 60px; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '115px')};
`

const Frame = styled.div<{ $w?: number; $h?: number }>`
  width: ${({ $w }) => ($w ? `${$w}px` : '910px')}; 
  height: ${({ $h }) => ($h ? `${$h}px` : '300px')}; 
  position: relative;
  contain: layout paint;
  border-radius: 20px;
  perspective: 1200px;
  perspective-origin: 50% 50%;
  touch-action: pan-y;
`

const Track = styled.div<{ $instant?: boolean; $gap?: number }>`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '52px')};
  width: max-content;
  will-change: transform;
  transition: ${({ $instant }) => ($instant ? 'none' : 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)')};
  transform-style: preserve-3d;
`


const Slide = styled.div<{ $instant?: boolean; $w?: number; $h?: number; $sr?: number; $bt?: number; $rOut?: number; $rIn?: number; $insetB?: number; $insetT?: number; $insetS?: number }>`
  position: relative;
  width: ${({ $w }) => ($w ? `${$w}px` : '910px')};
  height: ${({ $h }) => ($h ? `${$h}px` : '300px')};
  flex: 0 0 auto;
  border-radius: ${({ $sr }) => ($sr ? `${$sr}px` : '20px')};
  overflow: hidden;
  transition: ${({ $instant }) => ($instant ? 'none' : 'filter 320ms ease')};
  
  &::before {
    content: '';
    position: absolute;
    inset: ${({ $bt }) => ($bt ? `-${$bt}px` : '-2px')};
    border-radius: ${({ $rOut }) => ($rOut ? `${$rOut}px` : '22px')};
    background: linear-gradient(45deg, #CBACF9, #6C5CE7, #FFFFFF, #CBACF9);
    background-size: 300% 300%;
    animation: shimmerBorder 2.6s ease-in-out infinite;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: ${({ $insetT, $insetS, $insetB }) => (
      $insetT !== undefined && $insetS !== undefined && $insetB !== undefined
        ? `${$insetT}px ${$insetS}px ${$insetB}px ${$insetS}px`
        : '2px 2px 7px 2px'
    )};
    border-radius: ${({ $rIn }) => ($rIn ? `${$rIn}px` : '19px')};
    background: linear-gradient(135deg, #04071D 0%, #0C0E23 100%);
    z-index: 1;
  }
  
  @keyframes shimmerBorder {
    0% { 
      background-position: 0% 50%;
    }
    33% { 
      background-position: 100% 50%;
    }
    66% { 
      background-position: 200% 50%;
    }
    100% { 
      background-position: 0% 50%;
    }
  }
`


const SlideInner = styled.div<{ $instant?: boolean }>`
  position: absolute;
  inset: 0;
  padding: 30px 36px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 2;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  transition: ${({ $instant }) => ($instant ? 'none' : 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms ease')};

  @media (max-width: 500px) {
    padding: 22px 22px;
  }
`

const ReviewText = styled.div<{ $fs?: number; $w?: number; $h?: number }>`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 400; 
  font-size: ${({ $fs }) => ($fs ? `${$fs}px` : '20px')};
  line-height: 1.4;
  width: ${({ $w }) => ($w ? `${$w}px` : '810px')}; 
  height: ${({ $h }) => ($h ? `${$h}px` : '120px')}; 
  overflow: hidden;
  opacity: 1;
  transform: none;
  transition: none;
  text-align: left;
  word-break: break-word;
  overflow-wrap: anywhere;
  hyphens: auto;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 500px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`

const Reviewer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  opacity: 1;
  transform: none;
  transition: none;
`


const Avatar = styled.div<{ $size?: number }>`
  width: ${({ $size }) => ($size ? `${$size}px` : '50px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '50px')};
  border-radius: 50%;
  background: #242938;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
`

const ReviewerName = styled.div<{ $fs?: number; $w?: number }>`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 600; 
  font-size: ${({ $fs }) => ($fs ? `${$fs}px` : '18px')};
  width: ${({ $w }) => ($w ? `${$w}px` : '260px')}; 
  height: 25px; 
  line-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ArrowBase = styled.button<{ $size?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size ? `${$size}px` : '80px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '80px')};
  border: 0;
  background: transparent;
  color: #CBACF9;
  cursor: pointer;
  transition: transform 180ms ease, filter 180ms ease, opacity 180ms ease;
  opacity: 0.95;
  flex-shrink: 0;

  animation: shimmerColor 2.6s ease-in-out infinite;

  &:hover { transform: translateY(-1px) scale(1.06); filter: drop-shadow(0 0 14px rgba(203,172,249,0.45)); opacity: 1; }
  &:active { transform: translateY(0) scale(0.99); }
  &:focus-visible { outline: 2px solid rgba(203,172,249,0.6); outline-offset: 3px; border-radius: 8px; }

  @keyframes shimmerColor {
    0% { color: #CBACF9; }
    33% { color: #6C5CE7; }
    66% { color: #FFFFFF; }
    100% { color: #CBACF9; }
  }
`

const ArrowLeft = styled(ArrowBase)``
const ArrowRight = styled(ArrowBase)``

const ArrowSvg = styled.svg`
  display: block;
  stroke: currentColor;
  filter: drop-shadow(0 2px 8px rgba(108,93,211,0.35));
`

// Tech list and logos (restored)
const TechList = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
`

const TechItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const TechText = styled.div<{ $fs?: number }>`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: ${({ $fs }) => ($fs ? `${$fs}px` : '24px')};
  letter-spacing: 0.2px;
  text-transform: uppercase;
`

const LogoImg = styled.img<{ $size?: number }>`
  width: ${({ $size }) => ($size ? `${$size}px` : '30px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '30px')};
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25));
`

const LogoCircle = styled.div<{ $size?: number }>`
  width: ${({ $size }) => ($size ? `${$size}px` : '30px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '30px')};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.4px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
`