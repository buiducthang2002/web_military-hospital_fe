import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Services from '../Components/Services/Services'
import Doctors from '../Components/Doctors/Doctors'
import Features from '../Components/Features/Features'
import NewsEvents from '../Components/NewsEvents/NewsEvents'
import FeaturedEvents from '../Components/FeaturedEvents/FeaturedEvents'
import Video from '../Components/Video/Video'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Banner />
      <Services />
      <Doctors />
      <Features />
      <NewsEvents />
      <FeaturedEvents />
      <Video />
      <Footer />
    </div>
  )
}

export default Home

