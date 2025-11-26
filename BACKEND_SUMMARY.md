# 📚 BACKEND IMPLEMENTATION SUMMARY

> Tóm tắt đầy đủ những gì backend cần làm để website Bệnh viện Quân y 4 hoạt động

---

## 🎯 EXECUTIVE SUMMARY

Website Bệnh viện Quân y 4 hiện là **Frontend-only** (React). Để hoạt động đầy đủ, cần xây dựng **Backend API** hỗ trợ 5 chức năng chính:

1. **📰 Quản lý Tin tức** - Display news/articles từ database
2. **👨‍⚕️ Quản lý Bác sĩ & Khoa** - List departments & doctors
3. **📅 Quản lý Lịch hẹn** - Book appointments
4. **👤 Quản lý Người dùng** - Login/Register
5. **🔒 Bảo mật** - Authentication & Authorization

---

## 🏗️ TECHNOLOGY STACK (RECOMMENDED)

```
Backend Framework:  Node.js + Express (hoặc NestJS)
Database:           PostgreSQL
ORM:                Prisma (type-safe, modern)
Authentication:     JWT + bcrypt
File Storage:       AWS S3 hoặc local storage
Deployment:         Docker + AWS/Heroku
```

**Tại sao?**
- ✅ Node.js: JavaScript, dễ học, community lớn
- ✅ Express: Lightweight, flexible, widespread
- ✅ PostgreSQL: Robust, scalable, free
- ✅ Prisma: Type-safe, auto-migration, great DX
- ✅ JWT: Stateless, scalable auth

---

## 📋 WHAT BACKEND NEEDS TO DO

### 1️⃣ ARTICLES/NEWS API

**Current Frontend Structure:**
```
/modules/tintuc/              # News & Events
/modules/partypolitics/       # Party Politics
/modules/hoptac/              # Cooperation & Research
```

**Backend Responsibility:**
- ✅ Store articles in database
- ✅ Provide GET endpoints for listing/filtering
- ✅ Support pagination (page, limit)
- ✅ Filter by category, module, tags
- ✅ Full-text search
- ✅ Track view count
- ✅ Create/Update/Delete articles (admin only)

**Required Endpoints:**
```
GET    /api/articles                    List all articles
GET    /api/articles?page=1&limit=10   With pagination
GET    /api/articles?category=world-medical  Filter by category
GET    /api/articles?module=tintuc     Filter by module
GET    /api/articles?search=vaccine    Search articles
GET    /api/articles/:id               Get single article
GET    /api/articles/slug/:slug        Get by slug (important!)
GET    /api/articles/featured          Get featured articles
POST   /api/articles                   Create (admin)
PUT    /api/articles/:id               Update (admin)
DELETE /api/articles/:id               Delete (admin)
```

**Data Structure:**
```json
{
  "id": 1,
  "title": "10 năm chuyển giao kỹ thuật...",
  "slug": "tin-tuc-y-hoc-the-gioi-1",
  "excerpt": "Ngày 15/11/2025...",
  "content": "Nội dung đầy đủ bài viết...",
  "image": "https://example.com/image.jpg",
  "views": 150,
  "categoryId": 1,
  "moduleId": 1,
  "authorId": 1,
  "author": {
    "id": 1,
    "name": "Admin",
    "email": "admin@example.com"
  },
  "tags": ["y-học", "thế-giới"],
  "status": "published",
  "publishedAt": "2025-04-11T00:00:00Z",
  "createdAt": "2025-04-11T00:00:00Z"
}
```

---

### 2️⃣ DEPARTMENTS & DOCTORS API

**Current Frontend:**
```
/Khamchuabenh/        # Medical examination page
/Services/            # Lists 4 services + department info
```

**Backend Responsibility:**
- ✅ Store departments info
- ✅ Store doctors info
- ✅ Link doctors to departments
- ✅ Provide GET endpoints

**Required Endpoints:**
```
GET    /api/departments              List all departments
GET    /api/departments/:id          Get single department
GET    /api/departments/:id/doctors  Get doctors in department
GET    /api/doctors                  List all doctors
GET    /api/doctors/:id              Get single doctor
GET    /api/doctors?department=1     Filter by department
POST   /api/departments              Create (admin)
PUT    /api/departments/:id          Update (admin)
POST   /api/doctors                  Create (admin)
PUT    /api/doctors/:id              Update (admin)
```

**Data Structure:**
```json
{
  "departments": [
    {
      "id": 1,
      "name": "Nội tổng hợp",
      "slug": "noi-tong-hop",
      "description": "Chẩn đoán và điều trị các bệnh nội khoa",
      "specialties": "Chuyên ngành nội",
      "phone": "0974-225-225",
      "email": "noi@example.com",
      "image": "https://...",
      "doctors": [
        {
          "id": 1,
          "name": "Dr. Nguyễn Văn A",
          "specialization": "Chuyên khoa nội",
          "experienceYears": 10,
          "bio": "Tốt nghiệp...",
          "image": "https://...",
          "phone": "0912-345-678"
        }
      ]
    }
  ]
}
```

---

### 3️⃣ APPOINTMENTS (LỊCH HẸN) API

