import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NewsEvents.css'
import anh1 from './Images/anh1.jpg'
import anh2 from './Images/anh2.jpg'
import anh3 from './Images/anh4.jpg'
import anh4 from './Images/anh4.jpg'
import anh6 from './Images/anh6.jpg'
import anh7 from './Images/anh7.jpg'
import anh8 from './Images/anh8.jpg'
import anh9 from './Images/anh9.jpg'
import anh10 from './Images/anh10.jpg'
import anh11 from './Images/anh11.jpg'
import anh12 from './Images/anh12.jpg'
import anh13 from './Images/anh13.jpg'
import anhqh1 from './Images/anhqh1.jpg'
import anhqh3 from './Images/anhqh3.jpg'
import anhbonoivu from './Images/anhbonoivu.png'
import WHO from './Images/WHO.jpg'
import thuocla1 from './Images/thuocla1.jpg'
import yttg1 from './Images/yttg1.jpg'
import yttg41 from './Images/yttg41.jpg'
import ytvn2 from './Images/ytvn2.jpg'
import yhvn31 from './Images/yhvn31.jpg'
import yhvn41 from './Images/yhvn41.png'
import ttbv1 from './Images/ttbv1.jpg'
import ttbv2 from './Images/ttbv2.png'
import ttbv3 from './Images/ttbv3.jpg'
import ttbv4 from './Images/ttbv4.jpg'
import bvcm1 from './Images/bvcm1.jpeg'
import bvcm2 from './Images/bvcm2.jpg'
import bvcm3 from './Images/bvcm3.jpg'
import bvcm4 from './Images/bvcm4.jpg'

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const isNewsEventsPage = location.pathname === '/news-events'

  const tabs = [
    'Tin tức y học thế giới',
    'Tin tức y học trong nước',
    'Tin tức hoạt động bệnh viện',
    'Bài viết chuyên môn'
  ]

  // Dữ liệu tin tức cho từng tab
  const newsDataByTab = {
    0: [ // Tin tức y học thế giới
      {
        image: WHO,
        title: 'WHO khôi phục các dịch vụ y tế cơ bản và tiêm chủng cho trẻ em tại Gaza...',
        date: '11/4/2025'
      },
      {
        image: thuocla1,
        title: 'Tất cả các sản phẩm thuốc lá đều có hại cho sức khỏe',
        date: '11/4/2025'
      },
      {
        image: yttg1,
        title: 'Nguy cơ lây lan cao của virus Chikungunya',
        date: '11/4/2025'
      },
      {
        image: yttg41,
        title: 'Đại Hội đồng Y tế thế giới nhất trí trao thêm quyền cho Palestine',
        date: '11/4/2025'
      },
    ],
    1: [ // Tin tức y học trong nước
      {
        image: anhqh1,
        title: 'Trình UBTVQH Chương trình mục tiêu quốc gia về chăm sóc sức khỏe, dân số và phát triển giai đoạn 2026–2035',
        date: '11/4/2025'
      },
      {
        image: ytvn2,
        title: 'Thúc đẩy các nỗ lực loại trừ ung thư cổ tử cung tại Việt Nam',
        date: '11/4/2025'
      },
      {
        image: yhvn31,
        title: 'Ngành y tế Thành phố Hồ Chí Minh hướng về đồng bào vùng lũ',
        date: '11/4/2025'
      },
      {
        image: yhvn41,
        title: 'Bộ Y tế đề nghị tăng cường công tác phòng, chống dịch bệnh ứng phó với thiên tai',
        date: '11/4/2025'
      },
    ],
    2: [ // Tin tức hoạt động bệnh viện
      {
        image: ttbv1,
        title: 'Bệnh viện Quân y 4: Hướng tới sự hài lòng của người bệnh',
        date: '11/4/2025'
      },
      {
        image: ttbv2,
        title: 'Bệnh viện Quân y 4: Tổ chức nhiều hoạt động hỗ trợ người bệnh',
        date: '11/4/2025'
      },
      {
        image: ttbv3,
        title: 'Bệnh viện Quân y 4 tổ chức đánh giá bệnh án điện tử',
        date: '11/4/2025'
      },
      {
        image: ttbv4,
        title: 'Bệnh viện Quân y 103 ký kết đào tạo và hỗ trợ chuyên môn với Bệnh viện Quân y 4',
        date: '11/4/2025'
      },
      
    ],
    3: [ // Bài viết chuyên môn
      {
        image: bvcm1,
        title: 'Bé 7 tuổi mắc ung thư xương giữ được đôi chân nhờ công nghệ in 3D cá thể hóa',
        date: '11/4/2025'
      },
      {
        image: bvcm2,
        title: 'Ca mổ thay cùng lúc 2 khớp gối, bệnh nhân 67 tuổi chấm dứt hơn 10 năm đau đớn',
        date: '11/4/2025'
      },
      {
        image: bvcm3,
        title: 'Hành trình tìm lại nụ cười cho những phụ nữ nhiều năm sợ soi gương',
        date: '11/4/2025'
      },
      {
        image: bvcm4,
        title: '‘Cuộc marathon trong phòng mổ’ cứu sống bệnh nhân ung thư xương hiếm gặp',
        date: '11/4/2025'
      },
    ],
  }

  // Lấy dữ liệu cho tab hiện tại
  const allNewsItems = newsDataByTab[activeTab] || []
  const itemsPerPage = 8
  const totalPages = Math.ceil(allNewsItems.length / itemsPerPage)

  // Tính toán các items hiển thị dựa trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const newsItems = allNewsItems.slice(startIndex, endIndex)

  // Hàm xử lý khi chuyển tab - reset về trang 1
  const handleTabChange = (index) => {
    setActiveTab(index)
    setCurrentPage(1)
  }

  return (
    <div className="news-events-section">
      <div className="news-events-container">
        <div className="news-header">
          <div className="news-header-left">
            <p className="news-label">Tin tức & Sự kiện</p>
            <h2 className="news-main-title">|   Tin tức nổi bật</h2>
          </div>
          <div className="news-tabs">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`news-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabChange(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card">
              <Link to="/news-events" className="news-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-image"
                />
              </Link>
              <div className="news-content">
                <h4 className="news-title">{item.title}</h4>
                <p className="news-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-pagination">
          {isNewsEventsPage ? (
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))
          ) : (
            <Link to="/news-events" className="view-more-text">
              Xem thêm
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsEvents

