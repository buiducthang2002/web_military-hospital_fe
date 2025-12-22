import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Video.css'
import anh6 from './Images/anh6.jpg'
import anh7 from './Images/anh7.jpg'
import anh8 from './Images/anh8.jpg'
import anh9 from './Images/anh9.jpg'
import anh13 from './Images/anh13.jpg'
import anh14 from './Images/anh14.jpg'
import anh15 from './Images/anh15.jpg'
import anh16 from './Images/anh16.jpg'

const toYouTubeEmbedUrl = (url) => {
  if (!url) return url

  try {
    const parsed = new URL(url)
    const host = parsed.hostname

    if (host.includes('youtu.be')) {
      const videoId = parsed.pathname.replace('/', '')
      const params = parsed.searchParams.toString()
      return `https://www.youtube.com/embed/${videoId}${params ? `?${params}` : ''}`
    }

    if (host.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        const videoId = parsed.searchParams.get('v')
        if (videoId) {
          const params = parsed.searchParams
          params.delete('v')
          const remaining = params.toString()
          return `https://www.youtube.com/embed/${videoId}${remaining ? `?${remaining}` : ''}`
        }
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return url
      }
    }
  } catch (error) {
    console.warn('Không thể chuyển đổi URL video:', url, error)
  }

  return url
}

const ITEMS_PER_PAGE = 4

const createVideo = (id, image, title, date, url) => ({
  id,
  image,
  title,
  date,
  embedUrl: toYouTubeEmbedUrl(url),
})

const VIDEO_CATEGORIES = [
  {
    name: 'Y học thường thức',
    videos: [
      createVideo('party-1', anh6, ' TOÀN CẢNH: Lễ diễu binh, diễu hành kỷ niệm 80 năm Cách mạng tháng Tám thành công và Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam bắt đầu từ 6h30 đến 10h, sáng thứ Ba, ngày 02/09.', '17:05 02/09/2025', 'https://www.youtube.com/watch?v=-WjOCaAa5bY'),
      createVideo('party-2', anh7, 'Các hình ảnh đẹp về lễ kỷ niệm ngày Quốc Khánh nước Cộng Hoà Xã Hội Chủ Nghĩa Việt Nam', '17:05 02/09/2025', 'https://www.youtube.com/shorts/_jCND91OX6M'),
      createVideo('party-3', anh8, 'Sự tham gia của các đội hình quốc tế trong một buổi lễ kỷ niệm không chỉ là một nghi thức trang trọng mà còn là một minh chứng sống động cho tinh thần đoàn kết, hữu nghị và hợp tác giữa các quốc gia ', '17:05 02/09/2025', 'https://www.youtube.com/watch?v=8lCB3Gb84D0'),
      createVideo('party-4', anh9, 'Các khối nữ chiến sĩ quân đội và công an tham gia tổng duyệt diễu binh, diễu hành A80 để lại nhiều ấn tượng đẹp cho người dân với sự vui vẻ, rạng rỡ, nhưng cũng nghiêm trang, hào hùng.', '17:05 02/09/2025', 'https://www.youtube.com/watch?v=AvZjVzK1Qls'),
    ],
  },
  {
    name: 'Sức khoẻ và đời sống',
    videos: [
      createVideo('medical-1', anh13, 'Tin tức y học trong nước 1', '17:05 18/06/2025', 'https://youtu.be/y99YgaQjgx4?si=KbfiUN5yyQqOdr9w'),
      createVideo('medical-2', anh14, 'Tin tức y học trong nước 2', '17:05 18/06/2025', 'https://www.youtube.com/embed/ysz5S6PUM-U'),
      createVideo('medical-3', anh15, 'Tin tức y học trong nước 3', '17:05 18/06/2025', 'https://www.youtube.com/embed/kXYiU_JCYtU'),
      createVideo('medical-4', anh16, 'Tin tức y học trong nước 4', '17:05 18/06/2025', 'https://www.youtube.com/embed/ScMzIvxBSi4'),
    ],
  },
]

const Video = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null)
  const location = useLocation()
  const isNewsEventsPage = location.pathname === '/news-events'

  const tabs = VIDEO_CATEGORIES.map((category) => category.name)
  const activeVideos = VIDEO_CATEGORIES[activeTab]?.videos ?? []
  const totalPages = Math.ceil(activeVideos.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const visibleVideos = activeVideos.slice(startIndex, endIndex)

  const resetSelection = () => setSelectedVideoUrl(null)

  const handleTabChange = (index) => {
    setActiveTab(index)
    setCurrentPage(1)
    resetSelection()
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    resetSelection()
  }

  const handleCardClick = (embedUrl) => {
    if (!embedUrl) return

    setSelectedVideoUrl((current) => (current === embedUrl ? null : embedUrl))
  }

  const handleCardKeyDown = (event, embedUrl) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    handleCardClick(embedUrl)
  }

  return (
    <>
      {selectedVideoUrl && (
        <div className="video-overlay" onClick={resetSelection}>
          <div className="video-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-close" onClick={resetSelection}>
              ×
            </button>
            <div className="video-modal-player">
              <iframe
                src={selectedVideoUrl}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="video-section">
        <div className="news-events-container">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Thư viện video</p>

            </div>
            <div className="news-tabs">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`news-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => handleTabChange(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="news-grid">
            {visibleVideos.map(({ id, image, title, date, embedUrl }) => {
              const isActive = embedUrl && selectedVideoUrl === embedUrl

              return (
                <div
                  key={id}
                  className={`news-card ${isActive ? 'active' : ''}`}
                  onClick={() => handleCardClick(embedUrl)}
                  onKeyDown={(event) => handleCardKeyDown(event, embedUrl)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="news-image-wrapper">
                    <img src={image} alt={title} className="news-image" />
                  </div>
                  <div className="news-content">
                    <h4 className="news-title">{title}</h4>
                    <p className="news-date">{date}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="news-pagination">
            {isNewsEventsPage ? (
              Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
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
    </>
  )
}

export default Video

