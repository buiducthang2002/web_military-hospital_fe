import React, { useState, useEffect } from 'react'
import './BannerGrid.css'
import BQP from './Images/BQP.png'
import BQPBDHV from './Images/BQPBDHV.png'
import BQPCTTDT from './Images/BQPCTTDT.jpg'
import BQPQK4 from './Images/BQPQK4.png'


const BannerGrid = () => {
  const banners = [
    { id: 1, image: BQP, alt: 'Banner 1', link: 'https://www.qdnd.vn/' },
    { id: 2, image:BQPBDHV , alt: 'Banner 2', link: 'https://qlms.bqp.vn/trang-chu' },
    { id: 3, image: BQPCTTDT, alt: 'Banner 3', link: 'https://www.qdnd.vn/' },
    { id: 4, image: BQPQK4, alt: 'Banner 4', link: 'https://baoquankhu4.com.vn/' },

  ]

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

  // Theo dõi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-slide cho mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000) // 3 giây

      return () => clearInterval(interval)
    }
  }, [isMobile, banners.length])

  const handleBannerClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="banner-grid-section">
      <div className="banner-grid-container">
        {isMobile ? (
          // Mobile: hiển thị 1 banner tại một thời điểm
          <div
            className="banner-grid-item banner-mobile-slider"
            onClick={() => handleBannerClick(banners[currentBannerIndex].link)}
            style={{ cursor: banners[currentBannerIndex].link ? 'pointer' : 'default' }}
            role={banners[currentBannerIndex].link ? 'button' : undefined}
            tabIndex={banners[currentBannerIndex].link ? 0 : undefined}
            onKeyDown={(e) => {
              if (banners[currentBannerIndex].link && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                handleBannerClick(banners[currentBannerIndex].link)
              }
            }}
            aria-label={banners[currentBannerIndex].link ? `Click to visit ${banners[currentBannerIndex].alt}` : undefined}
          >
            <img
              src={banners[currentBannerIndex].image}
              alt={banners[currentBannerIndex].alt}
              className="banner-grid-image"
            />
            <div className="banner-dots">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`banner-dot ${index === currentBannerIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentBannerIndex(index)
                  }}
                  aria-label={`Go to banner ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop: hiển thị tất cả banners
          banners.map((banner) => (
            <div
              key={banner.id}
              className="banner-grid-item"
              onClick={() => handleBannerClick(banner.link)}
              style={{ cursor: banner.link ? 'pointer' : 'default' }}
              role={banner.link ? 'button' : undefined}
              tabIndex={banner.link ? 0 : undefined}
              onKeyDown={(e) => {
                if (banner.link && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault()
                  handleBannerClick(banner.link)
                }
              }}
              aria-label={banner.link ? `Click to visit ${banner.alt}` : undefined}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="banner-grid-image"
              />
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default BannerGrid

