import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import NewsGrid from './NewsGrid'
import { mapArticlesImages } from '../utils/imageMapper'
import { getNewsByCategory } from '../utils/getNewsByCategory'
import allNewsData from '../data/allNews.json'
import './FeaturedEvents.css'

/**
 * Component hiển thị section Sự kiện nổi bật
 */
const FeaturedEvents = () => {
  const [activeEventTab, setActiveEventTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  // Các tab sự kiện
  const eventTabs = [
    { id: 'events-world', label: '🌍 Sự kiện nổi bật thế giới' },
    { id: 'events-domestic', label: '⭐ Sự kiện nổi bật trong nước' }
  ]

  // Lấy tất cả sự kiện theo tab
  const allEventsByTab = useMemo(() => {
    const news = mapArticlesImages(allNewsData)
    const allEvents = getNewsByCategory(news, 'events')

    if (activeEventTab === 0) {
      return allEvents.filter(event =>
        event.slug.includes('the-gioi')
      )
    } else {
      return allEvents.filter(event =>
        event.slug.includes('trong-nuoc')
      )
    }
  }, [activeEventTab])

  // Tính toán pagination
  const totalPages = Math.ceil(allEventsByTab.length / itemsPerPage) || 1
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const eventNews = allEventsByTab.slice(startIndex, endIndex)

  // Debug: log để kiểm tra
  console.log('FeaturedEvents Debug:', {
    allEventsByTab: allEventsByTab.length,
    totalPages,
    currentPage,
    eventNews: eventNews.length
  })

  // Reset về trang 1 khi đổi tab
  const handleTabChange = (index) => {
    setActiveEventTab(index)
    setCurrentPage(1)
  }

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="featured-events-section">
      <div className="news-events-container">
        <div className="news-header">
          <div className="news-header-left">
            <p className="news-label">Sự kiện nổi bật</p>
            
          </div>
          <div className="news-tabs">
            {eventTabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`news-tab ${activeEventTab === index ? 'active' : ''}`}
                onClick={() => handleTabChange(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <NewsGrid news={eventNews} columns={4} />

        <div className="news-pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedEvents

