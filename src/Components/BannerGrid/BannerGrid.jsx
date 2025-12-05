import React from 'react'
import './BannerGrid.css'
import Banner_CTTDT_BQP1 from './Images/Banner_CTTDT_BQP1.jpg'
import Banner_CDVC_BQP1 from './Images/Banner_CDVC_BQP1.jpg'


const BannerGrid = () => {
  const banners = [
    { id: 1, image: Banner_CTTDT_BQP1, alt: 'Banner 1', link: 'https://www.qdnd.vn/' },
    { id: 2, image: Banner_CDVC_BQP1, alt: 'Banner 2', link: 'https://chinhphu.vn/' },
    { id: 3, image: Banner_CTTDT_BQP1, alt: 'Banner 1', link: 'https://www.qdnd.vn/' },
    { id: 4, image: Banner_CDVC_BQP1, alt: 'Banner 2', link: 'https://chinhphu.vn/' },
  ]

  const handleBannerClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="banner-grid-section">
      <div className="banner-grid-container">
        {banners.map((banner) => (
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
        ))}
      </div>
    </section>
  )
}

export default BannerGrid

