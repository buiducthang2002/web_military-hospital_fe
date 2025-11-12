import React, { useState, useRef, useEffect } from 'react'
import './Banner.css'
import bannerImage1 from './Images/logo11.jpg'
import bannerImage2 from './Images/logo1112.jpg'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const bannerRef = useRef(null)

  const banners = [bannerImage1, bannerImage2]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - bannerRef.current.offsetLeft)
    setScrollLeft(bannerRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - bannerRef.current.offsetLeft
    const walk = (x - startX) * 2
    bannerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    const banner = bannerRef.current
    if (!banner) return
    
    const scrollPosition = banner.scrollLeft
    const bannerWidth = banner.offsetWidth
    const newIndex = Math.round(scrollPosition / bannerWidth)
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < banners.length) {
      setCurrentIndex(newIndex)
    }
    
    // Smooth scroll to the correct position
    banner.scrollTo({
      left: newIndex * bannerWidth,
      behavior: 'smooth'
    })
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - bannerRef.current.offsetLeft)
    setScrollLeft(bannerRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - bannerRef.current.offsetLeft
    const walk = (x - startX) * 2
    bannerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  useEffect(() => {
    const banner = bannerRef.current
    if (banner) {
      banner.scrollTo({
        left: currentIndex * banner.offsetWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  return (
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
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        } else if (e.key === 'ArrowRight' && currentIndex < banners.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      }}
    >
      <div className="banner-wrapper">
        {banners.map((banner, index) => (
          <div key={banner} className="banner-slide">
            <img src={banner} alt={`Banner ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </div>
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
    </section>
  )
}

export default Banner

