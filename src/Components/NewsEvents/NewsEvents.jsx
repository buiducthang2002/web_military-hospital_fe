import { useState } from 'react'
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


const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

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
        image: anh1,
        title: 'Tin tức y học thế giới 1',
        date: '11/4/2025'
      },
      {
        image: anh2,
        title: 'Tin tức y học thế giới 2',
        date: '11/4/2025'
      },
      {
        image: anh3,
        title: 'Tin tức y học thế giới 3',
        date: '11/4/2025'
      },
      {
        image: anh4,
        title: 'Tin tức y học thế giới 4',
        date: '11/4/2025'
      },
      {
        image: anh6,
        title: 'Tin tức y học thế giới 5',
        date: '12/4/2025'
      },
      {
        image: anh7,
        title: 'Tin tức y học thế giới 6',
        date: '12/4/2025'
      },
      {
        image: anh8,
        title: 'Tin tức y học thế giới 7',
        date: '12/4/2025'
      },
      {
        image: anh9,
        title: 'Tin tức y học thế giới 8',
        date: '12/4/2025'
      },
    ],
    1: [ // Tin tức y học trong nước
      {
        image: anh10,
        title: 'Tin tức y học trong nước 1',
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
      {
        image: anh6,
        title: 'Tin tức y học trong nước 5',
        date: '12/4/2025'
      },
      {
        image: anh7,
        title: 'Tin tức y học trong nước 6',
        date: '12/4/2025'
      },
      {
        image: anh8,
        title: 'Tin tức y học trong nước 7',
        date: '12/4/2025'
      },
      {
        image: anh9,
        title: 'Tin tức y học trong nước 8',
        date: '12/4/2025'
      },
    ],
    2: [ // Tin tức hoạt động bệnh viện
      {
        image: anh1,
        title: 'Tin tức hoạt động bệnh viện 1',
        date: '11/4/2025'
      },
      {
        image: anh2,
        title: 'Tin tức hoạt động bệnh viện 2',
        date: '11/4/2025'
      },
      {
        image: anh3,
        title: 'Tin tức hoạt động bệnh viện 3',
        date: '11/4/2025'
      },
      {
        image: anh4,
        title: 'Tin tức hoạt động bệnh viện 4',
        date: '11/4/2025'
      },
      {
        image: anh6,
        title: 'Tin tức hoạt động bệnh viện 5',
        date: '12/4/2025'
      },
      {
        image: anh7,
        title: 'Tin tức hoạt động bệnh viện 6',
        date: '12/4/2025'
      },
      {
        image: anh8,
        title: 'Tin tức hoạt động bệnh viện 7',
        date: '12/4/2025'
      },
      {
        image: anh9,
        title: 'Tin tức hoạt động bệnh viện 8',
        date: '12/4/2025'
      },
    ],
    3: [ // Bài viết chuyên môn
      {
        image: anh1,
        title: 'Bài viết chuyên môn 1',
        date: '11/4/2025'
      },
      {
        image: anh2,
        title: 'Bài viết chuyên môn 2',
        date: '11/4/2025'
      },
      {
        image: anh3,
        title: 'Bài viết chuyên môn 3',
        date: '11/4/2025'
      },
      {
        image: anh4,
        title: 'Bài viết chuyên môn 4',
        date: '11/4/2025'
      },
      {
        image: anh6,
        title: 'Bài viết chuyên môn 5',
        date: '12/4/2025'
      },
      {
        image: anh7,
        title: 'Bài viết chuyên môn 6',
        date: '12/4/2025'
      },
      {
        image: anh8,
        title: 'Bài viết chuyên môn 7',
        date: '12/4/2025'
      },
      {
        image: anh9,
        title: 'Bài viết chuyên môn 8',
        date: '12/4/2025'
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
              <div className="news-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-image"
                />
              </div>
              <div className="news-content">
                <h4 className="news-title">{item.title}</h4>
                <p className="news-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

        </div>
      </div>
    </div>
  )
}

export default NewsEvents

