# 🚀 BACKEND ROADMAP - CÁC TÍNH NĂNG CẦN TRIỂN KHAI

> Dành cho lập trình viên backend để xây dựng API hỗ trợ website Bệnh viện Quân y 4

---

## 📊 TÓM TẮT TÍNH NĂNG

### Phạm vi công việc backend:
1. **Quản lý Tin tức** (News Management System)
2. **Quản lý Bệnh nhân & Lịch hẹn** (Patient & Appointment Management)
3. **Quản lý Bác sĩ & Khoa** (Doctor & Department Management)
4. **Xác thực & Phân quyền** (Authentication & Authorization)
5. **Quản lý Tệp & Hình ảnh** (File Upload & Storage)
6. **Quản lý Người dùng** (User Management)
7. **Tìm kiếm & Lọc** (Search & Filtering)
8. **Bảo mật & Logging** (Security & Audit Trail)

---

## 🎯 PHASE 1: FOUNDATION (Tuần 1-2)

### 1.1 Setup Project & Environment
```bash
# Backend stack
- Framework: Node.js + Express (hoặc NestJS)
- Database: PostgreSQL
- ORM: Prisma (khuyến nghị) hoặc Sequelize
- Authentication: JWT + bcrypt
- Validation: joi hoặc class-validator

# Folder structure
backend/
├── src/
│   ├── config/              # Database, env, settings
│   ├── models/              # Database schemas (Prisma)
│   ├── controllers/         # Request handlers
│   ├── services/            # Business logic
│   ├── routes/              # API routes
│   ├── middlewares/         # Auth, validation, error handling
│   ├── utils/               # Helper functions
│   └── main.ts              # Entry point
├── prisma/
│   └── schema.prisma        # Database schema
├── migrations/              # Database migrations
├── .env                     # Environment variables
├── package.json
└── README.md
```

### 1.2 Database Setup
```
✓ Tạo PostgreSQL database
✓ Setup Prisma ORM
✓ Tạo schema (xem DATABASE_SCHEMA_DESIGN.md)
✓ Seed dữ liệu mẫu (users, departments, categories)
✓ Setup migrations system
```

### 1.3 Authentication & Security
```
✓ JWT token generation & validation
✓ bcrypt password hashing
✓ Login endpoint
✓ Register endpoint (cho bệnh nhân)
✓ Token refresh endpoint
✓ Auth middleware
✓ Role-based access control (RBAC)
✓ Password reset flow
```

---

## 🎯 PHASE 2: CORE APIs (Tuần 3-4)

### 2.1 Articles/News API (🔥 CRITICAL)

**Endpoints cần thiết:**

```
GET  /api/articles                     # Danh sách tin tức
GET  /api/articles?category=X          # Lọc theo category
GET  /api/articles?module=X            # Lọc theo module
GET  /api/articles?tags=X,Y            # Lọc theo tags
GET  /api/articles?search=keyword      # Tìm kiếm
GET  /api/articles/:id                 # Chi tiết tin tức
GET  /api/articles/slug/:slug          # Chi tiết theo slug
GET  /api/articles/featured            # Tin tức nổi bật
POST /api/articles                     # Tạo tin tức (admin)
PUT  /api/articles/:id                 # Cập nhật (admin)
DELETE /api/articles/:id               # Xóa (admin)
```

**Cần xử lý:**
- [ ] Pagination (limit, offset)
- [ ] Sorting (latest, popular, views)
- [ ] Category filtering
- [ ] Module filtering
- [ ] Tag filtering
- [ ] Search full-text
- [ ] View counting
- [ ] Slug validation

**Dữ liệu mẫu từ Frontend:**
```json
{
  "id": 1,
  "categoryId": "world-medical",
  "moduleId": "tintuc",
  "title": "10 năm chuyển giao kỹ thuật...",
  "slug": "tin-tuc-y-hoc-the-gioi-1",
  "excerpt": "Ngày 15/11/2025, Hội thảo...",
  "content": "Nội dung đầy đủ bài viết...",
  "featured_image_url": "https://...",
  "author": "Admin",
  "views": 150,
  "tags": ["y học", "thế giới", "nghiên cứu"],
  "status": "published",
  "published_at": "2025-04-11T00:00:00Z",
  "created_at": "2025-04-11T00:00:00Z",
  "updated_at": "2025-04-11T00:00:00Z"
}
```

---

### 2.2 Categories & Modules API

**Endpoints:**
```
GET  /api/article-categories           # Danh sách danh mục
GET  /api/modules                      # Danh sách modules
GET  /api/modules/:id/categories       # Categories của module
```

