export const mergeArticlesBySlug = (sanityArticles = [], staticArticles = []) => {
  const staticMap = new Map()
  for (const a of staticArticles) {
    if (!a || !a.slug) continue
    staticMap.set(a.slug, a)
  }

  const map = new Map()
  for (const a of staticArticles) {
    if (!a || !a.slug) continue
    map.set(a.slug, {...a, source: 'static'})
  }
  for (const a of sanityArticles) {
    if (!a || !a.slug) continue
    const fallback = staticMap.get(a.slug) || {}
    map.set(a.slug, {
      ...fallback,
      ...a,
      image: a.image || fallback.image,
      excerpt: a.excerpt || fallback.excerpt,
      content: a.content || fallback.content,
      source: 'sanity',
    })
  }
  return Array.from(map.values()).sort((x, y) => {
    const da = new Date(x.date || x.publishedAt || 0).getTime()
    const db = new Date(y.date || y.publishedAt || 0).getTime()
    return db - da
  })
}
