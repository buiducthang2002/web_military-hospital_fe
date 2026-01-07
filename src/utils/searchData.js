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
  },
  {
    id: 'dept-1',
    type: 'departments',
    title: 'Phòng Kế hoạch tổng hợp - Trưởng phòng: Trần Sơn',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Phòng Kế hoạch tổng hợp do Trưởng phòng Trần Sơn phụ trách',
    content: 'Phòng Kế hoạch tổng hợp - Trưởng phòng: Trần Sơn. Giúp Giám đốc Bệnh viện theo dõi, chỉ đạo công tác khám bệnh, chữa bệnh chăm sóc và bảo vệ sức khỏe trong toàn Bệnh viện',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'kế hoạch'],
    categoryId: 'departments'
  },
  {
    id: 'dept-2',
    type: 'departments',
    title: 'Phòng tham mưu hành chính - Trưởng phòng: Trần Đức Sơn',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Phòng tham mưu hành chính do Trưởng phòng Trần Đức Sơn phụ trách',
    content: 'Phòng tham mưu hành chính - Trưởng phòng: Trần Đức Sơn. Là cơ quan giúp Ban Giám đốc duy trì đơn vị chấp hành nghiêm kỷ luật quân đội',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'hành chính'],
    categoryId: 'departments'
  },
  {
    id: 'dept-3',
    type: 'departments',
    title: 'Phòng hậu cần kỹ thuật - Trưởng phòng: Nguyễn Duy Hồng',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Phòng hậu cần kỹ thuật do Trưởng phòng Nguyễn Duy Hồng phụ trách',
    content: 'Phòng hậu cần kỹ thuật - Trưởng phòng: Nguyễn Duy Hồng',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'hậu cần'],
    categoryId: 'departments'
  },
  {
    id: 'dept-4',
    type: 'departments',
    title: 'Phòng chính trị - Trưởng phòng: Võ Xuân Thành',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Phòng chính trị do Trưởng phòng Võ Xuân Thành phụ trách',
    content: 'Phòng chính trị - Trưởng phòng: Võ Xuân Thành. Tham mưu giúp thường vụ Đảng ủy, Ban Giám đốc lãnh đạo, chỉ đạo triển khai hoạt động Công tác Đảng, công tác chính trị trong Bệnh viện',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'chính trị'],
    categoryId: 'departments'
  },
  {
    id: 'dept-5',
    type: 'departments',
    title: 'Ban điều dưỡng - Trưởng ban: Trần Hoàng',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Ban điều dưỡng do Trưởng ban Trần Hoàng phụ trách',
    content: 'Ban điều dưỡng - Trưởng ban: Trần Hoàng',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'điều dưỡng'],
    categoryId: 'departments'
  },
  {
    id: 'dept-6',
    type: 'departments',
    title: 'Ban tài chính - Trưởng ban: Đặng Văn Mừng',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Ban tài chính do Trưởng ban Đặng Văn Mừng phụ trách',
    content: 'Ban tài chính - Trưởng ban: Đặng Văn Mừng. Lập dự toán thu chi ngân sách quốc phòng thường xuyên. Tổ chức bảo đảm, cấp phát, quản lý việc sử dụng, giám sát, kiểm soát việc chi tiêu thanh toán, quyết toán ngân sách',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'tài chính'],
    categoryId: 'departments'
  },
  {
    id: 'dept-7',
    type: 'departments',
    title: 'Ban công nghệ thông tin - Trưởng ban: Hoàng Đình Đồng',
    slug: 'thong-tin-chung/cac-don-vi',
    excerpt: 'Ban công nghệ thông tin do Trưởng ban Hoàng Đình Đồng phụ trách',
    content: 'Ban công nghệ thông tin - Trưởng ban: Hoàng Đình Đồng',
    image: null,
    date: '2025-01-01',
    tags: ['phòng ban', 'tổ chức', 'công nghệ thông tin'],
    categoryId: 'departments'
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
    'organization': 'Tổ chức',
    'departments': 'Phòng ban'
  }
  return labels[type] || 'Khác'
}

export default getAllSearchableData
