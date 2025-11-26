# 🏗️ BACKEND ARCHITECTURE DIAGRAM

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT SIDE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │              React Frontend (Port 3000)                 │  │
│  │  ✓ Home Page      ✓ Appointments      ✓ Organization   │  │
│  │  ✓ News/Articles  ✓ User Profile      ✓ Services       │  │
│  │  ✓ Doctors        ✓ Login/Register                     │  │
│  └──────────────────────────┬──────────────────────────────┘  │
│                             │                                   │
└─────────────────────────────┼───────────────────────────────────┘
                              │
                              │ HTTP/REST API
                              │ JSON over HTTPS
                              │
┌─────────────────────────────┼───────────────────────────────────┐
│                             ▼                                    │
│         ┌────────────────────────────────────────┐              │
│         │   Express.js API Server (Port 3001)    │              │
│         │         Backend Routes/Controllers     │              │
│         └────┬───────────────────────────────┬───┘              │
│              │                               │                  │
│      ┌───────▼────────┐          ┌──────────▼──────┐           │
│      │  Auth Routes   │          │  API Routes     │           │
│      │  (/api/auth)   │          │  (/api/...)     │           │
│      └────────────────┘          └─────────────────┘           │
│                                                                 │
│      ┌──────────────────────────────────────────────┐           │
│      │          Services Layer                      │           │
│      │  ┌──────────┐ ┌──────────┐ ┌────────────┐  │           │
│      │  │ArticleSvc│ │UserSvc   │ │AppointSvc  │  │           │
│      │  └──────────┘ └──────────┘ └────────────┘  │           │
│      └──────────────────────────────────────────────┘           │
│                       │                                         │
│                       ▼                                         │
│      ┌──────────────────────────────────────────────┐           │
│      │    Middleware Layer                          │           │
│      │  ┌─────────────┐ ┌──────────────────────┐   │           │
│      │  │JWT Auth Mid │ │Validation Middleware │   │           │
│      │  └─────────────┘ └──────────────────────┘   │           │
│      └──────────────────────────────────────────────┘           │
│                       │                                         │
│      SERVER SIDE      ▼                                         │
└──────────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
    ┌─────────────┐          ┌──────────────┐
    │ PostgreSQL  │          │File Storage  │
    │ Database    │          │(Local/AWS S3)│
    │             │          │              │
    │ 14 Tables   │          │Images/Docs   │
    │ Indexes     │          │              │
    └─────────────┘          └──────────────┘
```

---

## DATA FLOW DIAGRAM

### 1. Articles Flow
```
Frontend                 Backend                Database
   │                       │                       │
   │─── GET /articles ────>│                       │
   │                       │──SELECT FROM articles─>│
   │                       │<──[Article data]──────│
   │<── JSON Response ─────│                       │
   │                       │                       │
   │─ GET /articles/slug/X>│                       │
   │                       │──SELECT WHERE slug───>│
   │                       │<──[Article + views]──│
   │<── Full Article ──────│ UPDATE views++        │
```

### 2. Appointment Flow
```
Frontend                 Backend                Database
   │                       │                       │
   │─ POST /appointments ─>│ Validate             │
   │ (patient,dept,date)   │ Check availability   │
   │                       │──INSERT────────────>│
   │                       │<────[ID]────────────│
   │                       │ Generate token       │
   │                       │ Send email           │
   │<─ Confirmation ───────│                      │
```

### 3. Authentication Flow
```
Frontend              Backend              Database    Email
   │                   │                     │          │
   │─ POST /register ─>│ Hash password      │          │
   │(email,password)   │──INSERT user───────>│         │
   │                   │<────────[ID]──────────│         │
   │                   │ Generate token       │         │
   │                   │ Send verification────────────>│
   │<─ JWT + User ─────│                     │         │
