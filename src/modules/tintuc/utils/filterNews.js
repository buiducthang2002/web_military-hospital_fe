/**
 * Filter news utilities
 */

/**
 * Filter tin tức theo từ khóa (tìm trong title, excerpt, content, tags)
 * @param {Array} news - Mảng tin tức
 * @param {string} keyword - Từ khóa tìm kiếm
 * @returns {Array} - Mảng tin tức đã filter
 */
export const filterNewsByKeyword = (news, keyword) => {
  if (!news || !Array.isArray(news)) {
    return []
  }

  if (!keyword || keyword.trim() === '') {
    return news
  }

  const lowerKeyword = keyword.toLowerCase().trim()

  return news.filter(item => {
    const titleMatch = item.title?.toLowerCase().includes(lowerKeyword)
    const excerptMatch = item.excerpt?.toLowerCase().includes(lowerKeyword)

    // Chuyển content thành string và loại bỏ HTML tags trước khi tìm kiếm
    const contentStr = typeof item.content === 'string' ? item.content : ''
    const contentWithoutHtml = contentStr.replace(/<[^>]*>/g, ' ').toLowerCase()
    const contentMatch = contentWithoutHtml.includes(lowerKeyword)

    const tagsMatch = item.tags?.some(tag =>
      tag.toLowerCase().includes(lowerKeyword)
    )

    return titleMatch || excerptMatch || contentMatch || tagsMatch
  })
}

/**
 * Filter tin tức theo date range
 * @param {Array} news - Mảng tin tức
 * @param {Date|string} startDate - Ngày bắt đầu
 * @param {Date|string} endDate - Ngày kết thúc
 * @returns {Array} - Mảng tin tức đã filter
 */
export const filterNewsByDateRange = (news, startDate, endDate) => {
  if (!news || !Array.isArray(news)) {
    return []
  }
  
  const start = startDate ? new Date(startDate) : null
  const end = endDate ? new Date(endDate) : null
  
  if (!start && !end) {
    return news
  }
  
  return news.filter(item => {
    const itemDate = new Date(item.date)
    
    if (start && end) {
      return itemDate >= start && itemDate <= end
    } else if (start) {
      return itemDate >= start
    } else if (end) {
      return itemDate <= end
    }
    
    return true
  })
}

/**
 * Filter tin tức theo author
 * @param {Array} news - Mảng tin tức
 * @param {string} author - Tên tác giả
 * @returns {Array} - Mảng tin tức đã filter
 */
export const filterNewsByAuthor = (news, author) => {
  if (!news || !Array.isArray(news)) {
    return []
  }
  
  if (!author || author.trim() === '') {
    return news
  }
  
  const lowerAuthor = author.toLowerCase().trim()
  
  return news.filter(item => 
    item.author?.toLowerCase().includes(lowerAuthor)
  )
}

/**
 * Filter tin tức theo tags
 * @param {Array} news - Mảng tin tức
 * @param {Array|string} tags - Mảng tags hoặc một tag
 * @returns {Array} - Mảng tin tức đã filter
 */
export const filterNewsByTags = (news, tags) => {
  if (!news || !Array.isArray(news)) {
    return []
  }
  
  if (!tags || (Array.isArray(tags) && tags.length === 0)) {
    return news
  }
  
  const tagArray = Array.isArray(tags) ? tags : [tags]
  const lowerTags = tagArray.map(tag => tag.toLowerCase().trim())
  
  return news.filter(item => {
    if (!item.tags || !Array.isArray(item.tags)) {
      return false
    }
    
    return item.tags.some(tag => 
      lowerTags.includes(tag.toLowerCase().trim())
    )
  })
}

/**
 * Filter tin tức với nhiều điều kiện
 * @param {Array} news - Mảng tin tức
 * @param {Object} filters - Object chứa các filter conditions
 * @param {string} filters.keyword - Từ khóa tìm kiếm
 * @param {string} filters.categoryId - Category ID
 * @param {Date|string} filters.startDate - Ngày bắt đầu
 * @param {Date|string} filters.endDate - Ngày kết thúc
 * @param {string} filters.author - Tác giả
 * @param {Array|string} filters.tags - Tags
 * @returns {Array} - Mảng tin tức đã filter
 */
export const filterNews = (news, filters = {}) => {
  if (!news || !Array.isArray(news)) {
    return []
  }
  
  let filteredNews = [...news]
  
  // Filter theo category
  if (filters.categoryId) {
    filteredNews = filteredNews.filter(item => 
      item.categoryId === filters.categoryId
    )
  }
  
  // Filter theo keyword
  if (filters.keyword) {
    filteredNews = filterNewsByKeyword(filteredNews, filters.keyword)
  }
  
  // Filter theo date range
  if (filters.startDate || filters.endDate) {
    filteredNews = filterNewsByDateRange(
      filteredNews, 
      filters.startDate, 
      filters.endDate
    )
  }
  
  // Filter theo author
  if (filters.author) {
    filteredNews = filterNewsByAuthor(filteredNews, filters.author)
  }
  
  // Filter theo tags
  if (filters.tags) {
    filteredNews = filterNewsByTags(filteredNews, filters.tags)
  }
  
  return filteredNews
}

/**
 * Sort tin tức
 * @param {Array} news - Mảng tin tức
 * @param {string} sortBy - Tiêu chí sắp xếp: 'date', 'views', 'title'
 * @param {string} order - Thứ tự: 'asc' hoặc 'desc' (mặc định: 'desc')
 * @returns {Array} - Mảng tin tức đã sắp xếp
 */
export const sortNews = (news, sortBy = 'date', order = 'desc') => {
  if (!news || !Array.isArray(news)) {
    return []
  }
  
  const sortedNews = [...news]
  
  sortedNews.sort((a, b) => {
    let aValue, bValue
    
    switch (sortBy) {
      case 'date':
        aValue = new Date(a.date)
        bValue = new Date(b.date)
        break
      case 'views':
        aValue = a.views || 0
        bValue = b.views || 0
        break
      case 'title':
        aValue = (a.title || '').toLowerCase()
        bValue = (b.title || '').toLowerCase()
        break
      default:
        aValue = new Date(a.date)
        bValue = new Date(b.date)
    }
    
    if (order === 'asc') {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0
    }
  })
  
  return sortedNews
}

