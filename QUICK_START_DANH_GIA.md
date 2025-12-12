# 🚀 Quick Start - Đánh giá Chất lượng Khám chữa bệnh

## ✅ Đã hoàn thành

Tính năng **Đánh giá chất lượng khám chữa bệnh** đã được tạo hoàn chỉnh!

---

## 📂 Files đã tạo/cập nhật

1. ✅ `src/Khachhang/Danhgia.jsx` - Component chính
2. ✅ `src/Khachhang/Danhgia.css` - Styling (responsive)
3. ✅ `src/services/api.service.js` - API service
4. ✅ `src/App.js` - Thêm route `/danh-gia`
5. ✅ `EVALUATION_API_SPEC.md` - API documentation
6. ✅ `FEATURE_DANH_GIA_README.md` - Feature documentation
7. ✅ `DANH_GIA_VISUAL_GUIDE.md` - Visual guide

---

## 🏃‍♂️ Chạy ngay

### Bước 1: Khởi động development server (nếu chưa chạy)

```bash
cd "c:\Users\HH\WEB BVQY4\frontend"
npm start
```

### Bước 2: Truy cập trang

Mở browser và vào một trong hai cách:

**Cách 1: Từ trang Hướng dẫn khách hàng**
```
http://localhost:3000/customer-guide
```
Sau đó nhấn vào card **"Đánh giá chất lượng khám chữa bệnh"**

**Cách 2: Truy cập trực tiếp**
```
http://localhost:3000/danh-gia
```

### Bước 3: Test tính năng

1. ✅ Nhập họ tên (bắt buộc)
2. ✅ Đánh giá 10 câu hỏi (chọn 1 trong 4 mức)
3. ✅ Thêm ý kiến (tùy chọn)
4. ✅ Nhấn "Gửi đánh giá"

**Kết quả hiện tại:**
- Form sẽ hiển thị lỗi connection vì backend chưa có
- Đây là **bình thường** - frontend đã sẵn sàng, chỉ cần backend!

---

## 🎯 Tính năng đã implement

### ✅ 10 Câu hỏi Đánh giá
1. Thái độ phục vụ của nhân viên y tế
2. Bác sĩ tư vấn và giải thích
3. Thời gian chờ đợi
4. Cơ sở vật chất và trang thiết bị
5. Môi trường khám chữa bệnh
6. Quy trình tiếp nhận và thủ tục
7. Giá cả dịch vụ
8. Hướng dẫn sử dụng thuốc
9. An tâm về chất lượng
10. Sẵn sàng giới thiệu bệnh viện

### ✅ 4 Mức Đánh giá
- 😊 **Rất tốt** (4 điểm)
- 🙂 **Tốt** (3 điểm)
- 😐 **Trung bình** (2 điểm)
- ☹️ **Kém** (1 điểm)

### ✅ Form Features
- Progress bar (tiến độ hoàn thành)
- Real-time validation
- Overall score calculation
- Success/error messages
- Responsive design

### ✅ JSON Format
Gửi dữ liệu theo đúng cấu trúc:
```json
{
  "patientInfo": { "name": "...", "phone": "...", "email": "..." },
  "ratings": [...],
  "additionalComments": "...",
  "submittedAt": "...",
  "overallScore": "3.60"
}
```

---

## 📱 Test Responsive

### Desktop
- Resize browser > 768px
- 4 rating buttons nằm ngang

### Tablet
- Resize browser 481-768px
- Rating buttons dạng 2x2 grid

### Mobile
- Resize browser < 480px
- Hoặc mở Chrome DevTools (F12) → Toggle Device Toolbar
- Chọn iPhone/Android
- Rating buttons dạng vertical hoặc 2x2

---

## 🔧 Backend Setup (Cần làm sau)

### Tạo endpoint

```
POST http://localhost:3000/api/evaluations
```

### Database table

```sql
CREATE TABLE evaluations (
  id SERIAL PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  patient_phone VARCHAR(20),
  patient_email VARCHAR(255),
  ratings JSONB NOT NULL,
  additional_comments TEXT,
  overall_score DECIMAL(3,2) NOT NULL,
  submitted_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Chi tiết đầy đủ
Xem file: `EVALUATION_API_SPEC.md`

---

## 🎨 Customization

### Thay đổi màu sắc

Edit file `src/Khachhang/Danhgia.css`:

```css
/* Primary color */
#0b7439 → Your color

