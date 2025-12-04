import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './Danhgia.css'
import '../Components/NewsEvents/NewsEvents.css'

const evaluationQuestions = [
  {
    id: 1,
    question: 'Thái độ phục vụ của nhân viên y tế có thân thiện, nhiệt tình không?'
  },
  {
    id: 2,
    question: 'Bác sĩ có tư vấn, giải thích rõ ràng về tình trạng sức khỏe của bạn không?'
  },
  {
    id: 3,
    question: 'Thời gian chờ đợi để được khám có hợp lý không?'
  },
  {
    id: 4,
    question: 'Cơ sở vật chất, trang thiết bị y tế có đầy đủ, hiện đại không?'
  },
  {
    id: 5,
    question: 'Môi trường khám chữa bệnh có sạch sẽ, thoải mái không?'
  },
  {
    id: 6,
    question: 'Quy trình tiếp nhận và làm thủ tục có nhanh chóng, thuận tiện không?'
  },
  {
    id: 7,
    question: 'Giá cả dịch vụ có hợp lý, minh bạch không?'
  },
  {
    id: 8,
    question: 'Bạn có được hướng dẫn đầy đủ về cách sử dụng thuốc và chế độ chăm sóc không?'
  },
  {
    id: 9,
    question: 'Bạn có cảm thấy an tâm về chất lượng khám chữa bệnh tại bệnh viện không?'
  },
  {
    id: 10,
    question: 'Bạn có sẵn sàng giới thiệu bệnh viện cho người thân, bạn bè không?'
  }
]

const ratingLevels = [
  { value: 4, label: 'Rất tốt', emoji: '😊' },
  { value: 3, label: 'Tốt', emoji: '🙂' },
  { value: 2, label: 'Trung bình', emoji: '😐' },
  { value: 1, label: 'Kém', emoji: '☹️' }
]

