import {sanityClient, urlFor} from './sanity'

const ARTICLE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  module,
  "categoryId": category->categoryId,
  "categoryName": category->displayName,
  thumbnail,
  excerpt,
  content,
  "contentImages": contentImages[]{"url": asset->url, caption},
  author,
  publishedAt,
  views,
  tags,
  status
`

// Thay các placeholder {{IMG1}}, {{IMG2}}... trong HTML bằng URL ảnh
// đã upload ở mục "Ảnh dùng trong nội dung" (theo đúng thứ tự upload).
const resolveContentImages = (content, contentImages) => {
  if (!content || !Array.isArray(contentImages)) return content
  return content.replace(/\{\{IMG(\d+)\}\}/gi, (match, num) => {
    const img = contentImages[Number(num) - 1]
    return img && img.url ? img.url : match
  })
}

const mapArticle = (a) => ({
  id: a._id,
  title: a.title,
  slug: a.slug,
  module: a.module,
  categoryId: a.categoryId,
  categoryName: a.categoryName,
  image: a.thumbnail ? urlFor(a.thumbnail).width(800).url() : null,
  thumbnailRaw: a.thumbnail,
  excerpt: a.excerpt,
  content: resolveContentImages(a.content, a.contentImages),
  author: a.author || 'Admin',
  date: a.publishedAt ? a.publishedAt.split('T')[0] : '',
  publishedAt: a.publishedAt,
  views: a.views || 0,
  tags: a.tags || [],
  status: a.status,
})

export const getArticlesByModule = async (module) => {
  const query = `*[_type == "article" && module == $module && status == "published"] | order(publishedAt desc){${ARTICLE_FIELDS}}`
  const data = await sanityClient.fetch(query, {module})
  return data.map(mapArticle)
}

export const getArticleBySlug = async (slug) => {
  const query = `*[_type == "article" && slug.current == $slug][0]{${ARTICLE_FIELDS}}`
  const data = await sanityClient.fetch(query, {slug})
  return data ? mapArticle(data) : null
}

export const getCategoriesByModule = async (module) => {
  const query = `*[_type == "category" && module == $module] | order(order asc){
    "id": categoryId,
    displayName,
    "slug": slug.current,
    icon
  }`
  return sanityClient.fetch(query, {module})
}

export const getLatestArticles = async (module, limit = 10) => {
  const query = `*[_type == "article" && module == $module && status == "published"] | order(publishedAt desc)[0...$limit]{${ARTICLE_FIELDS}}`
  const data = await sanityClient.fetch(query, {module, limit})
  return data.map(mapArticle)
}
