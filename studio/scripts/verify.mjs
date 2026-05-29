/* eslint-disable no-console */
import 'dotenv/config'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const counts = await client.fetch(`{
  "tintucArticles": count(*[_type == "article" && module == "tintuc"]),
  "hoptacArticles": count(*[_type == "article" && module == "hoptac"]),
  "partyArticles": count(*[_type == "article" && module == "partypolitics"]),
  "categories": count(*[_type == "category"]),
}`)

console.log('Sanity content summary:')
console.log(JSON.stringify(counts, null, 2))
