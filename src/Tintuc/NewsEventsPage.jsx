import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import FeaturedEvents from '../Components/FeaturedEvents/FeaturedEvents'
import NewsEvents from '../Components/NewsEvents/NewsEvents'
import Video from '../Components/Video/Video'

const NewsEventsPage = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <FeaturedEvents />
      <NewsEvents />
      <Video/>
      <Footer />
    </div>
  )
}

export default NewsEventsPage

