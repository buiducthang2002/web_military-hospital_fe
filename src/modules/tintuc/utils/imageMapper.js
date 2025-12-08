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
import anhbonoivu from '../../../Components/NewsEvents/Images/anhbonoivu.png'
import WHO from '../../../Components/NewsEvents/Images/WHO.jpg'
import thuocla1 from '../../../Components/NewsEvents/Images/thuocla1.jpg'
import thuocla2 from '../../../Components/NewsEvents/Images/thuocla2.jpg'
import thuocla3 from '../../../Components/NewsEvents/Images/thuocla3.jpg'
import yttg1 from '../../../Components/NewsEvents/Images/yttg1.jpg'
import ytvn2 from '../../../Components/NewsEvents/Images/ytvn2.jpg'
import ytvn3 from '../../../Components/NewsEvents/Images/ytvn3.jpg'
import yttg41 from '../../../Components/NewsEvents/Images/yttg41.jpg'
import yhvn31 from '../../../Components/NewsEvents/Images/yhvn31.jpg'
import yhvn41 from '../../../Components/NewsEvents/Images/yhvn41.png'
import ttbv1 from '../../../Components/NewsEvents/Images/ttbv1.jpg'
import ttbv2 from '../../../Components/NewsEvents/Images/ttbv2.png'
import ttbv3 from '../../../Components/NewsEvents/Images/ttbv3.jpg'
import ttbv4 from '../../../Components/NewsEvents/Images/ttbv4.jpg'
import bvcm1 from '../../../Components/NewsEvents/Images/bvcm1.jpeg'
import bvcm2 from '../../../Components/NewsEvents/Images/bvcm2.jpg'
import bvcm3 from '../../../Components/NewsEvents/Images/bvcm3.jpg'
import bvcm4 from '../../../Components/NewsEvents/Images/bvcm4.jpg'
import sktg1 from '../../../Components/FeaturedEvents/Images/sktg1.jpg'
import sktg11 from '../../../Components/FeaturedEvents/Images/sktg11.jpg'
import sktg2 from '../../../Components/FeaturedEvents/Images/sktg2.jpg'
import sktg3 from '../../../Components/FeaturedEvents/Images/sktg3.jpg'
import sktg4 from '../../../Components/FeaturedEvents/Images/sktg4.png'
import yhvn32 from '../../../Components/NewsEvents/Images/yhvn32.jpg'
import ttbv11 from '../../../Components/NewsEvents/Images/ttbv11.jpg'
import ttbv12 from '../../../Components/NewsEvents/Images/ttbv12.jpg'
import ttbv21 from '../../../Components/NewsEvents/Images/ttbv21.jpg'
import ttbv22 from '../../../Components/NewsEvents/Images/ttbv22.jpg'
import ttbv23 from '../../../Components/NewsEvents/Images/ttbv23.jpg'
import ttbv31 from '../../../Components/NewsEvents/Images/ttbv31.jpg'
import ttbv32 from '../../../Components/NewsEvents/Images/ttbv32.jpg'
import ttbv33 from '../../../Components/NewsEvents/Images/ttbv33.jpg'
import sktg21 from '../../../Components/FeaturedEvents/Images/sktg21.jpg'
import ttbv51 from '../../../Components/NewsEvents/Images/ttbv51.jpg'
import ttbv52 from '../../../Components/NewsEvents/Images/ttbv52.jpg'
import ttbv53 from '../../../Components/NewsEvents/Images/ttbv53.jpg'
import ttbv61 from '../../../Components/NewsEvents/Images/ttbv61.jpg'
import ttbv62 from '../../../Components/NewsEvents/Images/ttbv62.jpg'
import ttbv63 from '../../../Components/NewsEvents/Images/ttbv63.jpg'
import ttbv64 from '../../../Components/NewsEvents/Images/ttbv64.jpg'
import ttbv65 from '../../../Components/NewsEvents/Images/ttbv65.jpg'



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
  'anhbonoivu.png': anhbonoivu,
  'WHO.jpg': WHO,
  'thuocla1.jpg': thuocla1,
  'thuocla2.jpg': thuocla2,
  'thuocla3.jpg': thuocla3,
  'yttg1.jpg': yttg1,
  'ytvn2.jpg': ytvn2,
  'ytvn3.jpg': ytvn3,
  'yttg41.jpg': yttg41,
  'yhvn31.jpg': yhvn31,
  'yhvn41.png': yhvn41,
  'ttbv1.jpg': ttbv1,
  'ttbv2.png': ttbv2,
  'ttbv3.jpg': ttbv3,
  'ttbv31.jpg': ttbv31,
  'ttbv32.jpg': ttbv32,
  'ttbv33.jpg': ttbv33,
  'ttbv4.jpg': ttbv4,
  'bvcm1.jpeg': bvcm1,
  'bvcm2.jpg': bvcm2,
  'bvcm3.jpg': bvcm3,
  'bvcm4.jpg': bvcm4,
  'sktg1.jpg': sktg1,
  'sktg11.jpg': sktg11,
  'sktg2.jpg': sktg2,
  'sktg21.jpg': sktg21,
  'sktg3.jpg': sktg3,
  'sktg4.png': sktg4,
  'yhvn32.jpg': yhvn32,
  'ttbv11.jpg': ttbv11,
  'ttbv12.jpg': ttbv12,
  'ttbv21.jpg': ttbv21,
  'ttbv22.jpg': ttbv22,
  'ttbv23.jpg': ttbv23,
  'ttbv51.jpg': ttbv51,
  'ttbv52.jpg': ttbv52,
  'ttbv53.jpg': ttbv53,
  'ttbv61.jpg': ttbv61,
  'ttbv62.jpg': ttbv62,
  'ttbv63.jpg': ttbv63,
  'ttbv64.jpg': ttbv64,
  'ttbv65.jpg': ttbv65,
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
