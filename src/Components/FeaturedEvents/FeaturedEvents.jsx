import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './FeaturedEvents.css'

import anh11 from './Images/anh11.jpg'
import anh12 from './Images/anh12.jpg'
import anh13 from './Images/anh13.jpg'
import anhqh1 from './Images/anhqh1.jpg'
import sktg1 from './Images/sktg1.jpg'
import sktg2 from './Images/sktg2.jpg'
import sktg3 from './Images/sktg3.jpg'
import sktg4 from './Images/sktg4.png'


const FeaturedEvents = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const isNewsEventsPage = location.pathname === '/news-events'

  const tabs = [
    'Sự kiện nổi bật thế giới',
    'Sự kiện nổi bật trong nước',

  ]

  // Dữ liệu tin tức cho từng tab
  const newsDataByTab = {
    0: [ // Tin tức y học thế giới
      {
        image: sktg1,
        title: 'Sự cân bằng mong manh',
        
        date: '11/4/2025'
      },
      {
        image: sktg2,
        title: 'Đợi chờ những hành động cụ thể',
        date: '11/4/2025'
      },
      {
        image: sktg3,
        title: 'Mở rộng thêm những cánh cửa',
        date: '11/4/2025'
      },
      {
        image: sktg4,
        title: 'Hướng về phía tương lai',
        date: '11/4/2025'
      },


    ],
    1: [ // Tin tức y học trong nước
      {
        image: anhqh1,
        title: 'Cứu sống bệnh nhân ngừng tim 30 phút nhờ can thiệp mạch vành khẩn cấp',
        date: '11/4/2025'
      },
      {
        image: anh11,
        title: 'Tin tức y học trong nước 2',
        date: '11/4/2025'
      },
      {
        image: anh12,
        title: 'Tin tức y học trong nước 3',
        date: '11/4/2025'
      },
      {
        image: anh13,
        title: 'Tin tức y học trong nước 4',
        date: '11/4/2025'
      },

    ],


  }

  // Lấy dữ liệu cho tab hiện tại
  const allNewsItems = newsDataByTab[activeTab] || []
  const itemsPerPage = 4
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
    <div className="featured-events-section">
      <div className="news-events-container">
        <div className="news-header">
          <div className="news-header-left">
            <p className="news-label">Sự kiện nổi bật</p>
            <h2 className="news-main-title">| Sự kiện nổi bật</h2>
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

export default FeaturedEvents

