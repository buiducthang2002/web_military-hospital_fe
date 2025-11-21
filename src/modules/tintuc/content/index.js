/**
 * Index file để export tất cả các file nội dung bài viết
 * Khi tạo file nội dung mới, cần import và export ở đây
 */

import content1 from './tin-tuc-y-hoc-the-gioi-1.js'
import content2 from './tin-tuc-y-hoc-the-gioi-2.js'
import content3 from './tin-tuc-y-hoc-trong-nuoc-1.js'
import content4 from './su-kien-noi-bat-the-gioi-1.js'

// Mapping slug -> content
const articleContents = {
  'tin-tuc-y-hoc-the-gioi-1': content1,
  'tin-tuc-y-hoc-the-gioi-2': content2,
  'tin-tuc-y-hoc-trong-nuoc-1': content3,
  'su-kien-noi-bat-the-gioi-1': content4,
  // Thêm các bài viết khác ở đây khi tạo file mới
  // 'tin-tuc-y-hoc-the-gioi-2': content2,
  // 'tin-tuc-y-hoc-trong-nuoc-1': content3,
  // ...
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

