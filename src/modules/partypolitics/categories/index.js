/**
 * Cấu hình categories cho module Công tác Đảng - Chính trị
 */

export const PARTY_CATEGORIES = {
  PARTY_WORK: {
    id: 'party-work',
    displayName: 'Công tác Đảng',
    apiEndpoint: '/api/party/party-work',
    slug: 'cong-tac-dang',
    icon: '🏛️',
  },
  POLITICS: {
    id: 'politics',
    displayName: 'Hoạt động kỷ niệm, tổ chức',
    apiEndpoint: '/api/party/politics',
    slug: 'cong-tac-chinh-tri',
    icon: '📜',
  },
  YOUTH_UNION: {
    id: 'youth-union',
    displayName: 'Lịch sử đổi mới',
    apiEndpoint: '/api/party/youth-union',
    slug: 'lich-su-doi-moi',
    icon: '🕰️',
  },
}

/**
 * Lấy category theo ID
 */
export const getPartyCategoryById = (id) => {
  return Object.values(PARTY_CATEGORIES).find(cat => cat.id === id)
}

/**
 * Lấy category theo slug
 */
export const getPartyCategoryBySlug = (slug) => {
  return Object.values(PARTY_CATEGORIES).find(cat => cat.slug === slug)
}

/**
 * Lấy tất cả categories dưới dạng array
 */
export const getAllPartyCategories = () => {
  return Object.values(PARTY_CATEGORIES)
}

/**
 * Lấy category ID từ slug
 */
export const getPartyCategoryIdFromSlug = (slug) => {
  const category = getPartyCategoryBySlug(slug)
  return category ? category.id : null
}

/**
 * Lấy slug từ category ID
 */
export const getPartySlugFromCategoryId = (categoryId) => {
  const category = getPartyCategoryById(categoryId)
  return category ? category.slug : null
}

