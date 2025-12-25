import React from 'react'
import './Services.css'
import ServicesIntro from './ServicesIntro'
import ServicesContainer from './ServicesContainer'
import ServicesInfo from './ServicesInfo'

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-wrapper">
        <div className="services-wrapper-inner">
          <ServicesIntro />
          <ServicesContainer />
        </div>
      </div>
      <ServicesInfo />
    </div>
  )
}

export default Services
