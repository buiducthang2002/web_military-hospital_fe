export const mergeArticlesBySlug = (sanityArticles = [], staticArticles = []) => {
  const map = new Map()
  for (const a of staticArticles) {
    if (!a || !a.slug) continue
    map.set(a.slug, {...a, source: 'static'})
  }
  for (const a of sanityArticles) {
    if (!a || !a.slug) continue
    map.set(a.slug, {...a, source: 'sanity'})
  }
  return Array.from(map.values()).sort((x, y) => {
    const da = new Date(x.date || x.publishedAt || 0).getTime()
    const db = new Date(y.date || y.publishedAt || 0).getTime()
    return db - da
  })
}
