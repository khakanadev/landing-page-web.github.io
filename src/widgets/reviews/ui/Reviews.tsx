import styled from 'styled-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from '../../../assets/react.svg'
import firebaseLogo from '../../../assets/firebase.png'
import figmaLogo from '../../../assets/figma.png'
import { AnimatedSection } from '../../../shared/ui/AnimatedSection'
import andreyAvatar from '../../../assets/reviews/andrey.jpg'
import annAvatar from '../../../assets/reviews/ann.jpg'
import artemAvatar from '../../../assets/reviews/artem.jpg'
import ekaterinaAvatar from '../../../assets/reviews/ekaterina.jpg'
import kirillAvatar from '../../../assets/reviews/kirill.jpg'
import marinaAvatar from '../../../assets/reviews/marina.jpg'
import sergeyAvatar from '../../../assets/reviews/sergey.jpg'

const Root = styled.section`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  background: #000319;
  scroll-margin-top: 100px;
  position: relative;
  isolation: isolate; /* own stacking context to avoid blending artifacts */
  backface-visibility: hidden;
  transform: translateZ(0); /* promote to its own layer, mitigates subpixel seams */

  @media (min-width: 1301px) {
    padding-bottom: 0;
  }

  @media (max-width: 800px) {
    padding-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 500px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const Title = styled.h2<{ $fs?: number; $maxw?: number }>`
  margin: 0;
  padding-top: 150px;
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
    padding-top: 90px;
    font-size: 36px;
    white-space: normal;
  }

  @media (max-width: 500px) {
    padding-top: 70px;
  }
