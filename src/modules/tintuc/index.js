/**
 * Module Tin tức - Main export file
 * Import tất cả các components, utils, và config từ đây
 */

// Categories
export * from './categories'

// Components
export { default as ArticleCard } from './components/ArticleCard'
export { default as CategoryTabs } from './components/CategoryTabs'
export { default as NewsGrid } from './components/NewsGrid'
export { default as Pagination } from './components/Pagination'

// Pages
export { default as NewsEventsPage } from './pages/NewsEventsPage'
export { default as ArticleDetailPage } from './pages/ArticleDetailPage'

// Utils
export * from './utils/formatDate'
export * from './utils/getNewsByCategory'
export * from './utils/filterNews'
export * from './utils/imageMapper'

// Router
export { default as NewsRoutes, NEWS_ROUTES } from './router'