**Dữ liệu cần return:**
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Tin tức y học thế giới",
      "slug": "world-medical",
      "icon": "🌍",
      "display_order": 1
    }
  ],
  "modules": [
    {
      "id": 1,
      "name": "Tin tức & Sự kiện",
      "slug": "tintuc",
      "icon": "📰",
      "categories": [...]
    }
  ]
}
```

---

### 2.3 Departments & Doctors API

**Endpoints:**
```
GET  /api/departments                  # Danh sách khoa
GET  /api/departments/:id              # Chi tiết khoa
GET  /api/departments/:id/doctors      # Bác sĩ theo khoa
GET  /api/doctors                      # Danh sách bác sĩ
GET  /api/doctors/:id                  # Chi tiết bác sĩ
GET  /api/doctors?department=X         # Lọc bác sĩ
```

**Dữ liệu cần return:**
```json
{
  "departments": [
    {
      "id": 1,
      "name": "Nội tổng hợp",
      "slug": "noi-tong-hop",
      "specialties": "Chẩn đoán và điều trị các bệnh nội khoa",
      "phone": "0974-225-225",
      "image_url": "https://...",
      "doctors": [...]
    }
  ]
}
```

---

## 🎯 PHASE 3: APPOINTMENT SYSTEM (Tuần 5-6)

### 3.1 Appointments API

**Endpoints:**
```
GET  /api/appointments                 # Danh sách lịch hẹn (auth)
GET  /api/appointments/:id             # Chi tiết lịch hẹn
POST /api/appointments                 # Đặt lịch hẹn mới
PUT  /api/appointments/:id             # Cập nhật lịch hẹn
DELETE /api/appointments/:id           # Hủy lịch hẹn
GET  /api/appointments/available-slots # Kiểm tra slot còn trống
```

**Request body for booking:**
```json
{
  "patient_id": 1,
  "doctor_id": 5,
  "department_id": 2,
  "appointment_date": "2025-12-15",
  "time_slot": "morning",
  "health_issue": "Đau đầu, sốt",
  "notes": "Có dị ứng với penicillin"
}
```

**Response:**
```json
{
  "id": 101,
  "patient_id": 1,
  "doctor_id": 5,
  "department_id": 2,
  "appointment_date": "2025-12-15",
  "time_slot": "morning",
  "status": "pending",
  "confirmation_number": "APPT-20251215-101",
  "created_at": "2025-11-25T10:30:00Z"
}
```

**Cần xử lý:**
- [ ] Kiểm tra slot còn trống
- [ ] Validate ngày hẹn (phải >= hôm nay)
- [ ] Check conflict với lịch bác sĩ
- [ ] Generate confirmation number
- [ ] Send confirmation email
- [ ] Send SMS notification
- [ ] Validate patient data

---

### 3.2 Patient Management API

**Endpoints:**
```
POST /api/patients                     # Tạo hồ sơ bệnh nhân
GET  /api/patients/:id                 # Chi tiết bệnh nhân
PUT  /api/patients/:id                 # Cập nhật hồ sơ
GET  /api/patients/:id/appointments    # Lịch hẹn của bệnh nhân
GET  /api/patients/:id/medical-records # Hồ sơ y tế
```

**Patient data:**
```json
{
  "user_id": 1,
  "date_of_birth": "1990-05-15",
  "gender": "male",
  "national_id": "123456789",
  "insurance_number": "BHYT001",
  "insurance_provider": "BHXH Việt Nam",
  "address": "123 Đường A, Thành phố B",
  "phone": "0912345678",
  "emergency_contact": "Nguyễn Văn C",
  "emergency_phone": "0987654321"
}
```

---

## 🎯 PHASE 4: USER & ORGANIZATION (Tuần 7)

### 4.1 Users API

**Endpoints:**
```
POST /api/auth/register                # Đăng ký tài khoản
POST /api/auth/login                   # Đăng nhập
POST /api/auth/logout                  # Đăng xuất
GET  /api/profile                      # Lấy thông tin user
PUT  /api/profile                      # Cập nhật thông tin
POST /api/auth/change-password         # Đổi mật khẩu
POST /api/auth/forgot-password         # Quên mật khẩu
POST /api/auth/reset-password          # Đặt lại mật khẩu
GET  /api/users                        # Danh sách user (admin)
GET  /api/users/:id                    # Chi tiết user
```

**Login request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login response:**
```json
{
  "access_token": "eyJhbGc...",
  "refresh_token": "eyJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "full_name": "Nguyễn Văn A",
    "role": "patient",
    "avatar_url": "https://..."
  }
}
```

---

### 4.2 Organization API

**Endpoints:**
```
GET  /api/organization/structure       # Cơ cấu tổ chức
GET  /api/organization/members         # Danh sách nhân viên
GET  /api/organization/members/:id     # Chi tiết nhân viên
```

**Organization data:**
```json
{
  "director": {
    "id": 1,
    "name": "Nguyễn Văn A",
    "position": "Giám đốc",
    "image_url": "https://...",
    "bio": "..."
  },
  "vice_directors": [
    {
      "id": 2,
      "name": "Trần Thị B",
      "position": "Phó Giám đốc",
      "image_url": "https://..."
    }
  ],
  "additional_directors": [...]
}
```

---

## 🎯 PHASE 5: ADVANCED FEATURES (Tuần 8)

### 5.1 File Upload API

**Endpoints:**
```
POST /api/upload                       # Upload hình ảnh/file
GET  /api/upload/:id                   # Lấy file
DELETE /api/upload/:id                 # Xóa file
POST /api/upload/bulk                  # Upload nhiều file
```

**Upload handling:**
- [ ] Validate file type (jpg, png, gif, pdf)
- [ ] Validate file size (< 10MB)
- [ ] Create thumbnails
- [ ] Store on cloud (S3) hoặc local
- [ ] Generate secure URLs
- [ ] Cleanup old files

---

### 5.2 Search & Analytics

**Endpoints:**
```
GET  /api/search?q=keyword             # Tìm kiếm toàn cục
GET  /api/articles/:id/view            # Track view
GET  /api/dashboard/stats              # Thống kê
```

---

### 5.3 Contact & Messages

**Endpoints:**
```
POST /api/contact                      # Gửi tin nhắn liên hệ
GET  /api/contact/messages             # Danh sách tin nhắn (admin)
PUT  /api/contact/messages/:id         # Trả lời tin nhắn
```

---

## 📋 API SPECIFICATION DETAIL

### Common Response Format

**Success Response:**
```json
{
  "success": true,
  "data": {...},
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_INPUT",
    "message": "Email is required",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email"
      }
    ]
  }
}
```

### Pagination
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Filtering & Sorting
```
GET /api/articles?
  page=1&
  limit=10&
  category=world-medical&
  module=tintuc&
  tags=y-hoc,thế-giới&
  search=vaccine&
  sortBy=published_at&
  sortOrder=desc
