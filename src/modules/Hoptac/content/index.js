/**
 * Index file để export tất cả các file nội dung bài viết
 * Khi tạo file nội dung mới, cần import và export ở đây
 */

import contentParty1 from './hoi-nghi-tong-ket-cong-tac-dang-2024.js'
import contentParty2 from './ngay-truyen-thong-benh-vien-quan-y-4.js'
import contentParty3 from './ngay-thanh-lap-benh-vien-quan-y-4.js'
import contentAlbumin from './che-pham-albumin-tong-quan-lam-sang.js'

// Mapping slug -> content
const articleContents = {

  'hoi-nghi-tong-ket-cong-tac-dang-2024': contentParty1,
  'ngay-truyen-thong-benh-vien-quan-y-4': contentParty2,
  'ngay-thanh-lap-benh-vien-quan-y-4': contentParty3,
  'che-pham-albumin-tong-quan-lam-sang': contentAlbumin,
  // Thêm các bài viết khác ở đây khi tạo file mới
}

/**
 * Lấy nội dung bài viết theo slug
 * @param {string} slug - Slug của bài viết
 * @param {string} defaultContent - Nội dung mặc định từ JSON (fallback)
 * @returns {string} - Nội dung bài viết
 */
export const getArticleContent = (slug, defaultContent = '') => {
  return articleContents[slug] || defaultContent
}

/**
 * Kiểm tra xem có file nội dung riêng cho slug không
 * @param {string} slug - Slug của bài viết
 * @returns {boolean}
 */
export const hasArticleContent = (slug) => {
  return slug in articleContents
}

export default articleContents

