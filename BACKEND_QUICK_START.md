# 🚀 BACKEND QUICK START GUIDE

> Hướng dẫn nhanh để bắt đầu xây dựng backend cho website Bệnh viện Quân y 4

---

## 📦 RECOMMENDED TECH STACK

```
Node.js v18+
Express.js (lightweight) hoặc NestJS (more structured)
PostgreSQL (robust) hoặc MySQL 8+ (simpler)
Prisma (type-safe ORM)
JWT + bcrypt (authentication)
```

---

## 🏗️ PROJECT SETUP (15 phút)

### 1. Create Project
```bash
mkdir benh-vien-backend
cd benh-vien-backend

# Initialize Node project
npm init -y

# Install dependencies
npm install express cors dotenv prisma @prisma/client jsonwebtoken bcryptjs joi
npm install --save-dev nodemon typescript ts-node @types/node @types/express
```

### 2. Setup TypeScript & Structure
```bash
# Initialize TypeScript
npx tsc --init

# Create folders
mkdir -p src/{config,controllers,services,routes,middlewares,utils,models}
mkdir -p prisma migrations

# Create .env file
echo "DATABASE_URL=postgresql://user:password@localhost:5432/benh_vien" > .env
echo "JWT_SECRET=your-secret-key-change-this" >> .env
echo "NODE_ENV=development" >> .env
echo "PORT=3000" >> .env
```

### 3. Initialize Prisma
```bash
npx prisma init --datasource-provider postgresql

# Update .env with your database connection
# Then create schema
```

---

## 🗄️ DATABASE SETUP (30 phút)

### 1. Create PostgreSQL Database
```bash
# Using psql
createdb benh_vien
psql benh_vien

# Or using GUI tool like pgAdmin
```

### 2. Create Prisma Schema (`prisma/schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// USER & AUTHENTICATION
model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  username  String    @unique
  password  String
  fullName  String?
  role      Role      @default(PATIENT)
  isActive  Boolean   @default(true)
  
  // Relations
  articles  Article[]
  doctor    Doctor?
  patient   Patient?
  
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@map("users")
}

enum Role {
  ADMIN
  EDITOR
  DOCTOR
  PATIENT
  GUEST
}

// ARTICLES & NEWS
model Article {
  id          Int       @id @default(autoincrement())
  title       String
  slug        String    @unique
  excerpt     String?
  content     String
  image       String?
  views       Int       @default(0)
  
  categoryId  Int
  category    ArticleCategory @relation(fields: [categoryId], references: [id])
  
  moduleId    Int
  module      Module    @relation(fields: [moduleId], references: [id])
  
  authorId    Int
  author      User      @relation(fields: [authorId], references: [id])
  
  status      ArticleStatus @default(DRAFT)
  isFeatured  Boolean   @default(false)
  
  tags        Tag[]
  
  publishedAt DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deletedAt   DateTime?

  @@index([categoryId])
  @@index([moduleId])
  @@index([status])
  @@map("articles")
}

enum ArticleStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

model ArticleCategory {
  id        Int       @id @default(autoincrement())
  name      String
  slug      String    @unique
  icon      String?
  
  articles  Article[]
  
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@map("article_categories")
}

model Module {
  id        Int       @id @default(autoincrement())
  name      String    @unique
  slug      String    @unique
  icon      String?
  
  articles  Article[]
  
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@map("modules")
}

model Tag {
  id        Int       @id @default(autoincrement())
  name      String    @unique
  slug      String    @unique
  
  articles  Article[]
  
  createdAt DateTime  @default(now())

  @@map("tags")
}

// DEPARTMENTS & DOCTORS
model Department {
  id            Int       @id @default(autoincrement())
  name          String
  slug          String    @unique
  description   String?
  specialties   String?
  phone         String?
  email         String?
  image         String?
  
  doctors       Doctor[]
  appointments  Appointment[]
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@map("departments")
}

model Doctor {
  id              Int       @id @default(autoincrement())
  userId          Int       @unique
  user            User      @relation(fields: [userId], references: [id])
  
  departmentId    Int
  department      Department @relation(fields: [departmentId], references: [id])
  
  specialization  String?
  experienceYears Int?
  bio             String?
  image           String?
  
  appointments    Appointment[]
  medicalRecords  MedicalRecord[]
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@map("doctors")
}

// PATIENTS & APPOINTMENTS
model Patient {
  id              Int       @id @default(autoincrement())
  userId          Int       @unique
  user            User      @relation(fields: [userId], references: [id])
  
  dateOfBirth     DateTime?
  gender          Gender?
  nationalId      String?   @unique
  insuranceNumber String?
  insuranceProvider String?
  address         String?
  city            String?
  phone           String?
  
  appointments    Appointment[]
  medicalRecords  MedicalRecord[]
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@map("patients")
}

enum Gender {
  MALE
  FEMALE
  OTHER
}

model Appointment {
  id                  Int       @id @default(autoincrement())
  patientId           Int
  patient             Patient   @relation(fields: [patientId], references: [id])
  
  doctorId            Int?
  doctor              Doctor?   @relation(fields: [doctorId], references: [id])
  
  departmentId        Int
  department          Department @relation(fields: [departmentId], references: [id])
  
  appointmentDate     DateTime
  timeSlot            TimeSlot
  status              AppointmentStatus @default(PENDING)
  healthIssue         String?
  notes               String?
  confirmationNumber  String    @unique @default(cuid())
  
  medicalRecord       MedicalRecord?
  
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt

  @@index([patientId])
  @@index([status])
  @@map("appointments")
}

enum TimeSlot {
  MORNING
  AFTERNOON
  EVENING
}

