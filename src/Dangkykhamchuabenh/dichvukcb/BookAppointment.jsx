import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './BookAppointment.css'

const BookAppointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    
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
          <p>2. Đăng ký khám lại tại: <button type="button" className="link-text" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>Đăng ký khám lại</button></p>
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
   