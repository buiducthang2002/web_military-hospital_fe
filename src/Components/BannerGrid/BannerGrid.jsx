import React from 'react'
import './BannerGrid.css'
import banner1 from '../Banner/Images/logo11.jpg'
import banner2 from '../Banner/Images/logobanner1.jpg'
import banner3 from '../Banner/Images/logobanner2.jpg'
import banner4 from '../Banner/Images/logobanner3.jpg'

const BannerGrid = () => {
  const banners = [
    { id: 1, image: banner1, alt: 'Banner 1' },
    { id: 2, image: banner2, alt: 'Banner 2' },
    { id: 3, image: banner3, alt: 'Banner 3' },
    { id: 4, image: banner4, alt: 'Banner 4' },
  ]

  return (
    <section className="banner-grid-section">
      <div className="banner-grid-container">
        {banners.map((banner) => (
          <div key={banner.id} className="banner-grid-item">
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