**Current Frontend:**
```
/book-appointment              Form to book appointment
/Dangkykhamchuabenh/          Appointment registration pages
```

**Backend Responsibility:**
- ✅ Store appointment bookings
- ✅ Validate appointment dates (must be future)
- ✅ Check doctor availability
- ✅ Generate confirmation numbers
- ✅ Send confirmation emails
- ✅ Manage appointment status (pending, confirmed, completed, cancelled)

**Required Endpoints:**
```
POST   /api/appointments                    Create appointment
GET    /api/appointments                    List user's appointments (auth)
GET    /api/appointments/:id                Get appointment details
PUT    /api/appointments/:id                Update appointment (admin)
DELETE /api/appointments/:id                Cancel appointment
GET    /api/appointments/available-slots   Check available time slots
GET    /api/appointments/confirm/:token    Confirm appointment via email link
```

**Request Structure:**
```json
{
  "patientId": 1,
  "departmentId": 2,
  "doctorId": 5,
  "appointmentDate": "2025-12-15",
  "timeSlot": "morning",
  "healthIssue": "Đau đầu, sốt",
  "notes": "Có dị ứng với penicillin"
}
```

**Response:**
```json
{
  "id": 101,
  "patientId": 1,
  "doctorId": 5,
  "departmentId": 2,
  "appointmentDate": "2025-12-15",
  "timeSlot": "morning",
  "status": "pending",
  "confirmationNumber": "APPT-20251215-001",
  "createdAt": "2025-11-25T10:30:00Z"
}
```

---

### 4️⃣ AUTHENTICATION & USER MANAGEMENT

**Current Frontend:**
```
Currently has NO login system
Needs to add: Login, Register, User Profile
```

**Backend Responsibility:**
- ✅ User registration with email verification
- ✅ User login with JWT tokens
- ✅ Password hashing with bcrypt
- ✅ Token refresh mechanism
- ✅ Password reset flow
- ✅ User roles (admin, editor, doctor, patient)
- ✅ Access control based on roles

**Required Endpoints:**
```
POST   /api/auth/register               Register new user
POST   /api/auth/login                  Login
POST   /api/auth/logout                 Logout
POST   /api/auth/refresh-token          Get new access token
POST   /api/auth/forgot-password        Request password reset
POST   /api/auth/reset-password         Reset password with token
GET    /api/profile                     Get user profile (auth)
PUT    /api/profile                     Update profile (auth)
PUT    /api/profile/change-password     Change password (auth)
GET    /api/users                       List users (admin)
GET    /api/users/:id                   Get user (admin)
PUT    /api/users/:id                   Update user (admin)
```

**Register Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "fullName": "Nguyễn Văn A",
  "role": "patient"
}
```

**Login Request:**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Login Response:**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "fullName": "Nguyễn Văn A",
      "role": "patient",
      "avatar": "https://..."
    }
  }
}
```

---

### 5️⃣ ORGANIZATION & ADMINISTRATION

**Current Frontend:**
```
/organization              Shows hospital structure
/Sections/Organization/    Hardcoded director info
```

**Backend Responsibility:**
- ✅ Store organization hierarchy
- ✅ Store leadership positions
- ✅ Store member info with images

**Required Endpoints:**
```
GET    /api/organization/structure      Get org chart
GET    /api/organization/members        Get all members
GET    /api/organization/members/:id    Get member details
POST   /api/organization/members        Create member (admin)
PUT    /api/organization/members/:id    Update member (admin)
DELETE /api/organization/members/:id    Delete member (admin)
```

---

## 📊 DATABASE SCHEMA (SIMPLIFIED)

```sql
-- Users
users (id, email, password, fullName, role, createdAt)

-- Articles
articles (id, title, slug, content, image, moduleId, categoryId, authorId, views, status, createdAt)
article_categories (id, name, slug)
modules (id, name, slug)
tags (id, name)
article_tags (articleId, tagId)

-- Departments & Doctors
departments (id, name, slug, description, phone, image)
doctors (id, userId, departmentId, specialization, experienceYears, image)

-- Patients & Appointments
patients (id, userId, dateOfBirth, nationalId, insuranceNumber)
appointments (id, patientId, doctorId, departmentId, appointmentDate, timeSlot, status)
medical_records (id, patientId, appointmentId, diagnosis, treatmentPlan)

-- Organization
organization_members (id, name, position, image, department)

-- Contact
contact_messages (id, name, email, message, status, createdAt)
```

---

## 🎯 IMPLEMENTATION PHASES

### Phase 1: Foundation (Week 1-2) ⭐ CRITICAL
- [ ] Setup Node.js + Express + Prisma
- [ ] Setup PostgreSQL database
- [ ] Create database schema
- [ ] Implement auth system (register, login)
- [ ] Setup JWT middleware

**Estimated: 8-10 hours**

### Phase 2: Core APIs (Week 2-3) ⭐ CRITICAL
- [ ] Articles API (GET list, detail, by slug)
- [ ] Categories & Modules API
- [ ] Departments & Doctors API
- [ ] View counting
- [ ] Pagination & filtering

