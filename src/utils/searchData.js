/**
 * Tổng hợp tất cả dữ liệu có thể tìm kiếm từ toàn bộ website
 */

// Import dữ liệu từ các module
import tintucData from '../modules/tintuc/data/allNews.json'
import partypoliticsData from '../modules/partypolitics/data/allNews.json'
import hoptacData from '../modules/Hoptac/data/allNews.json'

// Import nội dung chi tiết
import tintucContents from '../modules/tintuc/content/index'
import partypoliticsContents from '../modules/partypolitics/content/index'
import hoptacContents from '../modules/Hoptac/content/index'

// Import image mappers
import { mapArticlesImages as mapTintucImages } from '../modules/tintuc/utils/imageMapper'
import { mapArticlesImages as mapPartypoliticsImages } from '../modules/partypolitics/utils/imageMapper'
import { mapArticlesImages as mapHoptacImages } from '../modules/Hoptac/utils/imageMapper'

// Dữ liệu Ban giám đốc
export const organizationData = [
  {
    id: 'org-1',
    type: 'organization',
    title: 'Đại tá, BSCKII, Thầy thuốc Ưu tú Nguyễn An Giang',
    slug: 'organization',
    excerpt: 'Giám đốc bệnh viện - Đại tá, BSCKII, Thầy thuốc Ưu tú Nguyễn An Giang',
    content: 'Giám đốc bệnh viện - Đại tá, BSCKII, Thầy thuốc Ưu tú Nguyễn An Giang. Bệnh viện Quân y 4 - Cục Hậu cần Kỹ thuật Quân khu 4',
    image: null,
    date: '2025-01-01',
    tags: ['ban giám đốc', 'tổ chức', 'giám đốc'],
    categoryId: 'organization'
  },
  {
    id: 'org-2',
    type: 'organization',
    title: 'Đại tá, Thạc sĩ, BSCKII Trương Quang Thắng',
    slug: 'organization',
    excerpt: 'Phó giám đốc bệnh viện - Đại tá, Thạc sĩ, BSCKII Trương Quang Thắng',
    content: 'Phó giám đốc bệnh viện - Đại tá, Thạc sĩ, BSCKII Trương Quang Thắng. Bệnh viện Quân y 4',
    image: null,
    date: '2025-01-01',
    tags: ['ban giám đốc', 'tổ chức', 'phó giám đốc'],
    categoryId: 'organization'
  },
  {
    id: 'org-3',
    type: 'organization',
    title: 'Thượng tá, Tiến sĩ, BS Phan Quốc Khánh',
    slug: 'organization',
    excerpt: 'Phó giám đốc bệnh viện - Thượng tá, Tiến sĩ, BS Phan Quốc Khánh',
    content: 'Phó giám đốc bệnh viện - Thượng tá, Tiến sĩ, BS Phan Quốc Khánh. Bệnh viện Quân y 4',
    image: null,
    date: '2025-01-01',
    tags: ['ban giám đốc', 'tổ chức', 'phó giám đốc'],
    categoryId: 'organization'
  },
  {
    id: 'org-4',
    type: 'organization',
    title: 'Đại tá, BSCKII, Thạc sĩ Nguyễn Huy Thắng',
    slug: 'organization',
    excerpt: 'Phó giám đốc bệnh viện - Đại tá, BSCKII, Thạc sĩ Nguyễn Huy Thắng',
    content: 'Phó giám đốc bệnh viện - Đại tá, BSCKII, Thạc sĩ Nguyễn Huy Thắng. Bệnh viện Quân y 4',
    image: null,
    date: '2025-01-01',
    tags: ['ban giám đốc', 'tổ chức', 'phó giám đốc'],
    categoryId: 'organization'
  }
]

/**
 * Thêm nội dung đầy đủ vào mỗi bài viết
 */
const addFullContent = (articles, contentMap, type = 'news') => {
  return articles.map(article => ({
    ...article,
    type: type,
    content: contentMap[article.slug] || article.content || ''
  }))
}

/**
 * Lấy tất cả dữ liệu có thể tìm kiếm
 */
export const getAllSearchableData = () => {
  // Map images trước khi thêm content
  const tintucWithImages = mapTintucImages(tintucData)
  const partypoliticsWithImages = mapPartypoliticsImages(partypoliticsData)
  const hoptacWithImages = mapHoptacImages(hoptacData)

  // Thêm content đầy đủ
  const tintucWithContent = addFullContent(tintucWithImages, tintucContents, 'news')
  const partypoliticsWithContent = addFullContent(partypoliticsWithImages, partypoliticsContents, 'party-politics')
  const hoptacWithContent = addFullContent(hoptacWithImages, hoptacContents, 'cooperation')

  return [
    ...organizationData,
    ...tintucWithContent,
    ...partypoliticsWithContent,
    ...hoptacWithContent
  ]
}

/**
 * Lấy label hiển thị cho từng loại nội dung
 */
export const getTypeLabel = (type) => {
  const labels = {
    'news': 'Tin tức',
    'party-politics': 'Công tác Đảng',
    'cooperation': 'Nghiên cứu - Hợp tác',
    'organization': 'Tổ chức bệnh viện'
  }
  return labels[type] || 'Khác'
}

export default getAllSearchableData
