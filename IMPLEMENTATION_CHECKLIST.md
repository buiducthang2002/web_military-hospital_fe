# ✅ BACKEND IMPLEMENTATION CHECKLIST

> Sử dụng checklist này để theo dõi tiến độ phát triển backend

---

## 📋 PHASE 1: FOUNDATION & SETUP

### Environment & Project Setup
- [ ] Create backend repository
- [ ] Initialize Node.js project (`npm init`)
- [ ] Install dependencies (express, cors, dotenv, prisma, etc.)
- [ ] Setup TypeScript configuration
- [ ] Create folder structure
- [ ] Setup .env file with required variables
- [ ] Create .gitignore

### Database Setup
- [ ] Create PostgreSQL database
- [ ] Initialize Prisma (`npx prisma init`)
- [ ] Create complete `schema.prisma` file
- [ ] Run migrations (`npx prisma migrate dev`)
- [ ] Verify database tables created
- [ ] Seed initial data (admin user, categories, modules, departments)

### Authentication System
- [ ] Create User model in database
- [ ] Implement password hashing with bcryptjs
- [ ] Create JWT token generation
- [ ] Implement JWT token verification
- [ ] Create Login endpoint
- [ ] Create Register endpoint
- [ ] Create Token Refresh endpoint
- [ ] Implement Auth middleware
- [ ] Test auth flow with Postman/curl

### Server Setup
- [ ] Create main Express server file
- [ ] Setup CORS middleware
- [ ] Setup JSON parsing middleware
- [ ] Create error handling middleware
- [ ] Create 404 handler
- [ ] Add request logging
- [ ] Test server startup

**Estimated Time: 10-12 hours**

---

## 📰 PHASE 2: ARTICLES & NEWS API

### Database Models
- [ ] Create Article model
- [ ] Create ArticleCategory model
- [ ] Create Module model
- [ ] Create Tag model
- [ ] Create article_tags junction table
- [ ] Add indexes for performance
- [ ] Seed sample articles

### Article Endpoints - GET
- [ ] GET `/api/articles` - List with pagination
- [ ] GET `/api/articles/:id` - Get by ID
- [ ] GET `/api/articles/slug/:slug` - Get by slug
- [ ] GET `/api/articles?category=X` - Filter by category
- [ ] GET `/api/articles?module=X` - Filter by module
- [ ] GET `/api/articles?tags=X,Y` - Filter by tags
- [ ] GET `/api/articles?search=keyword` - Full-text search
- [ ] GET `/api/articles/featured` - Get featured articles
- [ ] Implement view counting on article access

### Article Endpoints - Admin
- [ ] POST `/api/articles` - Create article (admin)
- [ ] PUT `/api/articles/:id` - Update article (admin)
- [ ] DELETE `/api/articles/:id` - Delete article (admin)
- [ ] Implement soft delete (deleted_at field)

### Category & Module Endpoints
- [ ] GET `/api/article-categories` - List categories
- [ ] GET `/api/modules` - List modules
- [ ] GET `/api/modules/:id/categories` - Categories of module
- [ ] POST `/api/article-categories` - Create category (admin)
- [ ] PUT `/api/article-categories/:id` - Update category (admin)

### Article Features
- [ ] Slug auto-generation from title
- [ ] Slug validation (unique, lowercase)
- [ ] Pagination implementation (page, limit, offset)
- [ ] Sorting (latest, popular, views)
- [ ] Response format standardization
- [ ] Error handling for invalid inputs

### Testing
- [ ] Test all GET endpoints with Postman
- [ ] Test pagination with various page/limit values
- [ ] Test filtering by category/module/tags
- [ ] Test search functionality
- [ ] Test article detail endpoint
- [ ] Test admin CRUD operations
- [ ] Test slug generation

**Estimated Time: 12-14 hours**

---

## 🏥 PHASE 3: DEPARTMENTS & DOCTORS API

### Database Models
- [ ] Create Department model
- [ ] Create Doctor model with userId reference
- [ ] Create relationship between Doctor and Department
- [ ] Seed sample departments
- [ ] Seed sample doctors

