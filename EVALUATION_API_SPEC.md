# 📋 API Specification - Medical Service Evaluation

## Overview
This document describes the JSON format that the frontend sends to the backend for medical service quality evaluation.

---

## Endpoint

```
POST /api/evaluations
```

---

## Request Format

### Headers
```
Content-Type: application/json
Authorization: Bearer {token} (optional - if user is authenticated)
```

### Request Body

```json
{
  "patientInfo": {
    "name": "Nguyễn Văn A",
    "phone": "0987654321",
    "email": "nguyenvana@example.com"
  },
  "ratings": [
    {
      "questionId": 1,
      "questionText": "Thái độ phục vụ của nhân viên y tế có thân thiện, nhiệt tình không?",
      "rating": 4
    },
    {
      "questionId": 2,
      "questionText": "Bác sĩ có tư vấn, giải thích rõ ràng về tình trạng sức khỏe của bạn không?",
      "rating": 3
    },
    {
      "questionId": 3,
      "questionText": "Thời gian chờ đợi để được khám có hợp lý không?",
      "rating": 4
    },
    {
      "questionId": 4,
      "questionText": "Cơ sở vật chất, trang thiết bị y tế có đầy đủ, hiện đại không?",
      "rating": 4
    },
    {
      "questionId": 5,
      "questionText": "Môi trường khám chữa bệnh có sạch sẽ, thoải mái không?",
      "rating": 3
    },
    {
      "questionId": 6,
      "questionText": "Quy trình tiếp nhận và làm thủ tục có nhanh chóng, thuận tiện không?",
      "rating": 3
    },
    {
      "questionId": 7,
      "questionText": "Giá cả dịch vụ có hợp lý, minh bạch không?",
      "rating": 4
    },
    {
      "questionId": 8,
      "questionText": "Bạn có được hướng dẫn đầy đủ về cách sử dụng thuốc và chế độ chăm sóc không?",
      "rating": 4
    },
    {
      "questionId": 9,
      "questionText": "Bạn có cảm thấy an tâm về chất lượng khám chữa bệnh tại bệnh viện không?",
      "rating": 4
    },
    {
      "questionId": 10,
      "questionText": "Bạn có sẵn sàng giới thiệu bệnh viện cho người thân, bạn bè không?",
      "rating": 3
    }
  ],
  "additionalComments": "Nhân viên rất nhiệt tình. Tuy nhiên, thời gian chờ đợi hơi lâu vào buổi sáng.",
  "submittedAt": "2025-12-03T10:30:00.000Z",
  "overallScore": "3.60"
}
```

---

## Field Descriptions

### `patientInfo` (object)
Patient contact information
- `name` (string, required): Patient's full name
- `phone` (string, optional): Phone number
- `email` (string, optional): Email address

### `ratings` (array of objects)
Array containing answers to all 10 evaluation questions
- `questionId` (number, required): Question identifier (1-10)
- `questionText` (string, required): Full text of the question
- `rating` (number, required): Rating value (1-4)
  - `4`: Rất tốt (Excellent)
  - `3`: Tốt (Good)
  - `2`: Trung bình (Average)
  - `1`: Kém (Poor)

### `additionalComments` (string, optional)
Free-form text with additional feedback from the patient

### `submittedAt` (string, required)
ISO 8601 timestamp of when the evaluation was submitted

### `overallScore` (string, required)
Calculated average score across all 10 questions (format: "X.XX")

---

## Response Format

### Success Response (200 OK)

```json
{
  "success": true,
  "message": "Đánh giá đã được gửi thành công",
  "data": {
    "evaluationId": "eval_123456789",
    "submittedAt": "2025-12-03T10:30:00.000Z",
    "overallScore": "3.60"
  }
}
```

### Error Response (400 Bad Request)

```json
{
  "success": false,
  "error": "Validation failed",
  "message": "Vui lòng điền đầy đủ thông tin đánh giá",
  "details": {
    "field": "ratings",
    "issue": "All 10 questions must be answered"
  }
}
```

### Error Response (500 Internal Server Error)

```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Lỗi hệ thống. Vui lòng thử lại sau."
}
```

---

## Backend Implementation Requirements

### Database Schema Example

```sql
CREATE TABLE evaluations (
  id SERIAL PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  patient_phone VARCHAR(20),
  patient_email VARCHAR(255),
  ratings JSONB NOT NULL,
  additional_comments TEXT,
  overall_score DECIMAL(3,2) NOT NULL,
  submitted_at TIMESTAMP NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Index for searching by submission date
CREATE INDEX idx_evaluations_submitted_at ON evaluations(submitted_at DESC);

-- Index for filtering by score
CREATE INDEX idx_evaluations_overall_score ON evaluations(overall_score DESC);
```

