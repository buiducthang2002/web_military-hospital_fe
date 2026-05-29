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

const FEATURED_SLUGS = [
  {slug: 'tin-tuc-hoat-dong-benh-vien-9', order: 0},
  {slug: 'tin-tuc-hoat-dong-benh-vien-7', order: 1},
  {slug: 'tin-tuc-hoat-dong-benh-vien-6', order: 2},
  {slug: 'tin-tuc-hoat-dong-benh-vien-8', order: 3},
]

const ANNOUNCEMENTS = [
  {text: 'Thông báo: Thư mời báo giá Camera', date: '2026-05-22', link: '/thu-moi-bao-gia-camera.pdf'},
  {
    text: 'Thông báo: Lịch Sinh hoạt khoa học của các đơn vị trong Bệnh viện Quân y 4 từ ngày 08/12/2025 đến ngày 14/12/2025',
    date: '2025-12-05',
  },
  {
    text: 'Thông báo Kế hoạch Tổ chức đào tạo hướng dẫn thực hành khám bệnh, chữa bệnh 12/2025',
    date: '2025-12-05',
  },
  {
    text: 'Thông báo về việc thu hút nhân lực chất lượng cao tham gia triển khai, tổ chức và điều phối hoạt động chuyên môn tại các khoa, trung tâm trực thuộc BV',
    date: '2025-11-28',
  },
  {
    text: 'Thông báo về việc trúng tuyển và nhập học nghiên cứu sinh đợt II năm 2025',
    date: '2025-11-21',
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    date: '2025-10-16',
  },
  {
    text: 'Một số cập nhật quỹ Nafosted (Quỹ phát triển Khoa học và Công nghệ quốc gia) - Hội đồng ứng dụng',
    date: '2025-08-23',
  },
]

const markFeatured = async () => {
  console.log('\n[featured] Marking featured articles...')
  for (const {slug, order} of FEATURED_SLUGS) {
    const _id = `article-tintuc-${slug}`
    try {
      await client
        .patch(_id)
        .set({featured: true, featuredOrder: order})
        .commit()
      console.log(`  ✓ ${slug} (order=${order})`)
    } catch (e) {
      console.warn(`  ! ${slug}: ${e.message}`)
    }
  }
}

const upsertAnnouncements = async () => {
  console.log('\n[announcements] Importing announcements...')
  for (let i = 0; i < ANNOUNCEMENTS.length; i++) {
    const a = ANNOUNCEMENTS[i]
    const _id = `announcement-legacy-${i + 1}`
    const doc = {
      _id,
      _type: 'announcement',
      text: a.text,
      publishedAt: new Date(`${a.date}T00:00:00Z`).toISOString(),
      link: a.link || undefined,
      order: i,
      status: 'published',
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ ${a.text.substring(0, 60)}...`)
  }
}

const main = async () => {
  if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_TOKEN) {
    console.error('Missing SANITY_PROJECT_ID or SANITY_TOKEN in .env')
    process.exit(1)
  }
  await markFeatured()
  await upsertAnnouncements()
  console.log('\nDone.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