### Department Endpoints
- [ ] GET `/api/departments` - List all departments
- [ ] GET `/api/departments/:id` - Get department details
- [ ] GET `/api/departments/:id/doctors` - Get doctors in department
- [ ] POST `/api/departments` - Create department (admin)
- [ ] PUT `/api/departments/:id` - Update department (admin)
- [ ] DELETE `/api/departments/:id` - Delete department (admin)

### Doctor Endpoints
- [ ] GET `/api/doctors` - List all doctors
- [ ] GET `/api/doctors/:id` - Get doctor details
- [ ] GET `/api/doctors?department=X` - Filter by department
- [ ] POST `/api/doctors` - Create doctor (admin)
- [ ] PUT `/api/doctors/:id` - Update doctor (admin)
- [ ] DELETE `/api/doctors/:id` - Delete doctor (admin)

### Data Structure
- [ ] Return proper JSON with nested relationships
- [ ] Include doctor count in department response
- [ ] Include department info in doctor response
- [ ] Handle image URLs properly
- [ ] Include specialization and experience in doctor data

### Testing
- [ ] Test all department endpoints
- [ ] Test all doctor endpoints
- [ ] Test filtering by department
- [ ] Test nested relationships in response
- [ ] Test sorting (by name, experience)

**Estimated Time: 8-10 hours**

---

## 📅 PHASE 4: APPOINTMENTS API

### Database Models
- [ ] Create Patient model (extend User)
- [ ] Create Appointment model
- [ ] Create MedicalRecord model
- [ ] Define appointment status enum
- [ ] Define time slot enum
- [ ] Add indexes for appointment queries

### Patient Endpoints
- [ ] POST `/api/patients` - Create patient profile
- [ ] GET `/api/patients/:id` - Get patient details
- [ ] PUT `/api/patients/:id` - Update patient profile
- [ ] GET `/api/patients/:id/appointments` - Get patient's appointments
- [ ] GET `/api/patients/:id/medical-records` - Get patient's records

### Appointment Endpoints - Book
- [ ] POST `/api/appointments` - Create appointment
- [ ] Validate appointment date (must be future)
- [ ] Validate time slot
- [ ] Validate patient and department exist
- [ ] Check doctor availability
- [ ] Generate confirmation number
- [ ] Send confirmation email
- [ ] Return confirmation details

### Appointment Endpoints - Query
- [ ] GET `/api/appointments` - List user's appointments (auth)
- [ ] GET `/api/appointments/:id` - Get appointment details
- [ ] GET `/api/appointments/available-slots` - Check availability
- [ ] GET `/api/appointments?status=pending` - Filter by status
- [ ] GET `/api/appointments?date=YYYY-MM-DD` - Filter by date

### Appointment Endpoints - Manage
- [ ] PUT `/api/appointments/:id` - Update appointment (admin/user)
- [ ] PUT `/api/appointments/:id/cancel` - Cancel appointment
- [ ] PUT `/api/appointments/:id/confirm` - Confirm appointment (admin)
- [ ] POST `/api/appointments/:id/medical-record` - Add medical record

### Availability System
- [ ] Check doctor's existing appointments
- [ ] Define slot limits (e.g., 10 slots per day)
- [ ] Prevent double-booking
- [ ] Return available slots for selected date/doctor
- [ ] Support multiple time slots per day

### Email System
- [ ] Setup email service (nodemailer or similar)
- [ ] Create appointment confirmation email template
- [ ] Send email on appointment creation
- [ ] Send email on appointment cancellation
- [ ] Include confirmation number and details

### Testing
- [ ] Test appointment booking with valid data
- [ ] Test rejection of past dates
- [ ] Test double-booking prevention
- [ ] Test available slots endpoint
- [ ] Test email sending
- [ ] Test appointment cancellation
- [ ] Test user can only see their own appointments

**Estimated Time: 14-16 hours**

---

## 👥 PHASE 5: USER MANAGEMENT & AUTHORIZATION

### User Model Enhancement
- [ ] Define user roles (admin, editor, doctor, patient)
- [ ] Add role field to User model
- [ ] Add is_active field
- [ ] Add last_login timestamp

### Login & Registration
- [ ] POST `/api/auth/register` - User registration
- [ ] Validate email format
- [ ] Validate password strength
- [ ] Check email uniqueness
- [ ] Hash password before storing
- [ ] Send verification email
- [ ] Implement email verification

