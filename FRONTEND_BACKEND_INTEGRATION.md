# 🔗 FRONTEND-BACKEND INTEGRATION GUIDE

> Hướng dẫn kết nối Frontend React với Backend Node.js

---

## 📋 INTEGRATION CHECKLIST

### Phase 1: Setup (2 giờ)
- [ ] Backend server running on `http://localhost:3000`
- [ ] Frontend running on `http://localhost:3000` (hoặc port khác)
- [ ] CORS configured
- [ ] API environment variables set

### Phase 2: Articles Integration (4 giờ)
- [ ] Articles list API working
- [ ] Article detail API working
- [ ] Categories API working
- [ ] Modules API working
- [ ] Frontend fetch articles from API

### Phase 3: Authentication (4 giờ)
- [ ] Login API working
- [ ] Register API working
- [ ] JWT token storage
- [ ] Protected routes

### Phase 4: Appointments (6 giờ)
- [ ] Appointment booking API
- [ ] Form submission
- [ ] Confirmation

---

## 🚀 QUICK START

### 1. Setup Environment Variables

**Frontend `.env` file:**
```
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_NODE_ENV=development
```

**Backend `.env` file:**
```
DATABASE_URL=postgresql://user:password@localhost:5432/benh_vien
JWT_SECRET=your-secret-key
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

---

## 📡 API REQUEST PATTERNS

### Create API Service (Frontend)

```typescript
// src/services/api.service.ts
const API_URL = process.env.REACT_APP_API_URL;

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const apiService = {
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add JWT token if exists
    const token = localStorage.getItem('access_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },

  get<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: 'GET' });
  },

  post<T>(endpoint: string, body: any) {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  put<T>(endpoint: string, body: any) {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  delete<T>(endpoint: string) {
    return this.request<T>(endpoint, { method: 'DELETE' });
  },
};
```

---

## 📰 ARTICLES API INTEGRATION

### Update NewsEventsPage to use Backend

**Current (Frontend only):**
```jsx
// src/modules/tintuc/pages/NewsEventsPage.jsx
const NewsEventsPage = () => {
  const [filteredNews, setFilteredNews] = useState([]);

  // Uses hardcoded allNewsData from JSON
  const filteredNews = useMemo(() => {
    const news = mapArticlesImages(allNewsData)
    return getNewsByCategory(news, activeCategoryId)
  }, [activeCategoryId])
```

**Updated (With Backend):**
```jsx
import { useState, useEffect, useMemo } from 'react'
import { apiService } from '../services/api.service'

const NewsEventsPage = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState('world-medical')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      const response = await apiService.get(
        `/articles?page=${currentPage}&limit=8&categoryId=${activeCategoryId}`
      )
      
      if (response.success) {
        setArticles(response.data)
      } else {
        console.error('Failed to fetch articles:', response.error)
      }
      
      setLoading(false)
    }

    fetchArticles()
  }, [activeCategoryId, currentPage])

  if (loading) return <div>Đang tải...</div>

  return (
    <div className="news-events-page">
      {/* ... */}
      <NewsGrid news={articles} columns={4} />
      {/* ... */}
    </div>
  )
}
```

---

## 📄 ARTICLE DETAIL INTEGRATION

**Current:**
```jsx
// Uses allNewsData JSON + content files
const ArticleDetailPage = () => {
  const newsWithImages = mapArticlesImages(allNewsData)
  const foundArticle = newsWithImages.find(item => item.slug === slug)
```

**Updated:**
```jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiService } from '../services/api.service'

const ArticleDetailPage = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await apiService.get(`/articles/slug/${slug}`)
      
      if (response.success) {
        setArticle(response.data)
      } else {
        console.error('Article not found')
      }
      
      setLoading(false)
    }

    fetchArticle()
  }, [slug])

  if (loading) return <div>Đang tải...</div>
  if (!article) return <div>Không tìm thấy bài viết</div>

  return (
    <div className="article-detail-page">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <div>{article.content}</div>
      {/* ... */}
    </div>
  )
}
```

---

## 👥 DEPARTMENTS & DOCTORS INTEGRATION

**Backend API Expected Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Nội tổng hợp",
      "slug": "noi-tong-hop",
      "description": "...",
      "specialties": "...",
      "image": "https://...",
      "doctors": [
        {
          "id": 1,
          "name": "Dr. Nguyễn Văn A",
          "specialization": "Chuyên khoa nội",
          "image": "https://...",
          "experience_years": 10
        }
      ]
    }
  ]
}
```

**Frontend Component:**
```jsx
import { useEffect, useState } from 'react'
import { apiService } from '../../services/api.service'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [selectedDept, setSelectedDept] = useState(null)

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await apiService.get('/doctors')
      if (response.success) {
        setDoctors(response.data)
      }
    }

    fetchDoctors()
  }, [])

  return (
    <div className="doctors-section">
      {doctors.map(doc => (
        <div key={doc.id} className="doctor-card">
          <img src={doc.image} alt={doc.name} />
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
        </div>
      ))}
    </div>
  )
}

export default Doctors
```

---

## 📅 APPOINTMENTS INTEGRATION

**Update BookAppointment Component:**

