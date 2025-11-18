# Hướng dẫn chỉnh sửa ảnh cho bài viết

Có 3 cách để thay đổi ảnh hiển thị cho bài viết:

## Cách 1: Thay đổi ảnh trong file JSON (Đơn giản nhất) ⭐

**File:** `src/modules/tintuc/data/allNews.json`

Chỉ cần thay đổi trường `"image"` trong bài viết tương ứng:

```json
{
  "id": "1",
  "title": "10 năm chuyển giao kỹ thuật...",
  "image": "anh1.jpg",  // ← Thay đổi tên file ở đây
  ...
}
```

**Các ảnh có sẵn:**
- `anh1.jpg` đến `anh13.jpg`
- `anh6.jpg` đến `anh9.jpg`

**Ví dụ:** Để dùng ảnh `anh2.jpg` cho bài viết, đổi thành:
```json
"image": "anh2.jpg"
```

---

## Cách 2: Thêm ảnh mới vào thư mục Images

### Bước 1: Thêm file ảnh vào thư mục
Đặt file ảnh mới vào: `src/Components/NewsEvents/Images/`

Ví dụ: `anh14.jpg`, `anh15.jpg`, ...

### Bước 2: Đăng ký ảnh trong imageMapper.js
Mở file: `src/modules/tintuc/utils/imageMapper.js`

**Thêm import:**
```javascript
import anh14 from '../../../Components/NewsEvents/Images/anh14.jpg'
```

**Thêm vào imageMap:**
```javascript
const imageMap = {
  'anh1.jpg': anh1,
  // ... các ảnh khác
  'anh14.jpg': anh14,  // ← Thêm dòng này
}
```

### Bước 3: Sử dụng trong JSON
Trong `allNews.json`, đặt:
```json
"image": "anh14.jpg"
```

---

## Cách 3: Dùng URL ảnh từ internet (Không cần đăng ký)

**File:** `src/modules/tintuc/data/allNews.json`

Chỉ cần đặt URL trực tiếp vào trường `"image"`:

```json
{
  "id": "1",
  "title": "Bài viết...",
  "image": "https://example.com/image.jpg",  // ← URL trực tiếp
  ...
}
```

**Lưu ý:** URL phải bắt đầu bằng `http://` hoặc `https://`

**Ví dụ:**
```json
"image": "https://images.unsplash.com/photo-1234567890"
```

---

## Tóm tắt nhanh

| Cách | Độ khó | Khi nào dùng |
|------|--------|--------------|
| **Cách 1** | ⭐ Dễ | Dùng ảnh có sẵn trong thư mục |
| **Cách 2** | ⭐⭐ Trung bình | Thêm ảnh mới vào project |
| **Cách 3** | ⭐ Dễ | Dùng ảnh từ internet/URL |

---

## Lưu ý

- Ảnh trong thư mục `Images/` sẽ được tối ưu bởi webpack
- URL từ internet không cần đăng ký, nhưng phụ thuộc vào kết nối mạng
- Nên dùng định dạng `.jpg`, `.png`, `.webp` để tối ưu hiệu suất
- Kích thước ảnh nên phù hợp (khuyến nghị: 800x400px cho ảnh bài viết)

