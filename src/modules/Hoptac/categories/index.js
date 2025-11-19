/**
 * Cấu hình categories cho module Nghiên cứu khoa học - Hợp tác
 */

export const PARTY_CATEGORIES = {
  PARTY_WORK: {
    id: 'party-work',
    displayName: 'Hợp tác khoa học, bệnh viện',
    apiEndpoint: '/api/party/party-work',
    slug: 'hop-tac-khoa-hoc',
    icon: '🏛️',
  },
  POLITICS: {
    id: 'politics',
    displayName: 'Các cuộc thi',
    apiEndpoint: '/api/party/politics',
    slug: 'cac-cuoc-thi',
    icon: '📜',
  },
  YOUTH_UNION: {
    id: 'youth-union',
    displayName: 'Đơn vị đồng hành',
    apiEndpoint: '/api/party/youth-union',
    slug: 'don-vi-dong-hanh',
    icon: '👥',
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

