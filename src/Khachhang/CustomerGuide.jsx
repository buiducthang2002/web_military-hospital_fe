import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import './CustomerGuide.css'
import '../Components/NewsEvents/NewsEvents.css'



const quickLinks = [
  {
    title: 'Sơ đồ bệnh viện & khu điều trị',
    description: 'Dễ dàng tìm đến các khoa, phòng chức năng và khu điều trị khi mới đến viện.',
    cta: 'Xem sơ đồ',
    to: '',
  },
  {
    title: 'Đánh giá chất lượng khám chữa bệnh',
    description: 'Phản hồi nhanh về trải nghiệm dịch vụ để chúng tôi nâng cao chất lượng phục vụ.',
    cta: 'Gửi đánh giá',
    to: '',
  },
  {
    title: 'Hướng dẫn đặt lịch khám',
    description: 'Các bước đặt lịch khám trực tuyến hoặc qua tổng đài trong vài phút.',
    cta: 'Đặt lịch',
    to: '',
  },
  {
    title: 'Chuẩn bị hồ sơ & thủ tục',
    description: 'Danh sách giấy tờ, biểu mẫu cần thiết cho quá trình tiếp nhận và xuất viện.',
    cta: 'Xem hướng dẫn',
    to: '',
  },
]

const CustomerGuidePage = () => {
  return (
    <div className="customer-guide-page">
      <Navbar />
      <div className="customer-guide-page__hero">
        <div className="customer-guide-page__hero-content">
          <div className="news-header hero-news-header">
            <div className="news-header-left">
              <p className="news-label">Hướng dẫn khách hàng</p>
              <h2 className="news-main-title">| Dành cho khách hàng</h2>             
            </div>
            <p>Tài liệu, biểu mẫu và hướng dẫn giúp người bệnh chuẩn bị tốt nhất</p>
          </div>
          <h1>THÔNG TIN BỆNH VIÊN - QUY TRÌNH KHÁM BỆNH - HỖ TRỢ BỆNH NHÂN</h1>
          
        </div>
      </div>

      <section className="customer-guide-shortcuts">
        {quickLinks.map(link => (
          <a key={link.title} href={link.to} className="customer-guide-shortcut">
            <span>{link.title}</span>
            <p>{link.description}</p>
          </a>
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default CustomerGuidePage
