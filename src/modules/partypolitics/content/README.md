# Thư mục nội dung bài viết

Thư mục này chứa các file nội dung đầy đủ cho từng bài viết tin tức.

## Cách sử dụng

### 1. Tạo file nội dung mới

Khi muốn viết nội dung đầy đủ cho một bài viết:

1. Tạo file mới với tên theo slug của bài viết (ví dụ: `tin-tuc-y-hoc-the-gioi-2.js`)
2. Copy template từ file mẫu `tin-tuc-y-hoc-the-gioi-1.js`
3. Viết nội dung HTML vào trong biến `content`
4. Export default content

**Ví dụ:**
```javascript
const content = `
  <p>Đoạn văn đầu tiên...</p>
  <h2>Tiêu đề phụ</h2>
  <p>Nội dung tiếp theo...</p>
`

export default content
```

### 2. Đăng ký file trong index.js

Sau khi tạo file, cần import và đăng ký trong file `index.js`:

```javascript
import content2 from './tin-tuc-y-hoc-the-gioi-2.js'

const articleContents = {
  'tin-tuc-y-hoc-the-gioi-1': content1,
  'tin-tuc-y-hoc-the-gioi-2': content2,  // ← Thêm dòng này
  // ...
}
```

### 3. Lấy slug từ allNews.json

Để biết slug của bài viết, xem trong file `../data/allNews.json`, tìm trường `slug` của bài viết tương ứng.

## Format nội dung

- Sử dụng HTML để format nội dung
- Các thẻ HTML được hỗ trợ: `<p>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<ol>`, `<img>`, `<a>`, v.v.
- Có thể sử dụng nhiều dòng để dễ đọc và chỉnh sửa

## Lưu ý

- Nếu không tạo file nội dung riêng, hệ thống sẽ sử dụng nội dung từ trường `content` trong `allNews.json`
- File nội dung riêng sẽ được ưu tiên hơn nội dung trong JSON

