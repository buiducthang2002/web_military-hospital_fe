import React from 'react'
import './Services.css'
import ServicesContainer from './ServicesContainer'

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-wrapper">
        <div className="services-wrapper-inner">
          <div className="services-heading">
            <span className="services-heading-bar" aria-hidden="true" />
            <h2>DỊCH VỤ KHÁM CHỮA BỆNH TOÀN DIỆN</h2>
          </div>
          <ServicesContainer />
        </div>
      </div>
    </div>
  )
}

export default Services
