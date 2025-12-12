import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import ClinicHours from '../Components/ClinicHours/ClinicHours'
import NewsBoard from '../Components/NewsBoard/NewsBoard'
import Doctors from '../Components/Doctors/Doctors'
import Services from '../Components/Services/Services'
import NewsEvents from '../Components/NewsEvents/NewsEvents'
import FeaturedEvents from '../Components/FeaturedEvents/FeaturedEvents'
import Video from '../Components/Video/Video'
import BannerGrid from '../Components/BannerGrid/BannerGrid'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
      <Navbar />
      <div style={{ margin: 0, padding: 0, lineHeight: 0, fontSize: 0 }}>
        <Banner />
      </div>
      <ClinicHours />
      <NewsBoard />
      
      <Services />
      <Doctors />
      <NewsEvents />
      <FeaturedEvents />
      <Video />
      <BannerGrid />
      <Footer />
    </div>
  )
}

export default Home