```jsx
import { useState, useEffect } from 'react'
import { apiService } from '../../services/api.service'

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientId: null,
    departmentId: '',
    doctorId: '',
    appointmentDate: '',
    timeSlot: 'morning',
    healthIssue: ''
  })
  const [departments, setDepartments] = useState([])
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Fetch departments on mount
  useEffect(() => {
    const fetchDepartments = async () => {
      const response = await apiService.get('/departments')
      if (response.success) {
        setDepartments(response.data)
      }
    }

    fetchDepartments()
  }, [])

  // Fetch doctors when department changes
  useEffect(() => {
    if (formData.departmentId) {
      const fetchDoctors = async () => {
        const response = await apiService.get(
          `/doctors?departmentId=${formData.departmentId}`
        )
        if (response.success) {
          setDoctors(response.data)
        }
      }

      fetchDoctors()
    }
  }, [formData.departmentId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const response = await apiService.post('/appointments', {
      ...formData,
      patientId: getCurrentUserId() // Get from auth context
    })

    if (response.success) {
      setMessage('Đặt lịch khám thành công!')
      console.log('Confirmation:', response.data.confirmationNumber)
      // Reset form
      setFormData({...formData, healthIssue: ''})
    } else {
      setMessage(`Lỗi: ${response.error}`)
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={formData.departmentId}
        onChange={(e) => setFormData({...formData, departmentId: e.target.value})}
        required
      >
        <option value="">Chọn khoa</option>
        {departments.map(dept => (
          <option key={dept.id} value={dept.id}>
            {dept.name}
          </option>
        ))}
      </select>

      <select
        value={formData.doctorId}
        onChange={(e) => setFormData({...formData, doctorId: e.target.value})}
      >
        <option value="">Chọn bác sĩ</option>
        {doctors.map(doc => (
          <option key={doc.id} value={doc.id}>
            {doc.name} - {doc.specialization}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={formData.appointmentDate}
        onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}
        required
      />

      <select
        value={formData.timeSlot}
        onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
      >
        <option value="morning">Sáng (7h - 12h)</option>
        <option value="afternoon">Chiều (13h30 - 16h30)</option>
        <option value="evening">Tối (18h - 20h)</option>
      </select>

      <textarea
        value={formData.healthIssue}
        onChange={(e) => setFormData({...formData, healthIssue: e.target.value})}
        placeholder="Mô tả vấn đề sức khỏe..."
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Đang xử lý...' : 'Đặt lịch khám'}
      </button>

      {message && <p className="message">{message}</p>}
    </form>
  )
}

export default BookAppointment
```

---

## 🔐 AUTHENTICATION INTEGRATION

**Create Auth Context:**

```jsx
// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react'
import { apiService } from '../services/api.service'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('access_token'))
  const [loading, setLoading] = useState(false)

  const login = async (email, password) => {
    setLoading(true)
    const response = await apiService.post('/auth/login', { email, password })

    if (response.success) {
      const { access_token, refresh_token, user } = response.data
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
      setToken(access_token)
      setUser(user)
      return true
    } else {
      console.error('Login failed:', response.error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setToken(null)
    setUser(null)
  }

  const register = async (email, password, fullName) => {
    setLoading(true)
    const response = await apiService.post('/auth/register', {
      email,
      password,
      fullName
    })

    setLoading(false)
    return response.success
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
```

**Update App.js to use Auth:**

```jsx
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ... existing routes ... */}
        </Routes>
      </Router>
    </AuthProvider>
  )
}
```

---

## 🛡️ PROTECTED ROUTES

```jsx
// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" />
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />
  }

  return children
}

// Usage in App.js
<Route
  path="/book-appointment"
  element={
    <ProtectedRoute requiredRole="patient">
      <BookAppointment />
    </ProtectedRoute>
  }
/>
```

---

## 🧪 TESTING THE INTEGRATION

### 1. Test Articles API
```bash
# Backend running
npm run dev

# Frontend running in another terminal
npm start

# Visit http://localhost:3000/news-events
# Should see articles from API
```

### 2. Test Login
```bash
# Create test user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password","fullName":"Test User"}'

# Login in frontend
# Should redirect to dashboard
```

### 3. Test Appointment Booking
```bash
# Fill appointment form
# Submit
# Should see confirmation number
```

---

## 🐛 COMMON ISSUES & SOLUTIONS

| Issue | Solution |
|-------|----------|
| CORS error | Add CORS middleware in backend: `app.use(cors())` |
| 404 Not Found | Check API endpoint URL and backend routes |
| 401 Unauthorized | Ensure JWT token is in localStorage and header |
| Network timeout | Check if backend is running on correct port |
| No data showing | Check browser console for API errors |
| Image URLs broken | Ensure image URLs are absolute or full path |

---

## 📊 DATA MAPPING REFERENCE

### Articles
- Frontend: `allNewsData.json`
- Backend: `articles` table
- Mapping: Convert JSON data to database records

### Categories
- Frontend: `CATEGORIES` object in code
- Backend: `article_categories` table
- Ensure ID/slug matches

### Modules
- Frontend: `tintuc`, `partypolitics`, `hoptac`
- Backend: `modules` table
- Create 3 modules with these slugs

### Users
- Frontend: Local auth context
- Backend: `users` table with roles
- Roles: admin, editor, doctor, patient

---

## 🚀 DEPLOYMENT CHECKLIST

- [ ] Backend deployed to server
- [ ] Frontend `.env` points to production API
- [ ] CORS configured for production domain
- [ ] SSL/HTTPS enabled
- [ ] Database backups configured
- [ ] Error logging setup
- [ ] Performance monitoring setup
- [ ] All tests passing

---

Chúc bạn thành công với integration! 🎉
