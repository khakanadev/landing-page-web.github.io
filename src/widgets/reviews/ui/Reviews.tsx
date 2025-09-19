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
  border-radius: 20px;
  clip-path: inset(0 round 20px);
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
  border-radius: 20px;
  overflow: hidden;
  /* background moved to ::after to keep only a thin outer ring visible */
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(45deg, #CBACF9, #6C5CE7, #FFFFFF, #CBACF9);
    background-size: 300% 300%;
    animation: shimmerBorder 2.6s ease-in-out infinite;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 1px; /* ultra-thin border */
    border-radius: 19px; /* 20px - 1px to preserve curvature */
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


const SlideInner = styled.div`
  position: absolute;
  inset: 0;
  padding: 30px 36px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 2;
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
  width: 260px; 
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

