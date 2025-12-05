/**
 * Cấu hình categories cho module Tin tức
 * Mapping: category → display name → API endpoint → slug
 */

export const CATEGORIES = {
  WORLD_MEDICAL: {
    id: 'world-medical',
    displayName: 'Tin tức y học thế giới',
    apiEndpoint: '/api/news/world-medical',
    slug: 'tin-tuc-y-hoc-the-gioi',
    icon: '🌍',
  },
  DOMESTIC_MEDICAL: {
    id: 'domestic-medical',
    displayName: 'Tin tức y học trong nước',
    apiEndpoint: '/api/news/domestic-medical',
    slug: 'tin-tuc-y-hoc-trong-nuoc',
    icon: '⭐',
  },
  HOSPITAL_ACTIVITIES: {
    id: 'hospital-activities',
    displayName: 'Tin tức hoạt động bệnh viện',
    apiEndpoint: '/api/news/hospital-activities',
    slug: 'tin-tuc-hoat-dong-benh-vien',
    icon: '🏥',
  },
  PROFESSIONAL_ARTICLES: {
    id: 'professional-articles',
    displayName: 'Bài viết chuyên môn',
    apiEndpoint: '/api/news/professional-articles',
    slug: 'bai-viet-chuyen-mon',
    icon: '📚',
  },
  
}

/**
 * Lấy category theo ID
 */
export const getCategoryById = (id) => {
  return Object.values(CATEGORIES).find(cat => cat.id === id)
}

/**
 * Lấy category theo slug
 */
export const getCategoryBySlug = (slug) => {
  return Object.values(CATEGORIES).find(cat => cat.slug === slug)
}

/**
 * Lấy tất cả categories dưới dạng array
 */
export const getAllCategories = () => {
  return Object.values(CATEGORIES)
}

/**
 * Lấy category ID từ slug (dùng cho routing)
 */
export const getCategoryIdFromSlug = (slug) => {
  const category = getCategoryBySlug(slug)
  return category ? category.id : null
}

/**
 * Lấy slug từ category ID
 */
export const getSlugFromCategoryId = (categoryId) => {
  const category = getCategoryById(categoryId)
  return category ? category.slug : null
}