```

---

## 🔐 SECURITY REQUIREMENTS

### Authentication
- [ ] JWT tokens (access + refresh)
- [ ] Token expiration (access: 1h, refresh: 7d)
- [ ] Secure password hashing (bcrypt)
- [ ] Email verification
- [ ] Two-factor authentication (future)

### Authorization
- [ ] Role-based access control (RBAC)
  - admin: Full access
  - editor: Can CRUD articles
  - doctor: View appointments, medical records
  - patient: View own appointments, medical records
  - guest: View-only access

### Security Headers
```
- CORS policy
- CSRF protection
- XSS protection
- Rate limiting
- Input validation
- SQL injection prevention
- File upload validation
```

---

## 📊 DATABASE INITIALIZATION DATA

### Categories (article_categories)
```sql
INSERT INTO article_categories (name, slug, icon) VALUES
('Tin tức y học thế giới', 'world-medical', '🌍'),
('Tin tức y học trong nước', 'domestic-medical', '⭐'),
('Tin tức hoạt động bệnh viện', 'hospital-activities', '🏥'),
('Bài viết chuyên môn', 'professional-articles', '📚'),
('Sự kiện', 'events', '🎉'),
('Công tác Đảng', 'party-work', '🤝'),
('Chính trị', 'politics', '🏆'),
('Đoàn thanh niên', 'youth-union', '👥');
```

### Modules (modules)
```sql
INSERT INTO modules (name, slug, icon) VALUES
('Tin tức & Sự kiện', 'tintuc', '📰'),
('Công tác Đảng - Chính trị', 'partypolitics', '🏛️'),
('Nghiên cứu - Hợp tác', 'hoptac', '🔬');
```

### Departments (departments)
```sql
INSERT INTO departments (name, slug, specialties) VALUES
('Nội tổng hợp', 'noi-tong-hop', 'Chẩn đoán và điều trị các bệnh nội khoa'),
('Ngoại tổng hợp', 'ngoai-tong-hop', 'Phẫu thuật tổng quát'),
('Tai mũi họng', 'tai-mui-hong', 'Chuyên khoa Tai Mũi Họng'),
('Răng hàm mặt', 'rang-ham-mat', 'Chuyên khoa Nha khoa'),
('Mắt', 'mat', 'Chuyên khoa Mắt'),
('Nhiệt đới', 'nhiet-doi', 'Chuyên khoa Nhiệt đới'),
('Ung bướu', 'ung-buou', 'Chuyên khoa Ung bướu'),
('Nhi', 'nhi', 'Chuyên khoa Nhi'),
('Bỏng', 'bong', 'Chuyên khoa Bỏng'),
('Tâm thần kinh', 'tam-than-kinh', 'Chuyên khoa Tâm thần kinh'),
('Đái tháo đường', 'dai-thao-duong', 'Chuyên khoa Đái tháo đường'),
('Tim mạch', 'tim-mach', 'Chuyên khoa Tim mạch');
```

---

## 🧪 TESTING CHECKLIST

### Unit Tests
- [ ] Authentication functions
- [ ] Data validation
- [ ] Service methods
- [ ] Utility functions

### Integration Tests
- [ ] API endpoints
- [ ] Database operations
- [ ] Error handling
- [ ] Authorization

### Load Tests
- [ ] API performance
- [ ] Database queries
- [ ] Concurrent users
- [ ] File uploads

---

## 📈 DEPLOYMENT CHECKLIST

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Seed data loaded
- [ ] Tests passing
- [ ] API documentation complete
- [ ] Error logging setup
- [ ] Performance monitoring setup
- [ ] Backup strategy in place
- [ ] SSL/HTTPS enabled
- [ ] CORS configured correctly
- [ ] Rate limiting enabled
- [ ] Security headers configured

---

## 🔗 INTEGRATION POINTS WITH FRONTEND

### Current Frontend Expectations:

1. **Articles List** (`/news-events`)
   - GET `/api/articles?page=1&limit=8&module=tintuc`
   - Expected response: Array of articles with image_url, title, excerpt, author, views, date

2. **Article Detail** (`/news-events/:slug`)
   - GET `/api/articles/slug/{slug}`
   - Expected response: Full article with content, author, views, tags, related articles

3. **Appointments** (`/book-appointment`)
   - POST `/api/appointments`
   - GET `/api/departments`
   - GET `/api/departments/:id/doctors`
   - GET `/api/appointments/available-slots`

4. **Organization** (`/organization`)
   - GET `/api/organization/structure`
   - Expected response: Director, vice directors, additional directors with images

5. **Services** (Home page)
   - GET `/api/services` (optional, currently hardcoded)

---

## 💡 IMPLEMENTATION TIPS

1. **Start with Articles** - Frontend heavily depends on this
2. **Use Pagination** - Frontend already implements pagination component
3. **Generate Slugs** - Auto-generate from title, make it unique
4. **Image Handling** - Support both URL strings and file uploads
5. **Timestamps** - Always use ISO 8601 format for dates
6. **Error Messages** - Return consistent error format
7. **Validation** - Validate on both backend and frontend
8. **Caching** - Cache articles, departments, doctors (they change rarely)
9. **Search** - Implement full-text search for articles
10. **Notifications** - Send email on appointment confirmation

---

## 📞 CONTACT ENDPOINTS (Lower Priority)

```
POST /api/contact                      # Gửi tin nhắn
GET  /api/hotline                      # Thông tin hotline
GET  /api/faq                          # Câu hỏi thường gặp
```

---

## 📌 NOTES FOR DEVELOPER

1. **Frontend is ready** - All UI components are done, waiting for API
2. **Data structure** - Follow JSON structure in comments above
3. **Error handling** - Return proper HTTP status codes
4. **Logging** - Log all API calls and errors
5. **Testing** - Write tests as you code
6. **Documentation** - Update Swagger/OpenAPI docs
7. **Versioning** - Consider API versioning (/api/v1/)
8. **Monitoring** - Setup error tracking (Sentry, LogRocket)

---

## 🎯 SUCCESS CRITERIA

✅ All GET endpoints working
✅ All POST/PUT/DELETE endpoints working
✅ Pagination working
✅ Filtering working
✅ Search working
✅ Authentication working
✅ Authorization working
✅ File uploads working
✅ Email notifications sending
✅ Error handling comprehensive
✅ Performance acceptable (< 500ms)
✅ Security measures in place
✅ Fully documented
    