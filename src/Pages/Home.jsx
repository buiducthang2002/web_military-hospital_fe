import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'

import NewsBoard from '../Components/NewsBoard/NewsBoard'
import Doctors from '../Components/Doctors/Doctors'
import Services from '../Components/Services/Services'
import Features from '../Components/Features/Features'

import NewsEvents from '../Components/NewsEvents/NewsEvents'

import Video from '../Components/Video/Video'
import BannerGrid from '../Components/BannerGrid/BannerGrid'
import Footer from '../Components/Footer/Footer'
import usePageMeta from '../hooks/usePageMeta'
const Home = () => {
  usePageMeta()
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
      <Navbar />
      <div style={{ margin: 0, padding: 0, lineHeight: 0, fontSize: 0 }}>
        <Banner />
      </div>
 
      <NewsBoard />
      
      <Services />
      <Doctors />
      <Features />

      <NewsEvents />

      <Video />
      <BannerGrid />
      <Footer />
    </div>
  )
}

export default Home