### Login
- [ ] POST `/api/auth/login` - User login
- [ ] Validate email/password
- [ ] Generate access token (1h expiry)
- [ ] Generate refresh token (7d expiry)
- [ ] Return tokens and user info
- [ ] Update last_login timestamp

### Token Management
- [ ] POST `/api/auth/refresh-token` - Refresh access token
- [ ] Validate refresh token
- [ ] Generate new access token
- [ ] Handle expired tokens
- [ ] POST `/api/auth/logout` - Logout (optional)

### Password Management
- [ ] POST `/api/auth/forgot-password` - Request password reset
- [ ] Generate reset token
- [ ] Send reset email with token
- [ ] POST `/api/auth/reset-password` - Reset password
- [ ] Validate reset token
- [ ] Update password
- [ ] Invalidate all refresh tokens

### User Profile
- [ ] GET `/api/profile` - Get current user profile (auth)
- [ ] PUT `/api/profile` - Update profile (auth)
- [ ] PUT `/api/profile/change-password` - Change password (auth)
- [ ] GET `/api/profile/appointments` - User's appointments (auth)

### Admin User Management
- [ ] GET `/api/users` - List all users (admin)
- [ ] GET `/api/users/:id` - Get user details (admin)
- [ ] PUT `/api/users/:id` - Update user (admin)
- [ ] PUT `/api/users/:id/role` - Change user role (admin)
- [ ] DELETE `/api/users/:id` - Delete user (admin)

### Role-Based Access Control
- [ ] Implement role checking in middleware
- [ ] Protect admin endpoints
- [ ] Protect user-specific endpoints
- [ ] Implement role-based data filtering
- [ ] Test each role's permissions

### Testing
- [ ] Test user registration with valid data
- [ ] Test registration validation (email, password)
- [ ] Test duplicate email prevention
- [ ] Test login with correct credentials
- [ ] Test login rejection with wrong password
- [ ] Test token refresh
- [ ] Test password reset flow
- [ ] Test role-based access control

**Estimated Time: 12-14 hours**

---

## 🏢 PHASE 6: ORGANIZATION & CONTACTS

### Organization Structure
- [ ] Create OrganizationMember model
- [ ] Add director/vice-director flags
- [ ] Create sample organization data
- [ ] GET `/api/organization/structure` - Get org chart
- [ ] GET `/api/organization/members` - List all members
- [ ] GET `/api/organization/members/:id` - Member details
- [ ] POST `/api/organization/members` - Create (admin)
- [ ] PUT `/api/organization/members/:id` - Update (admin)
- [ ] DELETE `/api/organization/members/:id` - Delete (admin)

### Contact Messages
- [ ] Create ContactMessage model
- [ ] POST `/api/contact` - Submit contact form
- [ ] Validate form data
- [ ] Send confirmation email to user
- [ ] Send notification to admin
- [ ] GET `/api/contact/messages` - List messages (admin)
- [ ] PUT `/api/contact/messages/:id` - Respond to message (admin)
- [ ] Update message status

### File Upload
- [ ] Implement file upload endpoint
- [ ] POST `/api/upload` - Upload file/image
- [ ] Validate file type (jpg, png, pdf)
- [ ] Validate file size (< 10MB)
- [ ] Store file securely
- [ ] Generate download URL
- [ ] DELETE `/api/upload/:id` - Delete file (admin)

**Estimated Time: 8-10 hours**

---

## 🧪 PHASE 7: TESTING & QUALITY

### Unit Tests
- [ ] Test auth service (hash, verify, tokens)
- [ ] Test article service (CRUD, slug generation)
- [ ] Test appointment service (validation, availability)
- [ ] Test user service (registration, password reset)
- [ ] Aim for 80%+ code coverage

### Integration Tests
- [ ] Test complete auth flow (register → login → token refresh)
- [ ] Test article CRUD workflow
- [ ] Test appointment booking workflow
- [ ] Test user role enforcement
- [ ] Test email sending

### API Testing
- [ ] Test all endpoints with Postman collection
- [ ] Test pagination and filtering
- [ ] Test error responses
- [ ] Test validation messages
- [ ] Test edge cases

