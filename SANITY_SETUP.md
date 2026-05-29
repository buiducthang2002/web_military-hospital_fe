# Hướng dẫn setup Sanity CMS + Deploy Vercel

Tài liệu này hướng dẫn từng bước để có một **trang admin (Sanity Studio)** đăng bài viết / tin tức, dữ liệu hiển thị tự động trên website React, và deploy lên Vercel.

## Tổng quan kiến trúc

```
[Bạn] ──> Sanity Studio (cms.benhvien.sanity.studio) ──> Sanity Cloud DB
                                                           │ API
[Người dùng] ──> Vercel (benhvien.vercel.app) ────────────┘ ← FE React
```

- **Sanity Studio**: trang admin để đăng bài (đã tạo trong thư mục `studio/`).
- **Sanity Cloud DB**: lưu trữ bài viết + ảnh, miễn phí ở mức 10k document.
- **FE React**: tự động fetch từ Sanity khi load trang.

---

## Bước 1 — Tạo Sanity project (~10 phút)

1. Vào https://www.sanity.io/manage và đăng nhập (Google / GitHub đều được).
2. Bấm **Create new project**:
   - Project name: `benhvien-cms`
   - Use default dataset configuration → `production`, public read.
3. Sau khi tạo xong, copy **Project ID** (định dạng như `abc12def`).
4. Vào tab **API → Tokens → Add API token**:
   - Name: `migration-token`
   - Permissions: **Editor**
   - Copy token (lưu ngay, chỉ hiện 1 lần).
5. Vào tab **API → CORS origins → Add CORS origin**:
   - `http://localhost:3000` (dev)
   - `https://your-vercel-domain.vercel.app` (sau khi deploy biết domain thì thêm)
   - `https://*.sanity.studio` (cho Studio)

## Bước 2 — Cài Sanity Studio (~5 phút)

```bash
cd studio
npm install
```

Mở file `studio/sanity.config.js` và `studio/sanity.cli.js`, thay `YOUR_PROJECT_ID` bằng Project ID lấy ở Bước 1.

Tạo file `studio/.env` (copy từ `.env.example`):
```
SANITY_PROJECT_ID=abc12def
SANITY_DATASET=production
SANITY_TOKEN=<paste token Editor ở Bước 1>
```

Chạy thử local:
```bash
npm run dev
```
Mở http://localhost:3333 — bạn sẽ thấy giao diện admin với 2 mục "Bài viết" và "Danh mục".

## Bước 3 — Migrate 20+ bài có sẵn lên Sanity (~2 phút)

Ở thư mục `studio/`:
```bash
npm run migrate
```

Script sẽ đọc `src/modules/{tintuc,Hoptac,partypolitics}/data/allNews.json` + các file content rồi đẩy lên Sanity.

Mở lại Studio (http://localhost:3333) → bạn sẽ thấy tất cả bài đã có.

> **Lưu ý**: Ảnh thumbnail chưa được upload tự động (vì ảnh đang là file local). Vào từng bài và upload ảnh qua giao diện Studio, hoặc bài viết mới hoàn toàn dùng ảnh upload qua Sanity.

## Bước 4 — Cấu hình FE đọc từ Sanity (~3 phút)

Ở thư mục gốc dự án FE:
```bash
npm install
```
(để cài `@sanity/client` và `@sanity/image-url` mới được thêm vào `package.json`)

Tạo file `.env` ở thư mục gốc (copy từ `.env.example`):
```
REACT_APP_SANITY_PROJECT_ID=abc12def
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_API_VERSION=2024-01-01
```

Chạy:
```bash
npm start
```

Mở http://localhost:3000/news-events — danh sách tin tức giờ là **hợp giữa data tĩnh + data Sanity**. Bài mới đăng trong Studio sẽ xuất hiện ở đây.

## Bước 5 — Đăng bài viết mới qua Studio

1. Vào Studio → **Bài viết → +** (tạo mới).
2. Điền: Tiêu đề, Slug (tự sinh), Module (tin tức / hợp tác / đảng-chính trị), Danh mục, Ảnh đại diện, Mô tả ngắn, Nội dung HTML.
3. Đặt **Trạng thái = Đã đăng** rồi nhấn **Publish**.
4. Refresh website → bài viết xuất hiện.

## Bước 6 — Deploy Sanity Studio lên cloud

Bước này **bắt buộc bạn tự chạy** (Claude không thể vì cần OAuth browser).

Ở `studio/`:
```bash
npx sanity login
```
→ chọn login method (Google / GitHub / Email) → browser mở ra để xác thực.

Sau khi login xong:
```bash
npx sanity deploy
```

Studio host đã được preset là `benhvienqy4` trong `studio/sanity.cli.js`, deploy xong sẽ live tại **https://benhvienqy4.sanity.studio**. Đây là URL bạn dùng để đăng nhập admin trên mọi máy.

## Bước 7 — Deploy FE lên Vercel

1. Push code lên GitHub.
2. Vào https://vercel.com → **Add New Project** → import repo.
3. Framework Preset: **Create React App** (auto detect).
4. **Environment Variables** (rất quan trọng):
   - `REACT_APP_SANITY_PROJECT_ID` = `abc12def`
   - `REACT_APP_SANITY_DATASET` = `production`
   - `REACT_APP_SANITY_API_VERSION` = `2024-01-01`
5. Deploy.
6. Sau khi có domain Vercel, quay lại Sanity Manage → API → CORS origins, thêm `https://<your-domain>.vercel.app`.

---

## Cấu trúc thư mục đã tạo

```
.
├── studio/                      ← Sanity Studio (admin)
│   ├── sanity.config.js
│   ├── sanity.cli.js
│   ├── package.json
│   ├── schemas/
│   │   ├── article.js           ← Schema bài viết
│   │   ├── category.js          ← Schema danh mục
│   │   └── index.js
│   └── scripts/
│       └── migrate.mjs          ← Script migrate data cũ
│
├── src/lib/                     ← Sanity client cho FE
│   ├── sanity.js                ← Khởi tạo client
│   ├── articles.js              ← Các hàm fetch articles
│   ├── useArticles.js           ← React hooks
│   └── mergeArticles.js         ← Merge Sanity + static
│
└── src/modules/tintuc/pages/    ← Đã update (POC)
    ├── NewsEventsPage.jsx       ← Hybrid: Sanity + static
    └── ArticleDetailPage.jsx    ← Hybrid: Sanity > static
```

## Trạng thái module

Cả **3 module** (tintuc, Hoptac, partypolitics) đều đã được nối với Sanity:
- `NewsEventsPage.jsx` — list view: dùng `useArticlesByModule(<module>)` + merge với JSON tĩnh.
- `ArticleDetailPage.jsx` — detail view: gọi `getArticleBySlug(slug)`, fallback về static khi không có trong Sanity.

## Quan trọng — Bảo mật

- **Không commit file `.env`** (đã có trong `.gitignore`).
- Token có quyền Editor chỉ dùng trong script migration và Studio. Tuyệt đối không đưa vào FE.
- FE chỉ dùng Project ID (public, an toàn).
