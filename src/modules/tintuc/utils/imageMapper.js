/**
 * Utility để map image paths từ JSON sang actual imports
 * Khi có backend, có thể thay thế bằng URL từ API
 */

// Import tất cả images
import anh1 from '../../../Components/NewsEvents/Images/anh1.jpg'
import anh2 from '../../../Components/NewsEvents/Images/anh2.jpg'
import anh3 from '../../../Components/NewsEvents/Images/anh3.jpg'
import anh4 from '../../../Components/NewsEvents/Images/anh4.jpg'
import anh6 from '../../../Components/NewsEvents/Images/anh6.jpg'
import anh7 from '../../../Components/NewsEvents/Images/anh7.jpg'
import anh8 from '../../../Components/NewsEvents/Images/anh8.jpg'
import anh9 from '../../../Components/NewsEvents/Images/anh9.jpg'
import anh10 from '../../../Components/NewsEvents/Images/anh10.jpg'
import anh11 from '../../../Components/NewsEvents/Images/anh11.jpg'
import anh12 from '../../../Components/NewsEvents/Images/anh12.jpg'
import anh13 from '../../../Components/NewsEvents/Images/anh13.jpg'
import anhqh1 from '../../../Components/NewsEvents/Images/anhqh1.jpg'
import anhqh3 from '../../../Components/NewsEvents/Images/anhqh3.jpg'

const imageMap = {
  'anh1.jpg': anh1,
  'anh2.jpg': anh2,
  'anh3.jpg': anh3,
  'anh4.jpg': anh4,
  'anh6.jpg': anh6,
  'anh7.jpg': anh7,
  'anh8.jpg': anh8,
  'anh9.jpg': anh9,
  'anh10.jpg': anh10,
  'anh11.jpg': anh11,
  'anh12.jpg': anh12,
  'anh13.jpg': anh13,
  'anhqh1.jpg': anhqh1,
  'anhqh3.jpg': anhqh3,
}

/**
 * Map image path từ JSON sang actual image import
 * @param {string} imagePath - Path từ JSON (ví dụ: "anh1.jpg" hoặc full path)
 * @returns {string} - Actual image import hoặc original path nếu không tìm thấy
 */
export const mapImagePath = (imagePath) => {
  if (!imagePath) return null
  
  // Extract filename từ path
  const filename = imagePath.split('/').pop()
  
  // Nếu là URL từ backend (http/https), return nguyên
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // Map từ imageMap
  if (imageMap[filename]) {
    return imageMap[filename]
  }
  
  // Fallback: return original path
  return imagePath
}

/**
 * Map image paths cho một article object
 * @param {Object} article - Article object
 * @returns {Object} - Article object với image đã được map
 */
export const mapArticleImage = (article) => {
  if (!article) return article
  
  return {
    ...article,
    image: mapImagePath(article.image)
  }
}

/**
 * Map image paths cho một array of articles
 * @param {Array} articles - Array of article objects
 * @returns {Array} - Array với images đã được map
 */
export const mapArticlesImages = (articles) => {
  if (!articles || !Array.isArray(articles)) {
    return []
  }
  
  return articles.map(mapArticleImage)
}