/* Background */
#f5fbf7 → Your color
```

### Thay đổi câu hỏi

Edit file `src/Khachhang/Danhgia.jsx`:

```javascript
const evaluationQuestions = [
  {
    id: 1,
    question: 'Your question here'
  },
  // ... add more questions
]
```

### Thay đổi rating levels

```javascript
const ratingLevels = [
  { value: 5, label: 'Excellent', emoji: '⭐' },
  // ... customize
]
```

---

## 🐛 Troubleshooting

### "Cannot GET /danh-gia"
- ✅ Check: Route đã được thêm vào `App.js`
- ✅ Restart development server

### "Module not found: Danhgia"
- ✅ Check: File `Danhgia.jsx` có trong `src/Khachhang/`
- ✅ Check: Import statement trong `App.js`

### "Failed to fetch"
- ✅ **Bình thường!** Backend chưa có
- ✅ Tạo backend endpoint `/api/evaluations`

### Styling không hiển thị
- ✅ Check: `import './Danhgia.css'` trong `Danhgia.jsx`
- ✅ Clear browser cache (Ctrl+Shift+R)

### Progress bar không cập nhật
- ✅ Open Console (F12)
- ✅ Check for JavaScript errors

---

## 📊 Example Data Flow

```
User Input:
  Name: "Nguyễn Văn A"
  Phone: "0987654321"
  Email: "test@example.com"
  
  Question 1: Rất tốt (4)
  Question 2: Tốt (3)
  ... (8 more)
  
  Comments: "Dịch vụ tốt!"

        ↓

JSON Sent to Backend:
{
  "patientInfo": {
    "name": "Nguyễn Văn A",
    "phone": "0987654321",
    "email": "test@example.com"
  },
  "ratings": [
    {"questionId": 1, "questionText": "...", "rating": 4},
    {"questionId": 2, "questionText": "...", "rating": 3},
    ...
  ],
  "additionalComments": "Dịch vụ tốt!",
  "submittedAt": "2025-12-03T10:30:00.000Z",
  "overallScore": "3.50"
}

        ↓

Backend Response:
{
  "success": true,
  "message": "Đánh giá đã được gửi thành công",
  "data": {
    "evaluationId": "eval_123456789",
    "submittedAt": "2025-12-03T10:30:00.000Z",
    "overallScore": "3.50"
  }
}

        ↓

UI Shows:
  ✓ Success message (green)
  Form resets after 3 seconds
```

---

## 📖 Documentation

### Detailed Guides
1. **FEATURE_DANH_GIA_README.md** - Complete feature documentation
2. **EVALUATION_API_SPEC.md** - Backend API specification
3. **DANH_GIA_VISUAL_GUIDE.md** - Visual design guide
4. **QUICK_START_DANH_GIA.md** - This file!

### Code Files
1. **Danhgia.jsx** - Main component (400+ lines)
2. **Danhgia.css** - Styling (600+ lines)
3. **api.service.js** - API utilities

---

## ✨ Next Steps

### Frontend (Hoàn thành ✅)
- [x] Create page component
- [x] Implement form with 10 questions
- [x] Add 4 rating levels
- [x] Form validation
- [x] JSON structure for backend
- [x] Responsive design
- [x] Add to routing
- [x] Documentation

### Backend (Cần làm ⏳)
- [ ] Create Node.js/Express server
- [ ] Setup PostgreSQL database
- [ ] Create `evaluations` table
- [ ] Implement `POST /api/evaluations` endpoint
- [ ] Add validation
- [ ] Test API with frontend
- [ ] (Optional) Admin dashboard
- [ ] (Optional) Email notifications

### Testing (Sau khi có backend)
- [ ] Submit form with all fields
- [ ] Submit with missing fields
- [ ] Submit with invalid email
- [ ] Test on mobile devices
- [ ] Test on different browsers

---

## 🎉 Summary

**Tính năng hoàn thành 100% phía Frontend!**

```
✅ 10 questions
✅ 4 rating levels
✅ JSON format
✅ Matching layout
✅ Responsive design
✅ Form validation
✅ API integration ready
✅ Documentation complete
```

**Để hoàn thiện toàn bộ hệ thống:**
Chỉ cần tạo backend endpoint `/api/evaluations` theo spec trong `EVALUATION_API_SPEC.md`

---

## 📞 Support

Nếu có câu hỏi hoặc gặp vấn đề:

1. Check Console log (F12 → Console)
2. Check Network tab (F12 → Network)
3. Review documentation files
4. Verify file paths and imports
5. Restart development server

---

**Ready to use!** 🚀

Truy cập ngay: `http://localhost:3000/danh-gia`











