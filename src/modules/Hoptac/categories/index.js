/**
 * Cấu hình categories cho module Nghiên cứu khoa học - Hợp tác
 */

export const PARTY_CATEGORIES = {
  PARTY_WORK: {
    id: 'cooperation-scientific',
    displayName: 'Dược lâm sàng',
    apiEndpoint: '/api/cooperation/scientific',
    slug: 'hop-tac-khoa-hoc',
    icon: '🤝',
  },
  POLITICS: {
    id: 'cooperation-competitions',
    displayName: 'Hướng dẫn sử dụng thuốc',
    apiEndpoint: '/api/cooperation/competitions',
    slug: 'cac-cuoc-thi',
    icon: '🏆',
  },
  YOUTH_UNION: {
    id: 'cooperation-partners',
    displayName: 'Đơn vị đồng hành',
    apiEndpoint: '/api/cooperation/partners',
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

