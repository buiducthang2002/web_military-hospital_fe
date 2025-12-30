import React, { useState, useRef, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Banner.css'


import A1 from './Images/A1.jpg'
import A2 from './Images/A2.jpg'
import A3 from './Images/A3.jpg'
import A4 from './Images/A4.jpg'


const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0) 
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const bannerRef = useRef(null)
  const isTransitioning = useRef(false)
  const dragStartPosition = useRef({ x: 0, y: 0 })

  const banners = [A1, A2, A3, A4]

  const bannerLinks = [
  ]
 
  const infiniteBanners = [banners[banners.length - 1], ...banners, banners[0]]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - bannerRef.current.offsetLeft)
    setScrollLeft(bannerRef.current.scrollLeft)
    dragStartPosition.current = { x: e.pageX, y: e.pageY }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - bannerRef.current.offsetLeft
    const walk = (x - startX) * 2
    bannerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleDragEnd = (e) => {
    const wasDragging = isDragging
    setIsDragging(false)
    const banner = bannerRef.current
    if (!banner) return

    const scrollPosition = banner.scrollLeft
    const bannerWidth = banner.offsetWidth
    let newIndex = Math.round(scrollPosition / bannerWidth)

   
    if (wasDragging && e) {
      const dragDistance = Math.abs(e.pageX - dragStartPosition.current.x) + Math.abs(e.pageY - dragStartPosition.current.y)
   
      if (dragDistance < 5) {
        const realIndex = newIndex - 1
        if (realIndex >= 0 && realIndex < banners.length && bannerLinks[realIndex]) {
          window.open(bannerLinks[realIndex], '_blank', 'noopener,noreferrer')
          return
        }
      }
    }

 
    if (newIndex === 0) {
   
      newIndex = banners.length
      setTimeout(() => {
        if (bannerRef.current) {
          bannerRef.current.scrollTo({
            left: newIndex * bannerWidth,
            behavior: 'auto'
          })
        }
      }, 50)
    } else if (newIndex === infiniteBanners.length - 1) {
   
      newIndex = 1
      setTimeout(() => {
        if (bannerRef.current) {
          bannerRef.current.scrollTo({
            left: newIndex * bannerWidth,
            behavior: 'auto'
          })
        }
      }, 50)
    }

  
    const realIndex = newIndex - 1
    if (realIndex >= 0 && realIndex < banners.length) {
      setCurrentIndex(realIndex)
    }
  }

  const handleMouseUp = (e) => {
    handleDragEnd(e)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - bannerRef.current.offsetLeft)
    setScrollLeft(bannerRef.current.scrollLeft)
    dragStartPosition.current = { x: e.touches[0].pageX, y: e.touches[0].pageY }
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - bannerRef.current.offsetLeft
    const walk = (x - startX) * 2
    bannerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0]
    const syntheticEvent = {
      pageX: touch.pageX,
      pageY: touch.pageY
    }
    handleDragEnd(syntheticEvent)
  }

 
  useEffect(() => {
    const banner = bannerRef.current
    if (banner && !isTransitioning.current) {
      const targetIndex = currentIndex + 1
      banner.scrollTo({
        left: targetIndex * banner.offsetWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])


  useEffect(() => {
    const banner = bannerRef.current
    if (banner) {
    
      setTimeout(() => {
        if (bannerRef.current) {
      
          bannerRef.current.scrollLeft = bannerRef.current.offsetWidth
        }
      }, 100)
    }
  }, [])


  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    let scrollTimeout
    const handleScroll = () => {
      if (isTransitioning.current) return

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollPosition = banner.scrollLeft
        const bannerWidth = banner.offsetWidth
        let newIndex = Math.round(scrollPosition / bannerWidth)

   
        if (newIndex === 0) {
     
          isTransitioning.current = true
          newIndex = banners.length
          banner.scrollTo({
            left: newIndex * bannerWidth,
            behavior: 'auto'
          })
          setTimeout(() => {
            isTransitioning.current = false
          }, 50)
        } else if (newIndex === infiniteBanners.length - 1) {
       
          isTransitioning.current = true
          newIndex = 1
          banner.scrollTo({
            left: newIndex * bannerWidth,
            behavior: 'auto'
          })
          setTimeout(() => {
            isTransitioning.current = false
          }, 50)
        }

  
        const realIndex = newIndex - 1
        if (realIndex >= 0 && realIndex < banners.length) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex !== realIndex) {
              return realIndex
            }
            return prevIndex
          })
        }
      }, 100)
    }

    banner.addEventListener('scroll', handleScroll)
    return () => {
      banner.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [banners.length, infiniteBanners.length])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [banners.length])

  const handlePrev = (e) => {
    e.stopPropagation()
    const prevIndex = (currentIndex - 1 + banners.length) % banners.length
    setCurrentIndex(prevIndex)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    const nextIndex = (currentIndex + 1) % banners.length
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="banner-outer-wrapper">
      <section
        className="banner-container"
        ref={bannerRef}
        aria-label="Banner carousel"
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + banners.length) % banners.length
            setCurrentIndex(prevIndex)
          } else if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % banners.length
            setCurrentIndex(nextIndex)
          }
        }}
      >
        <div className="banner-wrapper">
          {infiniteBanners.map((banner, index) => (
            <div key={`${banner}-${index}`} className="banner-slide">
              <img src={banner} alt={`Banner ${(index - 1 + banners.length) % banners.length + 1}`} className="banner-image" />
            </div>
          ))}
        </div>
      </section>

      <div className="banner-dots">
        {banners.map((banner, index) => (
          <button
            key={banner}
            type="button"
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setCurrentIndex(index)
              }
            }}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="banner-arrow left"
        onClick={handlePrev}
        aria-label="Previous banner"
      >
        <FiChevronLeft />
      </button>

      <button
        className="banner-arrow right"
        onClick={handleNext}
        aria-label="Next banner"
      >
        <FiChevronRight />
      </button>
    </div>
  )
}

export default Banner

