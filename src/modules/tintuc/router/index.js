/**
 * Router configuration cho module Tin tức
 * Có thể tách riêng routing nếu cần quản lý phức tạp hơn
 */

import { Routes, Route } from 'react-router-dom'
import NewsEventsPage from '../pages/NewsEventsPage'
import ArticleDetailPage from '../pages/ArticleDetailPage'

/**
 * News module routes
 * Sử dụng trong App.js hoặc parent router
 */
export const NewsRoutes = () => {
  return (
    <Routes>
      <Route path="/news-events" element={<NewsEventsPage />} />
      <Route path="/news-events/:slug" element={<ArticleDetailPage />} />
    </Routes>
  )
}

/**
 * Route paths constants
 */
export const NEWS_ROUTES = {
  LIST: '/news-events',
  DETAIL: (slug) => `/news-events/${slug}`,
}

export default NewsRoutes

