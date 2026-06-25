import {sanityClient, urlFor} from './sanity'

const FEATURED_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  module,
  thumbnail,
  publishedAt,
  featuredOrder
`

const mapFeatured = (a) => {
  const moduleToPath = {
    tintuc: 'news-events',
    hoptac: 'duoc-pham-suc-khoe',
    partypolitics: 'party-politics',
  }
  const basePath = moduleToPath[a.module] || 'news-events'
  return {
    id: a._id,
    title: a.title,
    slug: a.slug,
    image: a.thumbnail ? urlFor(a.thumbnail).width(800).url() : null,
    time: a.publishedAt
      ? new Date(a.publishedAt).toLocaleDateString('vi-VN')
      : '',
    link: `/${basePath}/${a.slug}`,
    order: a.featuredOrder ?? 0,
  }
}

export const getFeaturedArticles = async (limit = 4) => {
  const query = `*[_type == "article" && featured == true && status == "published"]
    | order(featuredOrder asc, publishedAt desc)[0...$limit]{${FEATURED_FIELDS}}`
  const data = await sanityClient.fetch(query, {limit})
  return data.map(mapFeatured)
}

const mapAnnouncement = (a) => {
  let link = a.link || ''
  if (!link && a.attachmentUrl) link = a.attachmentUrl
  return {
    id: a._id,
    text: a.text,
    time: a.publishedAt
      ? new Date(a.publishedAt).toLocaleDateString('vi-VN')
      : '',
    link,
  }
}

export const getAnnouncements = async (limit = 10) => {
  const query = `*[_type == "announcement" && status == "published"]
    | order(order asc, publishedAt desc)[0...$limit]{
      _id,
      text,
      publishedAt,
      link,
      "attachmentUrl": attachment.asset->url
    }`
  const data = await sanityClient.fetch(query, {limit})
  return data.map(mapAnnouncement)
}