### Performance Testing
- [ ] Load test with Apache Bench or k6
- [ ] Measure API response times
- [ ] Identify bottlenecks
- [ ] Optimize database queries
- [ ] Add caching where needed

### Security Testing
- [ ] Test SQL injection prevention
- [ ] Test XSS prevention
- [ ] Test CSRF protection
- [ ] Test authentication bypass attempts
- [ ] Test authorization bypass attempts
- [ ] Validate CORS configuration

### Documentation
- [ ] Create OpenAPI/Swagger docs
- [ ] Document all endpoints
- [ ] Provide example requests/responses
- [ ] Document authentication flow
- [ ] Create README for setup

**Estimated Time: 10-12 hours**

---

## 🚀 PHASE 8: DEPLOYMENT

### Docker Setup
- [ ] Create Dockerfile
- [ ] Create docker-compose.yml
- [ ] Setup PostgreSQL container
- [ ] Setup backend container
- [ ] Test locally with Docker

### Environment Configuration
- [ ] Configure production environment variables
- [ ] Setup database backup strategy
- [ ] Configure error logging
- [ ] Setup performance monitoring
- [ ] Configure email service for production

### Deployment
- [ ] Choose hosting (AWS, Heroku, DigitalOcean)
- [ ] Setup database on server
- [ ] Deploy backend service
- [ ] Configure SSL/HTTPS
- [ ] Setup domain and DNS
- [ ] Configure CORS for production domain
- [ ] Test all endpoints in production

### Monitoring & Maintenance
- [ ] Setup error tracking (Sentry)
- [ ] Setup performance monitoring
- [ ] Setup logs aggregation
- [ ] Create alerting rules
- [ ] Create backup strategy
- [ ] Create rollback procedure

**Estimated Time: 8-10 hours**

---

## 📊 SUMMARY

| Phase | Task | Hours | Status |
|-------|------|-------|--------|
| 1 | Foundation & Setup | 10-12 | ⬜ |
| 2 | Articles API | 12-14 | ⬜ |
| 3 | Departments & Doctors | 8-10 | ⬜ |
| 4 | Appointments | 14-16 | ⬜ |
| 5 | User Management | 12-14 | ⬜ |
| 6 | Organization & Contacts | 8-10 | ⬜ |
| 7 | Testing & Quality | 10-12 | ⬜ |
| 8 | Deployment | 8-10 | ⬜ |
| **TOTAL** | | **82-98** | |

**Estimated: 2-2.5 weeks at 8h/day**

---

## 🎯 DEPENDENCIES BETWEEN PHASES

```
Phase 1 (Foundation) ✓
    ↓
Phase 2 (Articles) ✓
    ↓
Phase 3 (Departments) ✓
    ↓
Phase 4 (Appointments) - Needs Phase 1, 3, 5
    ↓
Phase 5 (Users) - Needs Phase 1
    ↓
Phase 6 (Organization) - Standalone
    ↓
Phase 7 (Testing) - Can run in parallel
    ↓
Phase 8 (Deployment) - Final step
```

**Optimal Parallel Execution:**
- Phase 1, 2, 3 sequentially (foundational)
- Phase 5 can start during Phase 2-3
- Phase 4 after Phase 5
- Phase 6 anytime
- Phase 7 during development
- Phase 8 at the end

---

## ✨ SUCCESS METRICS

After completing all phases:

✅ 100% of frontend pages functional  
✅ 50+ API endpoints implemented  
✅ Articles from database (not JSON)  
✅ User authentication working  
✅ Appointment booking functional  
✅ 80%+ test coverage  
✅ API response time < 500ms  
✅ 0 critical security issues  
✅ Complete API documentation  
✅ Deployed and accessible  

---

## 📞 QUICK REFERENCE

**Current Status:** Frontend complete, backend not started
**Est. Development Time:** 2-2.5 weeks
**Team Size:** 1-2 developers recommended
**Tech Stack:** Node.js + Express + PostgreSQL + Prisma
**Next Step:** Start Phase 1 - Foundation & Setup

---

Use this checklist to track progress and ensure nothing is missed! 🎉
