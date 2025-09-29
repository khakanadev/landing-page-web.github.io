// Image optimization utilities
export const createImagePreloader = () => {
  const preloadedImages = new Set<string>()
  
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (preloadedImages.has(src)) {
        resolve()
        return
      }

      const img = new Image()
      img.onload = () => {
        preloadedImages.add(src)
        resolve()
      }
      img.onerror = reject
      img.src = src
    })
  }

  const preloadImages = async (srcs: string[]): Promise<void> => {
    await Promise.all(srcs.map(preloadImage))
  }

  return { preloadImage, preloadImages }
}

export const getOptimizedImageSrc = (src: string, _width?: number, _quality?: number) => {
  // In a real application, you would use a service like Cloudinary or ImageKit
  // For now, we'll return the original src
  return src
}

export const createLazyImageObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1
    }
  )

  return observer
}
