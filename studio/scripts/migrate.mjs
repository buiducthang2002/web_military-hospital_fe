/* eslint-disable no-console */
import 'dotenv/config'
import {createClient} from '@sanity/client'
import {readFile} from 'node:fs/promises'
import {fileURLToPath, pathToFileURL} from 'node:url'
import {dirname, resolve} from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FE_ROOT = resolve(__dirname, '..', '..')

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_TOKEN) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_TOKEN in .env')
  process.exit(1)
}

const EXTRA_CATEGORIES = {
  tintuc: [
    {
      id: 'events',
      displayName: 'Sự kiện nổi bật',
      slug: 'su-kien-noi-bat',
      icon: '✨',
    },
  ],
}

const MODULES = [
  {
    key: 'tintuc',
    dataPath: 'src/modules/tintuc/data/allNews.json',
    contentDir: 'src/modules/tintuc/content',
    categoriesPath: 'src/modules/tintuc/categories/index.js',
  },
  {
    key: 'hoptac',
    dataPath: 'src/modules/Hoptac/data/allNews.json',
    contentDir: 'src/modules/Hoptac/content',
    categoriesPath: 'src/modules/Hoptac/categories/index.js',
  },
  {
    key: 'partypolitics',
    dataPath: 'src/modules/partypolitics/data/allNews.json',
    contentDir: 'src/modules/partypolitics/content',
    categoriesPath: 'src/modules/partypolitics/categories/index.js',
  },
]

const loadCategories = async (relPath) => {
  const url = pathToFileURL(resolve(FE_ROOT, relPath)).href
  const mod = await import(url)
  const catObj = mod.CATEGORIES || mod.PARTY_CATEGORIES || mod.HOPTAC_CATEGORIES || {}
  return Object.values(catObj)
}

const loadJson = async (relPath) => {
  const txt = await readFile(resolve(FE_ROOT, relPath), 'utf-8')
  return JSON.parse(txt)
}

const loadArticleContent = async (relDir, slug) => {
  try {
    const url = pathToFileURL(resolve(FE_ROOT, relDir, `${slug}.js`)).href
    const mod = await import(url)
    return mod.default || ''
  } catch {
    return ''
  }
}

const upsertCategory = async (mod, cat) => {
  const _id = `category-${mod}-${cat.id}`
  const doc = {
    _id,
    _type: 'category',
    displayName: cat.displayName,
    categoryId: cat.id,
    slug: {_type: 'slug', current: cat.slug || cat.id},
    module: mod,
    icon: cat.icon || '',
    order: 0,
  }
  await client.createOrReplace(doc)
  console.log(`  ✓ category: ${cat.displayName}`)
  return _id
}

const upsertArticle = async (mod, item, categoryRefId, htmlContent) => {
  const _id = `article-${mod}-${item.slug}`
  const doc = {
    _id,
    _type: 'article',
    title: item.title,
    slug: {_type: 'slug', current: item.slug},
    module: mod,
    category: {_type: 'reference', _ref: categoryRefId},
    excerpt: item.excerpt || '',
    content: htmlContent || item.content || '',
    author: item.author || 'Admin',
    publishedAt: new Date(item.date || Date.now()).toISOString(),
    views: item.views || 0,
    tags: item.tags || [],
    status: 'published',
  }
  await client.createOrReplace(doc)
  console.log(`  ✓ article: ${item.title.substring(0, 60)}...`)
}

const main = async () => {
  for (const m of MODULES) {
    console.log(`\n[${m.key}] Migrating...`)

    let categories = []
    try {
      categories = await loadCategories(m.categoriesPath)
    } catch (e) {
      console.warn(`  skip categories: ${e.message}`)
    }

    const extras = EXTRA_CATEGORIES[m.key] || []
    categories = [...categories, ...extras]

    const catRefMap = {}
    for (const c of categories) {
      catRefMap[c.id] = await upsertCategory(m.key, c)
    }

    let articles = []
    try {
      articles = await loadJson(m.dataPath)
    } catch (e) {
      console.warn(`  skip articles: ${e.message}`)
      continue
    }

    for (const a of articles) {
      const html = await loadArticleContent(m.contentDir, a.slug)
      const catRef = catRefMap[a.categoryId]
      if (!catRef) {
        console.warn(`  ! missing category for article ${a.slug} (categoryId=${a.categoryId})`)
        continue
      }
      await upsertArticle(m.key, a, catRef, html)
    }
  }
  console.log('\nDone.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
