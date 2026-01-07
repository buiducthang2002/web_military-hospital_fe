/**
 * Global search utilities - Tìm kiếm toàn bộ website
 */

/**
 * Tìm kiếm toàn cục trong tất cả nội dung
 * @param {Array} data - Mảng dữ liệu cần tìm
 * @param {string} keyword - Từ khóa tìm kiếm
 * @returns {Array} - Mảng kết quả đã filter
 */
export const globalSearch = (data, keyword) => {
  if (!data || !Array.isArray(data)) {
    return []
  }

  if (!keyword || keyword.trim() === '') {
    return []
  }

  const lowerKeyword = keyword.toLowerCase().trim()

  return data.filter(item => {
    // Tìm trong title
    const titleMatch = item.title?.toLowerCase().includes(lowerKeyword)

    // Tìm trong excerpt
    const excerptMatch = item.excerpt?.toLowerCase().includes(lowerKeyword)

    // Tìm trong content (loại bỏ HTML tags trước)
    const contentStr = typeof item.content === 'string' ? item.content : ''
    const contentWithoutHtml = contentStr.replace(/<[^>]*>/g, ' ').toLowerCase()
    const contentMatch = contentWithoutHtml.includes(lowerKeyword)

    // Tìm trong tags
    const tagsMatch = item.tags?.some(tag =>
      tag.toLowerCase().includes(lowerKeyword)
    )

    return titleMatch || excerptMatch || contentMatch || tagsMatch
  })
}

/**
 * Sắp xếp kết quả tìm kiếm theo độ liên quan
 * @param {Array} results - Mảng kết quả tìm kiếm
 * @param {string} keyword - Từ khóa tìm kiếm
 * @returns {Array} - Mảng đã sắp xếp
 */
export const sortByRelevance = (results, keyword) => {
  const lowerKeyword = keyword.toLowerCase().trim()

  return results.sort((a, b) => {
    let scoreA = 0
    let scoreB = 0

    // Title match có điểm cao nhất
    if (a.title?.toLowerCase().includes(lowerKeyword)) scoreA += 10
    if (b.title?.toLowerCase().includes(lowerKeyword)) scoreB += 10

    // Exact title match
    if (a.title?.toLowerCase() === lowerKeyword) scoreA += 20
    if (b.title?.toLowerCase() === lowerKeyword) scoreB += 20

    // Excerpt match
    if (a.excerpt?.toLowerCase().includes(lowerKeyword)) scoreA += 5
    if (b.excerpt?.toLowerCase().includes(lowerKeyword)) scoreB += 5

    // Tags match
    if (a.tags?.some(tag => tag.toLowerCase().includes(lowerKeyword))) scoreA += 3
    if (b.tags?.some(tag => tag.toLowerCase().includes(lowerKeyword))) scoreB += 3

    // Tổ chức bệnh viện có ưu tiên cao hơn nếu điểm bằng nhau
    if (scoreA === scoreB) {
      if (a.type === 'organization') scoreA += 1
      if (b.type === 'organization') scoreB += 1
    }

    return scoreB - scoreA
  })
}

/**
 * Tìm kiếm và sắp xếp kết quả
 * @param {Array} data - Mảng dữ liệu
 * @param {string} keyword - Từ khóa
 * @param {number} limit - Số lượng kết quả tối đa
 * @returns {Array} - Mảng kết quả
 */
export const searchAndSort = (data, keyword, limit = 10) => {
  const results = globalSearch(data, keyword)
  const sorted = sortByRelevance(results, keyword)
  return limit > 0 ? sorted.slice(0, limit) : sorted
}

export default globalSearch