`

type ReviewsProps = { id?: string }

export function Reviews({ id }: ReviewsProps) {
  const reviews = useMemo(() => [
    { id: 1, text: '"Очень довольна сотрудничеством! Сайт получился стильный и удобный, всё работает без ошибок."', name: 'Астахова Марина' },
    { id: 2, text: '"Александр разработал для нашей компании корпоративный сайт. Всё было сделано в срок, дизайн аккуратный, структура продуманная. Особенно понравилось, что он сам предложил несколько идей, которые улучшили проект. Теперь сайт приносит клиентов, спасибо!"', name: 'Горчаков Артём' },
    { id: 3, text: '"Работаем с Александром уже второй раз. Первый был лендинг, второй — интернет-магазин. В обоих случаях он проявил себя как ответственный разработчик: всегда на связи, все правки вносил быстро. Рекомендую!"', name: 'Демидов Кирилл' },
    { id: 4, text: '"Заказывала сайт-визитку. Получилось даже лучше, чем я представляла! Дизайн современный, открывается отлично и на телефоне, и на компьютере."', name: 'Калинина Анна' },
    { id: 5, text: '"Мы обратились к Александру, потому что нужен был сайт под ключ. Он взял на себя всё: от прототипа и дизайна до запуска и подключения аналитики. Видно, что человек работает на результат. Уже через неделю после запуска пошли первые заявки!"', name: 'Рябинин Сергей' },
    { id: 6, text: '"Хочу отметить пунктуальность и внимательность к деталям. Все этапы работы обсуждались, Александр объяснял, как будет работать каждая функция. Для нас это было важно, так как раньше не имели опыта создания сайтов. Получили именно то, что нужно."', name: 'Шаповалова Екатерина' },
    { id: 7, text: '"Сайт работает быстро и без багов. Хорошая работа."', name: 'Черепанов Андрей' }
  ], [])

  const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1440)

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const sizes = useMemo(() => {
    const w = viewportWidth
    const scale = w >= 1000 ? 1 : Math.max(0.65, w / 1000)

    const baseSlideW = 910, baseSlideH = 300, baseGap = 52, baseCarouselGap = 115
    const baseArrow = 80, baseTitleFs = 48, baseTextFs = 20, baseNameFs = 18, baseAvatar = 50

    let carouselGap = baseCarouselGap
    if (w <= 1300) {
      const t = Math.max(0, Math.min(1, (w - 1000) / 300))
      carouselGap = Math.max(24, Math.round(baseCarouselGap * (0.5 + 0.5 * t)))
    }
    if (w <= 650) carouselGap = 16

    const clampedWidth = Math.max(240, w - 32)
    const slideWidth = w <= 700 ? Math.min(Math.round(baseSlideW * scale), clampedWidth) : Math.round(baseSlideW * scale)
    const slideHeightBase = Math.round(baseSlideH * scale)
    let gap = Math.max(20, Math.round(baseGap * scale))
    if (w <= 650) gap = Math.max(10, Math.round(32 * scale))

    const arrowSize = w <= 1300 ? Math.max(56, Math.round(baseArrow * (w < 1000 ? scale : 0.85))) : baseArrow
    let titleFontSize = Math.round(baseTitleFs * (w < 1200 ? Math.max(0.8, Math.min(1, w / 1200)) : 1))
    if (w <= 650) titleFontSize = Math.max(24, Math.round(baseTitleFs * 0.54))
    let titleMaxWidth = Math.min(900, Math.round(900 * (w < 1000 ? Math.max(0.75, w / 1000) : 1)))
    if (w <= 650) titleMaxWidth = Math.max(220, Math.min(titleMaxWidth, w - 32))

    const reviewFontSize = Math.max(14, Math.round(baseTextFs * scale))
    const reviewWidth = Math.round(slideWidth * 0.89)
    const reviewHeightBase = Math.max(90, Math.round(120 * scale))

    let slideHeight = w <= 650 ? slideHeightBase + 80 : slideHeightBase
    let reviewHeight = w <= 650 ? Math.max(reviewHeightBase, 160) : reviewHeightBase
    if (w <= 500) {
      slideHeight += 40
      reviewHeight = Math.max(reviewHeight, 200)
    }

    const nameFontSize = Math.max(14, Math.round(baseNameFs * scale))
    const nameWidth = Math.round(260 * scale)
    const avatarSize = Math.max(40, Math.round(baseAvatar * scale))

    let borderThickness = Math.max(1, Math.round(2 * scale))
    if (w <= 650) borderThickness = Math.max(borderThickness + 1, 2)
    const slideRadius = Math.max(14, Math.round(20 * scale))
    const beforeRadius = slideRadius + borderThickness + 2
    const afterRadius = Math.max(12, slideRadius - 1)
    const innerBottomInset = Math.max(4, Math.round(7 * scale))
    const innerTopInset = Math.max(3, borderThickness + 2)
    const innerSideInset = Math.max(2, borderThickness)

    let techLogoSize = 30, techTextFs = 24, techGap = 80
    if (w <= 1000) techGap = 64
    if (w <= 800) { techLogoSize = 24; techTextFs = 18; techGap = 40 }
    if (w <= 650) { techLogoSize = 22; techTextFs = 16; techGap = 28 }

    return {
      slideWidth, slideHeight, gap, carouselGap, arrowSize, titleFontSize, titleMaxWidth,
      reviewFontSize, reviewWidth, reviewHeight, nameFontSize, nameWidth, avatarSize,
      borderThickness, slideRadius, beforeRadius, afterRadius, innerBottomInset,
      innerTopInset, innerSideInset, techLogoSize, techTextFs, techGap
    }
  }, [viewportWidth])

  const { slideWidth, gap, carouselGap, arrowSize, titleFontSize, titleMaxWidth, 
          reviewFontSize, reviewWidth, reviewHeight, nameFontSize, nameWidth, avatarSize,
          borderThickness, slideRadius, beforeRadius, afterRadius, innerBottomInset,
          innerTopInset, innerSideInset, techLogoSize, techTextFs, techGap } = sizes

  const STEP = slideWidth + gap
  const enableClickNavigation = viewportWidth < 1300
  const count = reviews.length
  const maxIndex = count - 1

  const isJumpingRef = useRef(false)
  const isAnimatingRef = useRef(false)
  const lastClickTimeRef = useRef(0)
  const [index, setIndex] = useState(0)
  const [isInstant, setIsInstant] = useState(false)

  const go = useCallback((dir: 'left' | 'right') => {
    const now = Date.now()
    if (now - lastClickTimeRef.current < 800) return // 800ms cooldown
    if (isJumpingRef.current || isAnimatingRef.current) return
    
    lastClickTimeRef.current = now
    setIsInstant(false)
    isAnimatingRef.current = true
    setIndex((prev) => (dir === 'right' ? prev + 1 : prev - 1))
  }, [])

  const handleSlideClick = useCallback(() => {
    const now = Date.now()
    if (now - lastClickTimeRef.current < 800) return // 800ms cooldown
    if (!enableClickNavigation || isJumpingRef.current || isAnimatingRef.current) return
    
    lastClickTimeRef.current = now
    setIsInstant(false)
    isAnimatingRef.current = true
    setIndex((prev) => prev + 1)
  }, [enableClickNavigation])

  return (
    <Root id={id}>
      <AnimatedSection animationType="fadeInUp" delay={0}>
        <Title $fs={titleFontSize} $maxw={titleMaxWidth}>
          Отзывы <span>довольных клиентов</span>
        </Title>
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp" delay={200}>
        <Carousel $gap={carouselGap}>
        {viewportWidth > 1300 && (
          <ArrowLeft onClick={() => go('left')} aria-label="Назад" $size={arrowSize}>
            <ArrowSvg viewBox="0 0 32 32" width={arrowSize * 0.8} height={arrowSize * 0.8} aria-hidden>
              <path d="M20 8l-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </ArrowSvg>
          </ArrowLeft>
        )}
        <Frame $w={slideWidth} $h={sizes.slideHeight}>
          <Track $instant={isInstant} $gap={gap}
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
            }}
          >
            {[reviews[count - 1], ...reviews, reviews[0]].map((r, i) => {
              const realIdx = i - 1
              const activeIdx = (index < 0 ? maxIndex : index > maxIndex ? 0 : index)
              const isActive = realIdx === activeIdx
              
              // No need to calculate slide index since we always go to next slide

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
                  $w={slideWidth} $h={sizes.slideHeight} $sr={slideRadius} $bt={borderThickness}
                  $rOut={beforeRadius} $rIn={afterRadius} $insetB={innerBottomInset}
                  $insetT={innerTopInset} $insetS={innerSideInset}
                  onClick={enableClickNavigation ? handleSlideClick : undefined}
                  style={{
                    zIndex,
                    filter: isActive ? 'drop-shadow(0 18px 40px rgba(203,172,249,0.25))' : 'drop-shadow(0 10px 26px rgba(0,0,0,0.35))',
                    cursor: enableClickNavigation ? 'pointer' : 'default'
                  }}
                >
                  <SlideInner
                    $instant={isInstant}
                    onClick={enableClickNavigation ? (e) => {
                      e.stopPropagation()
                      handleSlideClick()
                    } : undefined}
                    style={{
                      transform: `translateZ(${depth}px) rotateY(${angle}deg) scale(${scale})`,
                      opacity
                    }}
                  >
                    <ReviewText $fs={reviewFontSize} $w={reviewWidth} $h={reviewHeight}
                      onClick={enableClickNavigation ? (e) => { e.stopPropagation(); handleSlideClick() } : undefined}>
                      {r.text}
                    </ReviewText>
                    <Reviewer onClick={enableClickNavigation ? (e) => { e.stopPropagation(); handleSlideClick() } : undefined}>
                      {(() => {
                        const src = getAvatarForName(r.name)
                        return src
                          ? <AvatarImg src={src} alt={r.name} $size={avatarSize} />
                          : <Avatar $size={avatarSize}>{getInitials(r.name)}</Avatar>
                      })()}
                      <ReviewerName $fs={nameFontSize} $w={nameWidth}>{r.name}</ReviewerName>
                    </Reviewer>
                  </SlideInner>
                </Slide>
              )
            })}
          </Track>
        </Frame>
        {viewportWidth > 1300 && (
          <ArrowRight onClick={() => go('right')} aria-label="Вперёд" $size={arrowSize}>
            <ArrowSvg viewBox="0 0 32 32" width={arrowSize * 0.8} height={arrowSize * 0.8} aria-hidden>
              <path d="M12 8l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </ArrowSvg>
          </ArrowRight>
        )}
        </Carousel>
      </AnimatedSection>

      <AnimatedSection animationType="fadeInUp" delay={400}>
        <TechList $gap={techGap}>
        <TechItem>
          <LogoImg src={figmaLogo} alt="figma" $size={techLogoSize} />
          <TechText $fs={techTextFs}>figma</TechText>
        </TechItem>
        <TechItem>
          <LogoCircle style={{ background: '#3178C6' }} $size={techLogoSize}>TS</LogoCircle>
          <TechText $fs={techTextFs}>typescript</TechText>
        </TechItem>
        <TechItem>
          <LogoImg src={reactLogo} alt="React" $size={techLogoSize} />
          <TechText $fs={techTextFs}>React</TechText>
        </TechItem>
        <TechItem>
          <LogoImg src={firebaseLogo} alt="firebase" $size={techLogoSize} />
          <TechText $fs={techTextFs}>firebase</TechText>
        </TechItem>
        <TechItem>
          <LogoCircle style={{ background: '#F7DF1E', color: '#000319' }} $size={techLogoSize}>JS</LogoCircle>
          <TechText $fs={techTextFs}>javascript</TechText>
        </TechItem>
        </TechList>
      </AnimatedSection>
    </Root>
  )
}

function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const second = parts[1]?.[0] ?? ''
  return (first + second).toUpperCase()
}

function getAvatarForName(fullName: string): string | undefined {
  const parts = fullName.trim().split(/\s+/)
  const firstName = (parts[1] ?? parts[0] ?? '').toLowerCase().replace('ё', 'е')

  switch (firstName) {
    case 'марина':
      return marinaAvatar
    case 'артем':
    case 'артём':
      return artemAvatar
    case 'кирилл':
      return kirillAvatar
    case 'анна':
      return annAvatar
    case 'сергей':
      return sergeyAvatar
    case 'екатерина':
      return ekaterinaAvatar
    case 'андрей':
      return andreyAvatar
    default:
      return undefined
  }
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
  pointer-events: auto;

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
  pointer-events: auto;

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
  pointer-events: auto;
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

const AvatarImg = styled.img<{ $size?: number }>`
  width: ${({ $size }) => ($size ? `${$size}px` : '50px')};
  height: ${({ $size }) => ($size ? `${$size}px` : '50px')};
  border-radius: 50%;
  object-fit: cover;
  display: inline-block;
  background: #242938;
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
const TechList = styled.div<{ $gap?: number }>`
  margin-top: 70px;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '80px')};
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