const Danhgia = () => {
  const [ratings, setRatings] = useState({})
  const [additionalComments, setAdditionalComments] = useState('')
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleRatingChange = (questionId, value) => {
    setRatings(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handlePatientInfoChange = (field, value) => {
    setPatientInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const validateForm = () => {
    // Kiểm tra xem tất cả câu hỏi đã được đánh giá chưa
    const allQuestionsAnswered = evaluationQuestions.every(q => ratings[q.id] !== undefined)
    
    if (!allQuestionsAnswered) {
      setSubmitStatus({
        type: 'error',
        message: 'Vui lòng đánh giá tất cả các câu hỏi trước khi gửi.'
      })
      return false
    }

    // Kiểm tra thông tin liên hệ (optional - có thể bỏ nếu muốn cho phép đánh giá ẩn danh)
    if (!patientInfo.name.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Vui lòng nhập họ tên của bạn.'
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    // Chuẩn bị dữ liệu theo định dạng JSON
    const evaluationData = {
      patientInfo: {
        name: patientInfo.name,
        phone: patientInfo.phone,
        email: patientInfo.email
      },
      ratings: evaluationQuestions.map(question => ({
        questionId: question.id,
        questionText: question.question,
        rating: ratings[question.id]
      })),
      additionalComments: additionalComments,
      submittedAt: new Date().toISOString(),
      overallScore: calculateOverallScore()
    }

    try {
      // TODO: Thay thế URL này bằng endpoint thực tế của backend
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'
      
      const response = await fetch(`${API_URL}/evaluations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(evaluationData)
      })

      if (response.ok) {
        const result = await response.json()
        setSubmitStatus({
          type: 'success',
          message: 'Cảm ơn bạn đã gửi đánh giá! Ý kiến của bạn rất quan trọng giúp chúng tôi cải thiện chất lượng dịch vụ.'
        })
        
        // Reset form sau khi gửi thành công
        setTimeout(() => {
          setRatings({})
          setAdditionalComments('')
          setPatientInfo({ name: '', phone: '', email: '' })
          setSubmitStatus({ type: '', message: '' })
        }, 3000)
      } else {
        throw new Error('Không thể gửi đánh giá')
      }
    } catch (error) {
      console.error('Error submitting evaluation:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại sau.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateOverallScore = () => {
    const values = Object.values(ratings)
    if (values.length === 0) return 0
    const sum = values.reduce((acc, val) => acc + val, 0)
    return (sum / values.length).toFixed(2)
  }

  const getProgressPercentage = () => {
    const answeredCount = Object.keys(ratings).length
    return (answeredCount / evaluationQuestions.length) * 100
  }

  return (
    <div className="evaluation-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="evaluation-page__hero">
        <div className="evaluation-page__hero-content">
          <div className="news-header hero-news-header">
            <div className="news-header-left">
              <p className="news-label">Đánh giá dịch vụ</p>
              <h2 className="news-main-title">| Chất lượng khám chữa bệnh</h2>             
            </div>
            <p>Ý kiến đóng góp của bạn giúp chúng tôi nâng cao chất lượng phục vụ</p>
          </div>
          <h1>ĐÁNH GIÁ CHẤT LƯỢNG KHÁM CHỮA BỆNH</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="evaluation-content">
        <div className="evaluation-container">
          
          {/* Progress Bar */}
          <div className="evaluation-progress">
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <p className="progress-text">
              Đã hoàn thành: {Object.keys(ratings).length}/{evaluationQuestions.length} câu hỏi
            </p>
          </div>

          {/* Patient Information */}
          <div className="evaluation-section patient-info-section">
            <h3>Thông tin của bạn (không bắt buộc)</h3>
            <div className="patient-info-grid">
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  value={patientInfo.name}
                  onChange={(e) => handlePatientInfoChange('name', e.target.value)}
                  placeholder="Nhập họ tên của bạn"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="tel"
                  id="phone"
                  value={patientInfo.phone}
                  onChange={(e) => handlePatientInfoChange('phone', e.target.value)}
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={patientInfo.email}
                  onChange={(e) => handlePatientInfoChange('email', e.target.value)}
                  placeholder="Nhập email"
                />
              </div>
            </div>
          </div>

          {/* Evaluation Questions */}
          <form onSubmit={handleSubmit} className="evaluation-form">
            <div className="evaluation-section questions-section">
              <h3>Câu hỏi đánh giá</h3>
              <p className="section-description">
                Vui lòng đánh giá các khía cạnh sau về dịch vụ khám chữa bệnh tại bệnh viện
              </p>

              {evaluationQuestions.map((question, index) => (
                <div key={question.id} className="question-card">
                  <div className="question-header">
                    <span className="question-number">{index + 1}</span>
                    <p className="question-text">{question.question}</p>
                  </div>
                  
                  <div className="rating-options">
                    {ratingLevels.map((level) => (
                      <label
                        key={level.value}
                        className={`rating-option ${
                          ratings[question.id] === level.value ? 'selected' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={level.value}
                          checked={ratings[question.id] === level.value}
                          onChange={() => handleRatingChange(question.id, level.value)}
                        />
                        <div className="rating-content">
                          <span className="rating-emoji">{level.emoji}</span>
                          <span className="rating-label">{level.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Comments */}
            <div className="evaluation-section comments-section">
              <h3>Ý kiến bổ sung</h3>
              <textarea
                value={additionalComments}
                onChange={(e) => setAdditionalComments(e.target.value)}
                placeholder="Vui lòng chia sẻ thêm ý kiến, góp ý của bạn về dịch vụ khám chữa bệnh tại bệnh viện..."
                rows="5"
              ></textarea>
            </div>

            {/* Submit Status Message */}
            {submitStatus.message && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="evaluation-actions">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi đánh giá'}
              </button>
            </div>
          </form>

          {/* Overall Score Display */}
          {Object.keys(ratings).length > 0 && (
            <div className="overall-score">
              <p>Điểm đánh giá trung bình: <strong>{calculateOverallScore()}/4.00</strong></p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Danhgia

