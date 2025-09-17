import styled from 'styled-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reviewFrame from '../../../assets/review.png'
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
`

const Title = styled.h2`
  margin: 0;
  padding-top: 0;
  font-family: Inter, sans-serif;
  font-weight: 700; 
  font-size: 48px; 
  line-height: 100%;
  color: #FFFFFF; 
  width: 900px;
  height: 48px;
  text-align: center;

  span {
    color: #CBACF9; 
  }
`

type ReviewsProps = { id?: string }

export function Reviews({ id }: ReviewsProps) {
  const reviews = useMemo(
    () => [
      { id: 1, text: '" 1 Отличная работа! Сайт получился быстрым и красивым — именно то, что было нужно."', name: 'Иван Петров' },
      { id: 2, text: '" 2 Внимание к деталям и сроки — всё чётко. Рекомендую к сотрудничеству!"', name: 'Мария Смирнова' },
      { id: 3, text: '" 3 Коммуникация на высоте, все правки внесены оперативно. Остались только положительные эмоции."', name: 'Алексей Иванов' },
      { id: 4, text: '" 4 Понравился дизайн и адаптивность. На мобильных всё выглядит отлично!"', name: 'Ольга Соколова' },
      { id: 5, text: '" 5 Подсказали с архитектурой, сделали чистый код. Приятно работать с профессионалами."', name: 'Дмитрий Кузнецов' },
      { id: 6, text: '" 6 Надёжно, быстро, качественно. Обязательно вернусь с новым проектом."', name: 'Анна Попова' },
      { id: 7, text: '" 7 Получили именно то, что хотели. Спасибо за терпение и крутую реализацию!"', name: 'Сергей Волков' }
    ],
    []
  )


  const SLIDE_WIDTH = 910
  const GAP = 52
  const STEP = SLIDE_WIDTH + GAP
  const count = reviews.length
  const [index, setIndex] = useState(0)
  const [isInstant, setIsInstant] = useState(false)
  const autoTimerRef = useRef<number | null>(null)
  const isJumpingRef = useRef(false)
  const isAnimatingRef = useRef(false)
  const maxIndex = count - 1

  const go = (dir: 'left' | 'right') => {
    if (isJumpingRef.current || isAnimatingRef.current) return
    setIsInstant(false)
    isAnimatingRef.current = true
    setIndex((prev) => (dir === 'right' ? prev + 1 : prev - 1))
    resetAuto()
  }

  const resetAuto = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current)
    autoTimerRef.current = window.setInterval(() => {
      if (isJumpingRef.current || isAnimatingRef.current) return
      setIsInstant(false)
      isAnimatingRef.current = true
      setIndex((prev) => prev + 1)
    }, 30000)
  }, [])

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
      <Title>
        Отзывы <span>довольных клиентов</span>
      </Title>
      <Carousel>
        <ArrowLeft onClick={() => go('left')} aria-label="Назад">
          <ArrowSvg viewBox="0 0 32 32" width="64" height="64" aria-hidden>
            <path d="M20 8l-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </ArrowSvg>
        </ArrowLeft>
        <Frame>
          <Track
            $instant={isInstant}
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
              const isActive = realIdx === (index < 0 ? maxIndex : index > maxIndex ? 0 : index)
              return (
                <Slide key={`${r.id}-${i}`} data-active={isActive}>
                  <FrameImage src={reviewFrame} alt="Review frame" />
                  <SlideInner>
                    <ReviewText>{r.text}</ReviewText>
                    <Reviewer>
                      <Avatar>{getInitials(r.name)}</Avatar>
                      <ReviewerName>{r.name}</ReviewerName>
                    </Reviewer>
                  </SlideInner>
                </Slide>
              )
            })}
          </Track>
        </Frame>
        <ArrowRight onClick={() => go('right')} aria-label="Вперёд">
          <ArrowSvg viewBox="0 0 32 32" width="64" height="64" aria-hidden>
            <path d="M12 8l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </ArrowSvg>
        </ArrowRight>
      </Carousel>

      <TechList>
        <TechItem>
          <LogoImg src={figmaLogo} alt="figma" />
          <TechText>figma</TechText>
        </TechItem>
        <TechItem>
          <LogoCircle style={{ background: '#3178C6' }}>TS</LogoCircle>
          <TechText>typescript</TechText>
        </TechItem>
        <TechItem>
          <LogoImg src={reactLogo} alt="React" />
          <TechText>React</TechText>
        </TechItem>
        <TechItem>
          <LogoImg src={firebaseLogo} alt="firebase" />
          <TechText>firebase</TechText>
        </TechItem>
        <TechItem>
          <LogoCircle style={{ background: '#F7DF1E', color: '#000319' }}>JS</LogoCircle>
          <TechText>javascript</TechText>
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

const Carousel = styled.div`
  margin-top: 60px; 
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 115px;
`

const Frame = styled.div`
  width: 910px; 
  height: 300px; 
  overflow: hidden;
  position: relative;
  contain: layout paint;
  border-radius: 16px;
  clip-path: inset(0 round 16px);
`

const Track = styled.div<{ $instant?: boolean }>`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: 52px;
  width: max-content;
  will-change: transform;
  transition: ${({ $instant }) => ($instant ? 'none' : 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)')};
`


const Slide = styled.div`
  position: relative;
  width: 910px;
  height: 300px;
  flex: 0 0 auto;
  border-radius: 16px;
  overflow: hidden;
  filter: none;
`

const FrameImage = styled.img`
  position: absolute;
  inset: 0;
  width: 910px;
  height: 300px;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  border-radius: inherit;
  will-change: transform;
`

const SlideInner = styled.div`
  position: absolute;
  inset: 0;
  padding: 30px 36px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const ReviewText = styled.div`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 400; 
  font-size: 20px;
  line-height: 1.4;
  width: 810px; 
  height: 120px; 
  overflow: hidden;
  opacity: 1; /* всегда видно, без внезапных проявлений */
  transform: none;
  transition: none;
`

const Reviewer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  opacity: 1; /* всегда видно */
  transform: none;
  transition: none;
`


const Avatar = styled.div`
  width: 50px;
  height: 50px;
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

const ReviewerName = styled.div`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 600; 
  font-size: 18px;
  width: 145px; 
  height: 25px; 
  line-height: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ArrowBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: 0;
  background: transparent; /* без кружков */
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


const TechList = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
`

const TechItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const TechText = styled.div`
  color: #FFFFFF;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`

const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25));
`

const LogoCircle = styled.div`
  width: 30px;
  height: 30px;
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