enum AppointmentStatus {
  PENDING
  CONFIRMED
  COMPLETED
  CANCELLED
}

model MedicalRecord {
  id              Int       @id @default(autoincrement())
  patientId       Int
  patient         Patient   @relation(fields: [patientId], references: [id])
  
  appointmentId   Int?      @unique
  appointment     Appointment? @relation(fields: [appointmentId], references: [id])
  
  doctorId        Int
  doctor          Doctor    @relation(fields: [doctorId], references: [id])
  
  diagnosis       String
  treatmentPlan   String?
  medications     String?
  notes           String?
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@map("medical_records")
}

// CONTACT & MESSAGES
model ContactMessage {
  id        Int       @id @default(autoincrement())
  name      String
  email     String
  phone     String?
  subject   String
  message   String
  status    MessageStatus @default(NEW)
  
  createdAt DateTime  @default(now())

  @@map("contact_messages")
}

enum MessageStatus {
  NEW
  READ
  RESPONDED
  RESOLVED
}
```

### 3. Run Migrations
```bash
npx prisma migrate dev --name init
```

### 4. Seed Data
```bash
# Create prisma/seed.ts
npx prisma db seed
```

---

## 🔐 AUTHENTICATION SETUP (45 phút)

### 1. Create Auth Service (`src/services/auth.service.ts`)

```typescript
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh-secret';

export const authService = {
  async register(email: string, password: string, fullName: string) {
    const hashedPassword = await hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        username: email.split('@')[0]
      }
    });
    
    return user;
  },

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user || !(await compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    
    const accessToken = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    const refreshToken = jwt.sign(
      { userId: user.id },
      JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );
    
    return { accessToken, refreshToken, user };
  },

  async verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET) as { userId: number; role: string };
  }
};
```

### 2. Create Auth Routes (`src/routes/auth.routes.ts`)

```typescript
import express from 'express';
import { authService } from '../services/auth.service';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const user = await authService.register(email, password, fullName);
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
});

export default router;
```

---

## 📰 ARTICLES API (1 giờ)

### Create Articles Service

```typescript
// src/services/article.service.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const articleService = {
  async getAll(page = 1, limit = 10, filters: any = {}) {
    const skip = (page - 1) * limit;
    
    const where: any = { status: 'PUBLISHED' };
    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.moduleId) where.moduleId = filters.moduleId;
    
    const articles = await prisma.article.findMany({
      where,
      skip,
      take: limit,
      include: { category: true, author: true, tags: true },
      orderBy: { publishedAt: 'desc' }
    });
    
    const total = await prisma.article.count({ where });
    
    return {
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  },

  async getBySlug(slug: string) {
    const article = await prisma.article.findUnique({
      where: { slug },
      include: { category: true, author: true, tags: true }
    });
    
    if (article) {
      // Increment view count
      await prisma.article.update({
        where: { id: article.id },
        data: { views: { increment: 1 } }
      });
    }
    
    return article;
  },

  async create(data: any) {
    return prisma.article.create({
      data: {
        ...data,
        slug: data.slug || this.generateSlug(data.title)
      }
    });
  },

  generateSlug(title: string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
};
```

### Create Articles Routes

```typescript
// src/routes/article.routes.ts
import express from 'express';
import { articleService } from '../services/article.service';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, categoryId, moduleId } = req.query;
    const result = await articleService.getAll(
      parseInt(page as string),
      parseInt(limit as string),
      { categoryId: categoryId ? parseInt(categoryId as string) : null, moduleId }
    );
    res.json({ success: true, data: result.data, pagination: result.pagination });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/slug/:slug', async (req, res) => {
  try {
    const article = await articleService.getBySlug(req.params.slug);
    if (!article) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.json({ success: true, data: article });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const article = await articleService.create(req.body);
    res.json({ success: true, data: article });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

export default router;
```

---

## 🎯 MAIN SERVER SETUP

```typescript
// src/main.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import articleRoutes from './routes/article.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📚 API docs: http://localhost:${PORT}/api`);
});
```

### package.json scripts
```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/main.ts",
    "build": "tsc",
    "start": "node dist/main.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:seed": "ts-node prisma/seed.ts",
    "prisma:studio": "prisma studio"
  }
}
```

---

## ✅ NEXT STEPS

1. **Setup Project** ✓
2. **Create Database** ✓
3. **Implement Auth** ✓
4. **Implement Articles API** ✓
5. **Add Departments API** - Follow same pattern
6. **Add Appointments API** - Follow same pattern
7. **Add Error Handling** - Create middleware
8. **Add Validation** - Use joi or class-validator
9. **Add Tests** - Use Jest
10. **Deploy** - Docker + Heroku/AWS

---

## 🧪 TEST WITH CURL

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","fullName":"Test User"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Get Articles
curl http://localhost:3000/api/articles

# Get Article by Slug
curl http://localhost:3000/api/articles/slug/article-slug-here

# Create Article
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","excerpt":"Test","content":"Test content","moduleId":1,"categoryId":1,"authorId":1}'
```

---

## 📞 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Database connection failed | Check DATABASE_URL in .env |
| Port already in use | Change PORT in .env |
| JWT error | Ensure JWT_SECRET is set |
| Prisma error | Run `npx prisma generate` |
| Migration failed | Check database permissions |

---

## 💡 BEST PRACTICES

✅ Always validate input  
✅ Use try-catch for error handling  
✅ Implement pagination for list endpoints  
✅ Use indexes for frequently queried fields  
✅ Log all errors  
✅ Use environment variables for config  
✅ Implement rate limiting  
✅ Use HTTPS in production  
✅ Sanitize user input  
✅ Test before deploying  

---

Chúc bạn thành công! 🚀