**Estimated: 10-12 hours**

### Phase 3: Appointments (Week 3-4)
- [ ] Appointments booking
- [ ] Availability checking
- [ ] Confirmation emails
- [ ] Patient profile management

**Estimated: 8-10 hours**

### Phase 4: Admin Panel & Polish (Week 4-5)
- [ ] Articles CRUD (create, update, delete)
- [ ] User management
- [ ] Organization structure
- [ ] File uploads
- [ ] Error handling & validation

**Estimated: 12-15 hours**

### Phase 5: Testing & Deployment (Week 5-6)
- [ ] Unit tests
- [ ] Integration tests
- [ ] Performance optimization
- [ ] Setup Docker
- [ ] Deploy to production

**Estimated: 10-12 hours**

**Total: ~50-60 hours (1.5 weeks if 8h/day)**

---

## ✅ SUCCESS CRITERIA

Website will be considered "complete" when:

1. ✅ All 5 article modules display from database (not hardcoded JSON)
2. ✅ Users can search/filter articles by category, module, tags
3. ✅ Users can view article details with proper metadata
4. ✅ Users can login/register with credentials
5. ✅ Authenticated users can book appointments
6. ✅ Department and doctor info displays from database
7. ✅ Appointment confirmation sends via email
8. ✅ All data is properly validated and error handled
9. ✅ API is documented (Swagger/OpenAPI)
10. ✅ System is deployed and accessible online

---

## 🔗 RELATIONSHIP DIAGRAM

```
User (1) ──┬─→ (N) Articles (as author)
           ├─→ (1) Doctor profile
           └─→ (1) Patient profile

Article (N) ──┬─→ (1) Category
              ├─→ (1) Module
              ├─→ (N) Tags
              └─→ (1) User (author)

Department (1) ──→ (N) Doctors
               ──→ (N) Appointments

Doctor (1) ──→ (N) Appointments
          └─→ (N) Medical Records

Patient (1) ──→ (N) Appointments
           └─→ (N) Medical Records

Appointment (1) ──→ (1) Medical Record
              ├─→ (1) Patient
              ├─→ (1) Doctor
              └─→ (1) Department
```

---

## 💡 KEY IMPLEMENTATION TIPS

1. **Start with Articles** - Frontend heavily depends on this
   - Most critical for demo & user engagement
   - Relatively simple CRUD operations

2. **Use Slugs for URLs** - Frontend uses `/news-events/:slug`
   - Must auto-generate slug from title
   - Keep it unique and URL-friendly

3. **Pagination is Important** - Frontend has pagination component
   - Implement offset-based: `page` & `limit`
   - Return `pagination` metadata

4. **Image Handling**
   - Store image URLs in database
   - Support both local paths and external URLs
   - Generate proper full URLs

5. **Timestamps**
   - Always use ISO 8601 format
   - Include both `createdAt` and `updatedAt`
   - Use UTC timezone

6. **Error Handling**
   - Return consistent error format
   - Include error code and message
   - Log all errors for debugging

7. **Security**
   - Hash passwords with bcrypt
   - Validate all inputs
   - Implement CORS properly
   - Rate limit endpoints

8. **Testing**
   - Test all endpoints with curl/Postman
   - Write unit tests for services
   - Write integration tests for APIs

---

## 🚀 QUICK START COMMAND

```bash
# 1. Clone/create backend repo
mkdir backend && cd backend

# 2. Init Node project
npm init -y
npm install express cors dotenv prisma @prisma/client jsonwebtoken bcryptjs

# 3. Setup Prisma
npx prisma init --datasource-provider postgresql

# 4. Update .env with database URL
# DATABASE_URL="postgresql://user:password@localhost:5432/benh_vien"

# 5. Create schema.prisma
# (See DATABASE_SCHEMA_DESIGN.md)

# 6. Run migration
npx prisma migrate dev --name init

# 7. Create main.ts with Express server
# 8. Create routes, services, controllers

# 9. Run server
npm run dev

# 10. Test
curl http://localhost:3000/api/health
```

---

## 📚 DOCUMENTATION FILES

This repo includes comprehensive documentation:

1. **BACKEND_ROADMAP.md** - Detailed phase-by-phase implementation plan
2. **BACKEND_QUICK_START.md** - Step-by-step setup guide with code examples
3. **DATABASE_SCHEMA_DESIGN.md** - Complete database schema with SQL
4. **FRONTEND_BACKEND_INTEGRATION.md** - How to connect frontend with backend

---

## 🎓 LEARNING RESOURCES

- **Express.js:** https://expressjs.com/
- **Prisma:** https://www.prisma.io/docs/
- **PostgreSQL:** https://www.postgresql.org/docs/
- **JWT:** https://jwt.io/
- **RESTful API Design:** https://restfulapi.net/

---

## 🤝 SUPPORT

For detailed information, refer to the comprehensive guides in the repo:
- Backend Roadmap
- Quick Start Guide
- Database Schema
- Integration Guide

---

**Status: Ready for Backend Development** ✅

Frontend is 100% complete and waiting for backend APIs.
Backend team can start immediately using the guidelines above.

Good luck! 🚀