```

---

## API Endpoint Tree

```
/api/
├── /auth
│   ├── POST   /register          Register new user
│   ├── POST   /login             Login
│   ├── POST   /refresh-token     Refresh access token
│   ├── POST   /forgot-password   Request password reset
│   └── POST   /reset-password    Reset password
│
├── /articles
│   ├── GET    /                  List articles (paginated)
│   ├── GET    /:id               Get article by ID
│   ├── GET    /slug/:slug        Get article by slug
│   ├── GET    /featured          Get featured articles
│   ├── POST   /                  Create article (admin)
│   ├── PUT    /:id               Update article (admin)
│   └── DELETE /:id               Delete article (admin)
│
├── /article-categories
│   ├── GET    /                  List categories
│   ├── POST   /                  Create category (admin)
│   ├── PUT    /:id               Update category (admin)
│   └── DELETE /:id               Delete category (admin)
│
├── /modules
│   ├── GET    /                  List modules
│   ├── GET    /:id/categories    Get categories of module
│   ├── POST   /                  Create module (admin)
│   ├── PUT    /:id               Update module (admin)
│   └── DELETE /:id               Delete module (admin)
│
├── /departments
│   ├── GET    /                  List departments
│   ├── GET    /:id               Get department details
│   ├── GET    /:id/doctors       Get doctors in department
│   ├── POST   /                  Create department (admin)
│   ├── PUT    /:id               Update department (admin)
│   └── DELETE /:id               Delete department (admin)
│
├── /doctors
│   ├── GET    /                  List doctors
│   ├── GET    /:id               Get doctor details
│   ├── GET    ?department=X      Filter by department
│   ├── POST   /                  Create doctor (admin)
│   ├── PUT    /:id               Update doctor (admin)
│   └── DELETE /:id               Delete doctor (admin)
│
├── /appointments
│   ├── GET    /                  List user's appointments
│   ├── GET    /:id               Get appointment details
│   ├── POST   /                  Create appointment
│   ├── PUT    /:id               Update appointment
│   ├── DELETE /:id               Cancel appointment
│   └── GET    /available-slots   Check available time slots
│
├── /patients
│   ├── POST   /                  Create patient profile
│   ├── GET    /:id               Get patient details
│   ├── PUT    /:id               Update patient profile
│   ├── GET    /:id/appointments  Get patient's appointments
│   └── GET    /:id/medical-records Get medical records
│
├── /profile
│   ├── GET    /                  Get current user profile
│   ├── PUT    /                  Update profile
│   ├── PUT    /change-password   Change password
│   └── GET    /appointments      Get user's appointments
│
├── /users (admin)
│   ├── GET    /                  List all users
│   ├── GET    /:id               Get user details
│   ├── PUT    /:id               Update user
│   └── DELETE /:id               Delete user
│
├── /organization
│   ├── GET    /structure         Get organization chart
│   ├── GET    /members           List all members
│   ├── GET    /members/:id       Get member details
│   ├── POST   /members           Create member (admin)
│   ├── PUT    /members/:id       Update member (admin)
│   └── DELETE /members/:id       Delete member (admin)
│
├── /contact
│   ├── POST   /                  Submit contact message
│   ├── GET    /messages          List messages (admin)
│   └── PUT    /messages/:id      Respond to message (admin)
│
├── /upload
│   ├── POST   /                  Upload file/image
│   ├── GET    /:id               Download file
│   ├── DELETE /:id               Delete file (admin)
│   └── POST   /bulk              Bulk upload
│
└── /health
    └── GET    /                  Check server health
```

---

## Database Schema Simplified

```
Users
├─ id (PK)
├─ email
├─ password (hashed)
├─ fullName
├─ role (admin/editor/doctor/patient)
└─ timestamps

Articles
├─ id (PK)
├─ title
├─ slug (unique)
├─ content
├─ image
├─ categoryId (FK)
├─ moduleId (FK)
├─ authorId (FK → Users)
├─ views (counter)
├─ status (draft/published)
└─ timestamps

ArticleCategories
├─ id (PK)
├─ name
└─ slug

Modules
├─ id (PK)
├─ name
└─ slug

Departments
├─ id (PK)
├─ name
├─ slug
├─ description
└─ phone

Doctors
├─ id (PK)
├─ userId (FK → Users)
├─ departmentId (FK → Departments)
├─ specialization
└─ experienceYears

Appointments
├─ id (PK)
├─ patientId (FK → Patients)
├─ doctorId (FK → Doctors)
├─ departmentId (FK → Departments)
├─ appointmentDate
├─ timeSlot (morning/afternoon/evening)
├─ status (pending/confirmed/completed)
└─ confirmationNumber

Patients
├─ id (PK)
├─ userId (FK → Users)
├─ dateOfBirth
├─ nationalId
└─ insuranceNumber
```

---

## Request/Response Format

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      {
        "field": "email",
        "message": "Must be valid email"
      }
    ]
  }
}
```

---

## Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/benh_vien

# JWT
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_REFRESH_SECRET=your-refresh-secret-key
JWT_EXPIRY=3600

