import React, { useState, useRef, useEffect } from 'react'
import './Banner.css'
import bannerImage1 from './Images/logo11.jpg'
import bannerImage2 from './Images/logobanner1.jpg'
import bannerImage3 from './Images/logobanner2.jpg'
import bannerImage4 from './Images/logobanner3.jpg'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0) // Index của banner thật (0-3)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const bannerRef = useRef(null)
  const isTransitioning = useRef(false)

  const banners = [bannerImage1, bannerImage2, bannerImage3, bannerImage4]
  // Tạo mảng với clone: [banner cuối, ...banners, banner đầu]
  const infiniteBanners = [banners[banners.length - 1], ...banners, banners[0]]

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
    let newIndex = Math.round(scrollPosition / bannerWidth)
    
    // Xử lý vòng lặp
    if (newIndex === 0) {
      // Đang ở clone đầu tiên (banner cuối), nhảy về banner cuối thật
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
      // Đang ở clone cuối (banner đầu), nhảy về banner đầu thật
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
    
    // Cập nhật currentIndex (trừ đi 1 vì có clone ở đầu)
    const realIndex = newIndex - 1
    if (realIndex >= 0 && realIndex < banners.length) {
      setCurrentIndex(realIndex)
    }
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

  // Khởi tạo scroll về vị trí banner đầu tiên (index 1)
  useEffect(() => {
    const banner = bannerRef.current
    if (banner && !isTransitioning.current) {
      const targetIndex = currentIndex + 1 // +1 vì có clone ở đầu
      banner.scrollTo({
        left: targetIndex * banner.offsetWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  // Khởi tạo vị trí ban đầu
  useEffect(() => {
    const banner = bannerRef.current
    if (banner) {
      // Đợi một chút để đảm bảo DOM đã render xong
      setTimeout(() => {
        if (bannerRef.current) {
          // Scroll đến banner đầu tiên thật (index 1)
          bannerRef.current.scrollLeft = bannerRef.current.offsetWidth
        }
      }, 100)
    }
  }, [])

  // Cập nhật currentIndex khi scroll và xử lý vòng lặp
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
        
        // Xử lý vòng lặp
        if (newIndex === 0) {
          // Đang ở clone đầu, nhảy về banner cuối thật
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
          // Đang ở clone cuối, nhảy về banner đầu thật
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
        
        // Cập nhật currentIndex (trừ đi 1 vì có clone ở đầu)
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

  // Auto-play banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 5000) // Chuyển banner mỗi 5 giây

    return () => clearInterval(interval)
  }, [banners.length])

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

