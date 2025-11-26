import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './BookAppointment.css'

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    session: 'morning',
    specialty: '',
    healthIssue: ''
  })

  const specialties = [
    "Nội tổng hợp",
    "Ngoại tổng hợp",
    "Tai mũi họng",
    "Răng hàm mặt",
    "Mắt",
    "Nhiệt đới",
    "Ung bướu",
    "Nhi",
    "Bỏng",
    "Tâm thần kinh",
    "Đái tháo đường",
    "Tim mạch",
  ]

  const handleDateChange = (e) => {
    setFormData(prev => ({
      ...prev,
      date: e.target.value
    }))
  }

  const handleSessionChange = (e) => {
    setFormData(prev => ({
      ...prev,
      session: e.target.value
    }))
  }

  const handleHealthIssueChange = (e) => {
    setFormData(prev => ({
      ...prev,
      healthIssue: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    // Chuyển hướng đến trang đăng ký khám trong tab mới
    window.open('https://40026.byt.vn/kcb/dang-ky-kham', '_blank')
  }

  return (
    <div className="book-appointment-page">
      <Navbar />

      <div className="appointment-container">
        <h1 className="appointment-title">ĐĂNG KÝ KHÁM THEO YÊU CẦU</h1>

        <div className="appointment-instructions">
          <p>
            Quý khách hàng có nguyện vọng đăng ký khám hoặc đặt lịch hẹn khám theo yêu cầu tại
            <span className="highlight-text"> Bệnh viện Quân y 4 </span>, xin vui lòng thực hiện theo hướng dẫn sau:
          </p>
          <p>1. Đăng ký khám lần đầu: bằng cách bấm vào bên dưới.</p>
          <p>2. Đăng ký khám lại tại: <a href="#" className="link-text">Đăng ký khám lại</a></p>
          <p>
            3.Xác nhận đặt lịch hẹn khám: bằng cách gọi tổng đài Chăm sóc khách hàng tại số
            <span className="highlight-phone"> 0974.225.225</span>.
          </p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
         

       

          {/* NÚT TIẾP THEO */}
          <div className="form-actions">
            <button className="btn-next btn btn-primary" type="submit">
              Đăng ký ngay
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookAppointment
   