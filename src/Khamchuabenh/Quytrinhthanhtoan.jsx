import usePageMeta from '../hooks/usePageMeta'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './Khamchuabenh.css'
import '../Components/NewsEvents/NewsEvents.css'

const Thutucxuatvien = () => {
  usePageMeta('Quy trình đăng ký khám theo yêu cầu')
  return (
    <div className="khamchuabenh-page">
      <Navbar />
      <main className="khamchuabenh-main">
        <div className="khamchuabenh-container">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Khám chữa bệnh</p>
              <h2 className="news-main-title">|   Quy trình đăng ký khám theo yêu cầu</h2>
            </div>
          </div>
          <h1 className="khamchuabenh-title">
            🌿 HƯỚNG DẪN QUY TRÌNH ĐĂNG KÝ KHÁM THEO YÊU CẦU
          </h1>

        
          <section className="step-section step-1">
            <div className="step-header">
              <div className="step-icon">📋</div>
              <h2 className="step-title">Bước 1: Đăng ký khám:</h2>
            </div>
            <ul className="step-content">
              <li>Sử dụng điện thoại thông minh quét mã QR tại khu vực tiếp đón Khoa Khám theo yêu cầu</li>
              <li>Hoặc đăng ký khám online qua hệ thống website & app của bệnh viện</li>
            </ul>
            <ul className="sub-list">
                  <li>Điền thông tin cá nhân:Họ tên, tuổi, giới tính, địa chỉ, số điện thoại,...</li>
                  <li>Chọn phòng khám và ngày, giờ khám mong muốn.</li>
                </ul>
          </section>

          <section className="step-section step-2">
            <div className="step-header">
              <div className="step-icon">📄</div>
              <h2 className="step-title">Bước 2: Khám và xét nghiệm</h2>
            </div>
            <ul className="step-content">
              <li>Bệnh nhân đến phòng khám đã đăng ký.</li>
              <li>
              Bác sĩ
                <ul className="sub-list">
                  <li>Tư vấn, chẩn đoán sơ bộ.</li>
                  <li>Chỉ định các xét nghiệm cần thiết.</li>
                </ul>
              </li>
              <li>Bệnh nhân nhận phiếu chỉ định xét nghiệm.</li>
            </ul>
          </section>

          <section className="step-section step-3">
            <div className="step-header">
              <div className="step-icon">💰</div>
              <h2 className="step-title">Bước 3: Nộp tiền và thực hiện xét nghiệm</h2>
            </div>
            <ul className="step-content">
              <li>
              Nộp tiền tại quầy thu ngân theo hướng dẫn của nhân viên.             
              </li>
              <li>Di chuyển đến khu vực xét nghiệm theo chỉ dẫn.</li>
              <li>Thực hiện các xét nghiệm đã được chỉ định.</li>
             
            </ul>
          </section>

          <section className="step-section step-4">
            <div className="step-header">
              <div className="step-icon">📦</div>
              <h2 className="step-title">Bước 4: Nhận kết quả, tư vấn và thanh toán:</h2>
            </div>
           <div className="step-content">
              <li>
              Quay lại phòng khám ban đầu sau khi hoàn tất xét nghiệm.
              </li>
                <li>Nhận kết quả xét nghiệm và tư vấn từ bác sĩ:
                <ul className="sub-list">
                  <li>Nhận kết quả, chẩn đoán chính xác.</li>
                  <li>Hướng dẫn dùng thuốc, phòng ngừa bệnh.</li>
                  <li>Hẹn tái khám (nếu cần). </li>
                </ul>
                </li>
              <li>Thanh toán phí khám bệnh tại quầy thu ngân theo hướng dẫn của nhân viên.</li>
             
            </div>
          </section>

          <section className="step-section step-5">
            <div className="step-header">
              <div className="step-icon">✅</div>
              <h2 className="step-title">Bước 5: Hoàn tất thủ tục và ra viện</h2>
            </div>
            <ul className="step-content">
              <li>Người bệnh hoàn tất toàn bộ thủ tục khám và xét nghiệm (Nhận thuốc nếu có) và ra viện.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Thutucxuatvien