# Server
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Email
EMAIL_SERVICE=gmail
EMAIL_USER=noreply@benh-vien.com
EMAIL_PASSWORD=your-app-password

# File Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760

# AWS (if using S3)
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_S3_BUCKET=benh-vien-files
AWS_REGION=ap-southeast-1
```

---

## Authentication Flow

```
1. User Registration
   ├─ Validate email (format, unique)
   ├─ Validate password (min 8 chars, complexity)
   ├─ Hash password with bcrypt (salt rounds: 10)
   ├─ Create user in database
   ├─ Generate JWT token
   └─ Send verification email

2. User Login
   ├─ Find user by email
   ├─ Compare password with hash
   ├─ Generate access token (1h)
   ├─ Generate refresh token (7d)
   └─ Return tokens + user info

3. Protected Routes
   ├─ Check Authorization header
   ├─ Extract token
   ├─ Verify token signature
   ├─ Validate expiration
   ├─ Check user role
   └─ Allow/deny access

4. Refresh Token
   ├─ Validate refresh token
   ├─ Generate new access token
   └─ Return new token
```

---

## Deployment Topology

```
┌─────────────────────────────────────────────────┐
│           Production Environment               │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────────────────────────────────────┐  │
│  │          Load Balancer (ALB/LB)          │  │
│  │  (Distributes traffic)                   │  │
│  └────────────────┬────────────────────────┘  │
│                   │                            │
│     ┌─────────────┼─────────────┐             │
│     │             │             │             │
│     ▼             ▼             ▼             │
│  ┌────────┐  ┌────────┐  ┌────────┐          │
│  │Backend │  │Backend │  │Backend │          │
│  │ API #1 │  │ API #2 │  │ API #3 │          │
│  │(Docker)│  │(Docker)│  │(Docker)│          │
│  └────────┘  └────────┘  └────────┘          │
│     │             │             │             │
│     └─────────────┼─────────────┘             │
│                   │                            │
│             ┌─────▼──────┐                    │
│             │PostgreSQL  │                    │
│             │ RDS        │                    │
│             │Replication │                    │
│             └────────────┘                    │
│                                                 │
│  ┌──────────────────────────────────────────┐ │
│  │   AWS S3 (File Storage & Backups)       │ │
│  └──────────────────────────────────────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Development vs Production

```
DEVELOPMENT                    PRODUCTION
├─ Local PostgreSQL            ├─ AWS RDS PostgreSQL
├─ Local file storage          ├─ AWS S3
├─ Console logging             ├─ CloudWatch/ELK logging
├─ Simple CORS (all origins)   ├─ Strict CORS
├─ JWT: 1h                     ├─ JWT: 1h
├─ Detailed error messages     ├─ Generic error messages
├─ No rate limiting            ├─ Rate limiting enabled
├─ HTTP (localhost)            ├─ HTTPS (SSL certificate)
└─ Email: testing (no send)    └─ Email: production (send)
```

---

## Technology Stack Decision Tree

```
Backend Framework
├─ Express.js ────> Simple, lightweight, minimal
│                    Perfect for learning
│                    Good for small-medium projects
│                    Fast development
│
└─ NestJS ────────> Full-featured framework
                    TypeScript first
                    Built-in structure
                    Good for large teams

Database
├─ PostgreSQL ────> Robust, advanced features
│                    Better for complex queries
│                    Recommended
│
└─ MySQL ────────> Simpler, more common
                    Easier to setup
                    Good for LAMP stack

ORM
├─ Prisma ────────> Modern, type-safe ⭐ RECOMMENDED
│                    Great DX, auto-migrations
│                    Growing ecosystem
│
├─ Sequelize ─────> Mature, well-tested
│                    Callback-based
│                    More boilerplate
│
└─ TypeORM ───────> Decorator-based
                    Works with NestJS
                    Steeper learning curve
```

---

## Performance Targets

```
Metric                  Target          Acceptable
─────────────────────────────────────────────────────
API Response Time       < 200ms         < 500ms
Database Query          < 100ms         < 300ms
Page Load Time          < 3s            < 5s
99th Percentile         < 1s            < 2s
Throughput              1000 req/s      500 req/s
Availability            99.9%           99%
Error Rate              < 0.1%          < 1%
Cache Hit Rate          > 80%           > 50%
```

---

Great! Now you have complete architecture documentation! 🎉
