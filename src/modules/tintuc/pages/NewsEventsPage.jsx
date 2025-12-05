import React, { useState, useMemo } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import CategoryTabs from '../components/CategoryTabs'
import NewsGrid from '../components/NewsGrid'
import Pagination from '../components/Pagination'
import FeaturedEvents from '../components/FeaturedEvents'
import { getAllCategories, CATEGORIES } from '../categories'
import { getNewsByCategory } from '../utils/getNewsByCategory'
import { mapArticlesImages } from '../utils/imageMapper'
import allNewsData from '../data/allNews.json'
import './NewsEventsPage.css'

/**
 * Trang tổng tin tức & sự kiện
 */
const NewsEventsPage = () => {
  const categories = getAllCategories()
  const defaultCategoryId = categories[0]?.id || CATEGORIES.WORLD_MEDICAL.id
  
  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategoryId)
  const [currentPage, setCurrentPage] = useState(1)
  
  const itemsPerPage = 8

  // Map images và filter news theo category
  const filteredNews = useMemo(() => {
    const news = mapArticlesImages(allNewsData)
    return getNewsByCategory(news, activeCategoryId)
  }, [activeCategoryId])

  // Tính toán pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedNews = filteredNews.slice(startIndex, endIndex)

  // Reset về trang 1 khi đổi category
  const handleCategoryChange = (categoryId) => {
    setActiveCategoryId(categoryId)
    setCurrentPage(1)
  }

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to top khi đổi trang
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div className="news-events-page">
        <div className="news-events-container">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Tin tức & Sự kiện</p>           
            </div>
            <CategoryTabs
              activeCategoryId={activeCategoryId}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          <NewsGrid news={paginatedNews} columns={4} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Section Sự kiện nổi bật */}
        <FeaturedEvents />
      </div>
      <Footer />
    </div>
  )
}

export default NewsEventsPage
