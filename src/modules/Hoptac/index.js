/**
 * Module Nghiên cứu khoa học - Hợp tác
 * Export các components, utilities, và data chính
 */

export { 
  PARTY_CATEGORIES,
  getAllPartyCategories,
  getPartyCategoryById,
  getPartyCategoryBySlug,
  getPartyCategoryIdFromSlug,
  getPartySlugFromCategoryId,
} from './categories'

export { default as CategoryTabs } from './components/CategoryTabs'

export { default as partyNewsData } from './data/allNews.json'