### Validation Rules

1. **Required Fields:**
   - `patientInfo.name` must not be empty
   - `ratings` array must contain exactly 10 items
   - Each rating value must be between 1 and 4

2. **Optional Fields:**
   - `patientInfo.phone` and `patientInfo.email` can be empty
   - `additionalComments` can be empty

3. **Data Validation:**
   - Email format validation (if provided)
   - Phone number format validation (if provided)
   - Rating values must be integers: 1, 2, 3, or 4

### Business Logic

1. **Calculate Overall Score:**
   - Average all 10 rating values
   - Round to 2 decimal places

2. **Store Timestamp:**
   - Use server-side timestamp for `created_at`
   - Use client-side timestamp from request for `submittedAt`

3. **Generate Evaluation ID:**
   - Unique identifier for tracking purposes

---

## Integration Example (Backend Node.js/Express)

```javascript
// POST /api/evaluations
app.post('/api/evaluations', async (req, res) => {
  try {
    const { patientInfo, ratings, additionalComments, submittedAt, overallScore } = req.body;

    // Validation
    if (!patientInfo?.name) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Vui lòng nhập họ tên'
      });
    }

    if (!Array.isArray(ratings) || ratings.length !== 10) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: 'Vui lòng đánh giá tất cả 10 câu hỏi'
      });
    }

    // Validate each rating
    for (const rating of ratings) {
      if (!rating.rating || rating.rating < 1 || rating.rating > 4) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          message: 'Giá trị đánh giá không hợp lệ'
        });
      }
    }

    // Save to database
    const evaluation = await db.evaluations.create({
      patient_name: patientInfo.name,
      patient_phone: patientInfo.phone || null,
      patient_email: patientInfo.email || null,
      ratings: JSON.stringify(ratings),
      additional_comments: additionalComments || null,
      overall_score: parseFloat(overallScore),
      submitted_at: new Date(submittedAt)
    });

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Đánh giá đã được gửi thành công',
      data: {
        evaluationId: evaluation.id,
        submittedAt: evaluation.submitted_at,
        overallScore: evaluation.overall_score
      }
    });

  } catch (error) {
    console.error('Error saving evaluation:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Lỗi hệ thống. Vui lòng thử lại sau.'
    });
  }
});
```

---

## Testing

### Sample cURL Command

```bash
curl -X POST http://localhost:3000/api/evaluations \
  -H "Content-Type: application/json" \
  -d '{
    "patientInfo": {
      "name": "Nguyễn Văn A",
      "phone": "0987654321",
      "email": "test@example.com"
    },
    "ratings": [
      {"questionId": 1, "questionText": "Question 1", "rating": 4},
      {"questionId": 2, "questionText": "Question 2", "rating": 3},
      {"questionId": 3, "questionText": "Question 3", "rating": 4},
      {"questionId": 4, "questionText": "Question 4", "rating": 4},
      {"questionId": 5, "questionText": "Question 5", "rating": 3},
      {"questionId": 6, "questionText": "Question 6", "rating": 3},
      {"questionId": 7, "questionText": "Question 7", "rating": 4},
      {"questionId": 8, "questionText": "Question 8", "rating": 4},
      {"questionId": 9, "questionText": "Question 9", "rating": 4},
      {"questionId": 10, "questionText": "Question 10", "rating": 3}
    ],
    "additionalComments": "Test comment",
    "submittedAt": "2025-12-03T10:30:00.000Z",
    "overallScore": "3.60"
  }'
```

---

## Environment Variables

Add to frontend `.env` file:

```
REACT_APP_API_URL=http://localhost:3000/api
```

Add to backend `.env` file:

```
DATABASE_URL=postgresql://user:password@localhost:5432/hospital_db
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

---

## Notes for Developers

1. **Frontend sends all data** - Backend should trust the calculated `overallScore` or recalculate for verification
2. **Timestamps** - Use ISO 8601 format for all dates
3. **Validation** - Implement on both frontend and backend
4. **Error handling** - Return user-friendly error messages in Vietnamese
5. **Security** - Sanitize all user inputs to prevent SQL injection and XSS
6. **Privacy** - Consider GDPR compliance for storing personal information
7. **Analytics** - Backend can aggregate scores to generate quality metrics and reports


