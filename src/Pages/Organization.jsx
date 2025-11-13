import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const sectionStyle = {
  width: '100%',
  padding: '60px 20px',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
}

const containerStyle = {
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
}

const cardStyle = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '28px 32px',
  boxShadow: '0 14px 38px -24px rgba(15, 94, 51, 0.35)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}

const headingStyle = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#136f3f',
}

const subheadingStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#0f5e33',
}

const textStyle = {
  fontSize: '16px',
  lineHeight: '1.75',
  color: '#1f2937',
}

const Organization = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden', background: '#f3faf6' }}>
      <Navbar />
      <main style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <header>
              <h1 style={headingStyle}>Cơ cấu tổ chức</h1>
              <p style={{ ...textStyle, color: '#4b5563', maxWidth: '780px' }}>
                Thông tin giới thiệu tổng quan về mô hình tổ chức, chức năng nhiệm vụ của các khoa phòng
                thuộc Bệnh viện Quân y 4. Các nội dung bên dưới có thể được cập nhật chi tiết hơn theo nhu cầu.
              </p>
            </header>

            <article style={cardStyle}>
              <h2 style={subheadingStyle}>Ban giám đốc</h2>
              <p style={textStyle}>
                - Giám đốc bệnh viện chịu trách nhiệm điều hành chung, hoạch định chiến lược phát triển và bảo đảm
                chất lượng khám chữa bệnh.<br />
                - Các Phó Giám đốc phụ trách từng lĩnh vực chuyên môn, chính trị và hậu cần, phối hợp triển khai nhiệm vụ
                trong toàn bệnh viện.
              </p>
            </article>

            <article style={cardStyle}>
              <h2 style={subheadingStyle}>Khối chuyên môn</h2>
              <p style={textStyle}>
                Bao gồm các khoa lâm sàng, cận lâm sàng và các trung tâm hỗ trợ chuyên sâu. Mỗi khoa phòng có trưởng khoa
                phụ trách chuyên môn, chịu trách nhiệm trực tiếp về hoạt động chuyên môn, đào tạo và nghiên cứu khoa học.
              </p>
            </article>

            <article style={cardStyle}>
              <h2 style={subheadingStyle}>Khối chức năng</h2>
              <p style={textStyle}>
                Gồm các phòng ban làm nhiệm vụ tham mưu, hậu cần, tài chính, chính trị và chăm sóc khách hàng. Khối chức
                năng bảo đảm vận hành hiệu quả, nâng cao trải nghiệm người bệnh và phối hợp với khối chuyên môn trong mọi
                hoạt động.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Organization


