import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Organization from '../Sections/Organization/Organization'

const OrganizationPage = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', background: '#f3faf6' }}>
      <Navbar />
      <Organization />
      <Footer />
    </div>
  )
}

export default OrganizationPage


