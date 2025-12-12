import React from 'react'
import './Services.css'
import ServicesIntro from './ServicesIntro'
import ServicesContainer from './ServicesContainer'
import ServicesInfo from './ServicesInfo'

const Services = () => {
  return (
    <div className="services-section">
      <ServicesIntro />
      <ServicesContainer />
      <ServicesInfo />
    </div>
  )
}

export default Services
