import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './Khamchuabenh.css'
import '../Components/NewsEvents/NewsEvents.css'

const Khamchuabenh = () => {
  return (
    <div className="khamchuabenh-page">
      <Navbar />
      <main className="khamchuabenh-main">
        <div className="khamchuabenh-container">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Khám chữa bệnh</p>
              <h2 className="news-main-title">|   Quy trình khám bệnh</h2>
            </div>
          </div>
          <h1 className="khamchuabenh-title">
          🏥 HƯỚNG DẪN LẤY SỐ VÀ ĐĂNG KÝ KHÁM BỆNH
          </h1>

          <section className="intro-section">
            <p className="intro-text">
              Kính gửi Quý Khách hàng. Quý khách vui lòng thực hiện lấy số thứ tự khám bệnh theo khung giờ sau:
            </p>
            <ul className="time-list">
              <li className="time-item">
                <span className="clock-icon">🕐</span>
                <span><strong>Từ 05h30 – 07h00:</strong> Lấy số thứ tự tại quầy số 02.</span>
              </li>
              <li className="time-item">
                <span className="clock-icon">🕐</span>
                <span><strong>Từ 07h00 trở đi:</strong> Lấy số thứ tự tại quầy tiếp đón.</span>
              </li>
            </ul>
            <p className="transition-text">
              Sau khi đã lấy số thứ tự tại quầy hoặc qua hệ thống tự động, Quý bệnh nhân vui lòng thực hiện theo các bước dưới đây:
            </p>
            <div className="arrow-down">↓</div>
          </section>

          <section className="step-section step-1">
            <div className="step-header">
              <div className="step-icon">📋</div>
              <h2 className="step-title">BƯỚC 1: THEO DÕI MÀN HÌNH VÀ LOA GỌI SỐ</h2>
            </div>
            <ul className="step-content">
              <li>Vui lòng theo dõi màn hình hiển thị số thứ tự hoặc loa phát thanh trong khu vực chờ.</li>
              <li>Khi nghe gọi đến số thứ tự của mình, Quý bệnh nhân nhanh chóng di chuyển đến đúng cửa tiếp nhận.</li>
            </ul>
          </section>

          <section className="step-section step-2">
            <div className="step-header">
              <div className="step-icon">🚪</div>
              <h2 className="step-title">BƯỚC 2: DI CHUYỂN ĐẾN CỬA TIẾP NHẬN THEO ĐỐI TƯỢNG KHÁM</h2>
            </div>
            <ul className="step-content">
              <li>
                <strong>Cửa số 3 & 4:</strong> Dành cho đối tượng khám thông thường, bao gồm:
                <ul className="sub-list">
                  <li>Bệnh nhân có thẻ BHYT đúng tuyến</li>
                  <li>Khám dịch vụ</li>
                  <li>Người dân không thuộc diện ưu tiên</li>
                </ul>
              </li>
              <li>
                <strong>Cửa số 5 & 6:</strong> Dành cho đối tượng ưu tiên, bao gồm:
                <ul className="sub-list">
                  <li>Thương binh, bệnh binh (≥ 81%)</li>
                  <li>Người cao tuổi (≥ 75 tuổi)</li>
                  <li>Cán bộ cao cấp quân đội đã về hưu</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="step-section step-3">
            <div className="step-header">
              <div className="step-icon">📄</div>
              <h2 className="step-title">BƯỚC 3: NỘP GIẤY TỜ CẦN THIẾT</h2>
            </div>
            <ul className="step-content">
              <li>
                Tại cửa tiếp nhận, Quý bệnh nhân vui lòng chuẩn bị và nộp:
                <ul className="sub-list documents-list">
                  <li>
                    <span className="document-icon">📄</span>
                    Thẻ bảo hiểm y tế (nếu có)
                  </li>
                  <li>
                    <span className="document-icon">📄</span>
                    Giấy tờ tùy thân (CMND/CCCD hoặc giấy tờ hợp lệ khác)
                  </li>
                  <li>
                    <span className="document-icon">📄</span>
                    Giấy chuyển tuyến (nếu khám BHYT trái tuyến)
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="note-section">
            <div className="note-header">
              <div className="warning-icon">⚠️</div>
              <h2 className="note-title">LƯU Ý</h2>
            </div>
            <ul className="note-content">
              <li>Vui lòng đến cửa tiếp nhận ngay khi được gọi, tránh lỡ lượt gây chậm trễ cho quá trình khám.</li>
              <li>Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ nhân viên hướng dẫn tại khu vực tiếp đón để được hỗ trợ.</li>
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

export default Khamchuabenh

