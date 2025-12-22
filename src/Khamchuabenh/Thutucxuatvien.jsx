import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './Khamchuabenh.css'
import '../Components/NewsEvents/NewsEvents.css'

const Thutucxuatvien = () => {
  return (
    <div className="khamchuabenh-page">
      <Navbar />
      <main className="khamchuabenh-main">
        <div className="khamchuabenh-container">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Khám chữa bệnh</p>
              <h2 className="news-main-title">|   Thủ tục xuất viện</h2>
            </div>
          </div>
          <h1 className="khamchuabenh-title">
            🌿 HƯỚNG DẪN THỦ TỤC XUẤT VIỆN
          </h1>

        
          <section className="step-section step-1">
            <div className="step-header">
              <div className="step-icon">📋</div>
              <h2 className="step-title">Bước 1</h2>
            </div>
            <ul className="step-content">
              <li>Người bệnh sẽ được bác sĩ điều trị hoặc điều dưỡng trưởng khoa thông báo thời gian dự kiến xuất viện.</li>
            </ul>
          </section>

          <section className="step-section step-2">
            <div className="step-header">
              <div className="step-icon">📄</div>
              <h2 className="step-title">Bước 2</h2>
            </div>
            <ul className="step-content">
              <li>
                Sau khi người bệnh hoàn tất trả quân tư trang, điều dưỡng trưởng khoa sẽ:
                <ul className="sub-list">
                  <li>Cấp giấy thanh toán ra viện</li>
                  <li>Hướng dẫn người bệnh đến khu vực thanh toán tại sảnh tầng 1 – Khoa Khám bệnh</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="step-section step-3">
            <div className="step-header">
              <div className="step-icon">💰</div>
              <h2 className="step-title">Bước 3</h2>
            </div>
            <ul className="step-content">
              <li>
                Người bệnh nộp giấy thanh toán tại các quầy:
                <ul className="sub-list">
                  <li>Ô cửa số 8 (dành cho bệnh nhân BHYT)</li>
                  <li>Ô cửa số 9 (dành cho đối tượng quân nhân)</li>
                </ul>
              </li>
              <li style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="clock-icon">🕐</span>
                <span><strong>Thời gian bắt đầu thanh toán: từ 8h30 sáng</strong></span>
              </li>
            </ul>
          </section>

          <section className="step-section step-4">
            <div className="step-header">
              <div className="step-icon">📦</div>
              <h2 className="step-title">Bước 4</h2>
            </div>
            <ul className="step-content">
              <li>
                Sau khi hoàn thành thanh toán, người bệnh sẽ nhận:
                <ul className="sub-list documents-list">
                  <li>
                    <span className="document-icon">📄</span>
                    Giấy ra viện
                  </li>
                  <li>
                    <span className="document-icon">📄</span>
                    Thẻ BHYT
                  </li>
                  <li>
                    <span className="document-icon">📄</span>
                    CCCD
                  </li>
                </ul>
                tại quầy thanh toán.
              </li>
            </ul>
          </section>

          <section className="step-section step-5">
            <div className="step-header">
              <div className="step-icon">✅</div>
              <h2 className="step-title">Bước 5</h2>
            </div>
            <ul className="step-content">
              <li>Người bệnh hoàn tất toàn bộ thủ tục và ra viện.</li>
            </ul>
          </section>
          <div className="closing-message">
            Trân trọng cảm ơn và chúc Quý bệnh nhân sức khỏe! ❤️
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Thutucxuatvien