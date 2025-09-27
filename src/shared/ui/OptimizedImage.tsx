import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
  width?: number
  height?: number
}

const ImageContainer = styled.div<{ $isLoading: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
`

const SkeletonPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #1a1a2e 25%, #2a2a3e 50%, #1a1a2e 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: inherit;

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`

const StyledImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$loaded ? 1 : 0};
  transition: opacity 300ms ease;
  border-radius: inherit;
`

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  loading = 'lazy',
  onLoad,
  onError,
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const handleLoad = () => {
      setIsLoaded(true)
      onLoad?.()
    }

    const handleError = () => {
      setHasError(true)
      onError?.()
    }

    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleError)

    return () => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
    }
  }, [onLoad, onError])

  return (
    <ImageContainer $isLoading={!isLoaded && !hasError} className={className}>
      {!isLoaded && !hasError && <SkeletonPlaceholder />}
      <StyledImage
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        $loaded={isLoaded}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </ImageContainer>
  )
}
