

import content1 from './tin-tuc-y-hoc-the-gioi-1.js'
import content2 from './tin-tuc-y-hoc-the-gioi-2.js'
import content3 from './tin-tuc-y-hoc-the-gioi-3.js'
import content4 from './tin-tuc-y-hoc-the-gioi-4.js'
import content5 from './tin-tuc-y-hoc-trong-nuoc-1.js'
import content6 from './tin-tuc-y-hoc-trong-nuoc-2.js'
import content7 from './tin-tuc-y-hoc-trong-nuoc-3.js'
import content8 from './tin-tuc-y-hoc-trong-nuoc-4.js'
import content9 from './tin-tuc-hoat-dong-benh-vien-1.js'
import content10 from './tin-tuc-hoat-dong-benh-vien-2.js'
import content11 from './tin-tuc-hoat-dong-benh-vien-3.js'
import content12 from './tin-tuc-hoat-dong-benh-vien-4.js'
import content17 from './tin-tuc-hoat-dong-benh-vien-5.js'
import content18 from './tin-tuc-hoat-dong-benh-vien-6.js'
import content19 from './tin-tuc-hoat-dong-benh-vien-7.js'
import content20 from './tin-tuc-hoat-dong-benh-vien-8.js'
import content21 from './tin-tuc-hoat-dong-benh-vien-9.js'
import content13 from './su-kien-noi-bat-the-gioi-1.js'
import content14 from './su-kien-noi-bat-the-gioi-2.js'
import content15 from './su-kien-noi-bat-the-gioi-3.js'
import content16 from './su-kien-noi-bat-the-gioi-4.js'


const articleContents = {
  'tin-tuc-y-hoc-the-gioi-1': content1,
  'tin-tuc-y-hoc-the-gioi-2': content2,
  'tin-tuc-y-hoc-the-gioi-3': content3,
  'tin-tuc-y-hoc-the-gioi-4': content4,
  'tin-tuc-y-hoc-trong-nuoc-1': content5,
  'tin-tuc-y-hoc-trong-nuoc-2': content6,
  'tin-tuc-y-hoc-trong-nuoc-3': content7,
  'tin-tuc-y-hoc-trong-nuoc-4': content8,
  'tin-tuc-hoat-dong-benh-vien-1': content9,
  'tin-tuc-hoat-dong-benh-vien-2': content10,
  'tin-tuc-hoat-dong-benh-vien-3': content11,
  'tin-tuc-hoat-dong-benh-vien-4': content12,
  'tin-tuc-hoat-dong-benh-vien-5': content17,
  'tin-tuc-hoat-dong-benh-vien-6': content18,
  'tin-tuc-hoat-dong-benh-vien-7': content19,
  'tin-tuc-hoat-dong-benh-vien-8': content20,
  'tin-tuc-hoat-dong-benh-vien-9': content21,
  'su-kien-noi-bat-the-gioi-1': content13,
  'su-kien-noi-bat-the-gioi-2': content14,
  'su-kien-noi-bat-the-gioi-3': content15,
  'su-kien-noi-bat-the-gioi-4': content16,


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

