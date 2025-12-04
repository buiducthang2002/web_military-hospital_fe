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
    name: 'Công tác Đảng',
    videos: [
      createVideo('party-1', anh6, 'Lễ kỷ niệm 80 nằm ngày quốc khánh nước cộng hoà xã hội chủ nghĩa Việt Nam', '17:05 18/06/2025', 'https://youtu.be/nliSNYk__Zk?si=Pd7iaz6_EXiGN346'),
      createVideo('party-2', anh7, 'Các hình ảnh đẹp về lễ kỷ niệm ', '17:05 18/06/2025', 'https://youtu.be/y99YgaQjgx4?si=KbfiUN5yyQqOdr9w'),
      createVideo('party-3', anh8, 'Hình ảnh các đội hình quốc tế', '17:05 18/06/2025', 'https://www.youtube.com/embed/kXYiU_JCYtU'),
      createVideo('party-4', anh9, 'Khối nữ diệu hành', '17:05 18/06/2025', 'https://www.youtube.com/embed/ScMzIvxBSi4'), 
    ],
  },
  {
    name: 'Y khoa hiện đại',
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
              <h2 className="news-main-title">|   Video nổi bật</h2>
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

