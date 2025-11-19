/**
 * Get news by category utilities
 */

/**
 * Lấy tất cả tin tức theo categoryId
 * @param {Array} allNews - Mảng chứa tất cả tin tức
 * @param {string} categoryId - ID của category
 * @returns {Array} - Mảng tin tức thuộc category đó
 */
export const getNewsByCategory = (allNews, categoryId) => {
  if (!allNews || !Array.isArray(allNews)) {
    return []
  }
  
  if (!categoryId) {
    return allNews
  }
  
  return allNews.filter(news => news.categoryId === categoryId)
}

/**
 * Lấy tin tức theo nhiều categories
 * @param {Array} allNews - Mảng chứa tất cả tin tức
 * @param {Array} categoryIds - Mảng các category IDs
 * @returns {Array} - Mảng tin tức thuộc các categories đó
 */
export const getNewsByCategories = (allNews, categoryIds) => {
  if (!allNews || !Array.isArray(allNews)) {
    return []
  }
  
  if (!categoryIds || !Array.isArray(categoryIds) || categoryIds.length === 0) {
    return allNews
  }
  
  return allNews.filter(news => categoryIds.includes(news.categoryId))
}

/**
 * Lấy tin tức mới nhất
 * @param {Array} allNews - Mảng chứa tất cả tin tức
 * @param {number} limit - Số lượng tin tức cần lấy (mặc định: 10)
 * @returns {Array} - Mảng tin tức mới nhất
 */
export const getLatestNews = (allNews, limit = 10) => {
  if (!allNews || !Array.isArray(allNews)) {
    return []
  }
  
  // Sắp xếp theo date giảm dần (mới nhất trước)
  const sortedNews = [...allNews].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB - dateA
  })
  
  return sortedNews.slice(0, limit)
}

/**
 * Lấy tin tức mới nhất theo category
 * @param {Array} allNews - Mảng chứa tất cả tin tức
 * @param {string} categoryId - ID của category
 * @param {number} limit - Số lượng tin tức cần lấy (mặc định: 10)
 * @returns {Array} - Mảng tin tức mới nhất của category
 */
export const getLatestNewsByCategory = (allNews, categoryId, limit = 10) => {
  const categoryNews = getNewsByCategory(allNews, categoryId)
  return getLatestNews(categoryNews, limit)
}

/**
 * Lấy tin tức phổ biến nhất (theo views)
 * @param {Array} allNews - Mảng chứa tất cả tin tức
 * @param {number} limit - Số lượng tin tức cần lấy (mặc định: 10)
 * @returns {Array} - Mảng tin tức phổ biến nhất
 */
export const getPopularNews = (allNews, limit = 10) => {
  if (!allNews || !Array.isArray(allNews)) {
    return []
  }
  
  // Sắp xếp theo views giảm dần
  const sortedNews = [...allNews].sort((a, b) => {
    return (b.views || 0) - (a.views || 0)
  })
  
  return sortedNews.slice(0, limit)
}

/**
 * Lấy tin tức phổ biến nhất theo category
 * @param {Array} allNews - Mảng chứa tất cả tin tức
 * @param {string} categoryId - ID của category
 * @param {number} limit - Số lượng tin tức cần lấy (mặc định: 10)
 * @returns {Array} - Mảng tin tức phổ biến nhất của category
 */
export const getPopularNewsByCategory = (allNews, categoryId, limit = 10) => {
  const categoryNews = getNewsByCategory(allNews, categoryId)
  return getPopularNews(categoryNews, limit)
}

