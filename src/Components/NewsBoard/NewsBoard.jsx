import { Link } from 'react-router-dom'
import './NewsBoard.css'
import { FiClock, FiChevronRight } from 'react-icons/fi'
import { useFeaturedArticles, useAnnouncements } from '../../lib/useHomepage'



import ttbv61 from '../NewsEvents/Images/ttbv61.jpg'
import phatcom1 from '../NewsEvents/Images/phatcom1.jpg'
import ttbv7 from '../NewsEvents/Images/ttbv7.jpg'

import ttbv85 from '../NewsEvents/Images/ttbv85.jpg'
const newsData = {
  featuredNews: {
    title: 'BỆNH VIÊN QUÂN Y 4 TỔ CHỨC CHƯƠNG TRÌNH PHÁT CHÁO TỪ THIỆN',
    time: '07/12/2025',
    image: phatcom1,
    link: '/news-events/tin-tuc-hoat-dong-benh-vien-9'
  },
  subNews: [
    {
      id: 1,
      title: 'Chuẩn bị chu đáo tham gia Hội thi Điều dưỡng viên toàn quân năm 2026',
      time: '06/12/2025',
      image: ttbv7,
      link: '/news-events/tin-tuc-hoat-dong-benh-vien-7'
    },
  {
      id: 2,
      title: 'Bệnh viện quân y 4 vinh dự nhận cờ thi đua của Thủ trưởng Bộ Quốc Phòng',
      time: '02/12/2025',
      image: ttbv61,
      link: '/news-events/tin-tuc-hoat-dong-benh-vien-6'
    },
    {
      id: 3,
      title: 'Đảng ủy Bệnh viện Quân y 4 ra nghị quyết lãnh đạo thực hiện nhiệm vụ năm 2026',
      time: '02/12/2025',
      image: ttbv85,
      link: '/news-events/tin-tuc-hoat-dong-benh-vien-8'
    },
  ]
}

const announcements = [
   {
    text: 'Thông báo:Thư mời báo giá Camera',
    time: '22/05/2026',
    link: '/thu-moi-bao-gia-camera.pdf'
  },
  {
    text: 'Thông báo: Lịch Sinh hoạt khoa học của các đơn vị trong Bệnh viện Quân y 4 từ ngày 08/12/2025 đến ngày 14/12/2025',
    time: '05/12/2025',
    link: ''
  },
  {
    text: 'Thông báo Kế hoạch Tổ chức đào tạo hướng dẫn thực hành khám bệnh, chữa bệnh 12/2025',
    time: '05/12/2025',
    link: ''
  },
  {
    text: 'Thông báo về việc thu hút nhân lực chất lượng cao tham gia triển khai, tổ chức và điều phối hoạt động chuyên môn tại các khoa, trung tâm trực thuộc BV',
    time: '28/11/2025',
    link: ''
  },
  {
    text: 'Thông báo về việc trúng tuyển và nhập học nghiên cứu sinh đợt II năm 2025',
    time: '21/11/2025',
    link: ''
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025',
    link: ''
  },
  {
    text: 'Một số cập nhật quỹ Nafosted (Quỹ phát triển Khoa học và Công nghệ quốc gia) - Hội đồng ứng dụng',
    time: '23/08/2025',
    link: ''
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025',
    link: ''
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025',
    link: ''
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025',
    link: ''
  }
]

// Map slug → image cho các bài cũ không có thumbnail trên Sanity
const STATIC_IMAGE_BY_SLUG = {
  'tin-tuc-hoat-dong-benh-vien-9': phatcom1,
  'tin-tuc-hoat-dong-benh-vien-7': ttbv7,
  'tin-tuc-hoat-dong-benh-vien-6': ttbv61,
  'tin-tuc-hoat-dong-benh-vien-8': ttbv85,
}

// PDF (file Sanity hoặc link .pdf) → mở trong trang xem tài liệu thay vì tải về
const isPdfLink = (url) => /\.pdf($|\?)/i.test(url) || url.includes('/files/')
const buildAnnounceHref = (url) =>
  isPdfLink(url) ? `/xem-tai-lieu?file=${encodeURIComponent(url)}` : url

const NewsBoard = () => {
  const { featured: sanityFeatured } = useFeaturedArticles(4)
  const { announcements: sanityAnnouncements } = useAnnouncements(10)

  // Build featured list: ưu tiên Sanity (kèm fallback ảnh static), fallback toàn bộ về hardcoded
  const featuredList = sanityFeatured.length > 0
    ? sanityFeatured.map((item) => ({
        ...item,
        image: item.image || STATIC_IMAGE_BY_SLUG[item.slug],
      }))
    : [newsData.featuredNews, ...newsData.subNews]

  const featuredMain = featuredList[0]
  const subFeatured = featuredList.slice(1, 4)

  // Announcements: ưu tiên Sanity, fallback hardcoded
  const announceList = sanityAnnouncements.length > 0 ? sanityAnnouncements : announcements

  return (
    <section className="newsboard-section">
      <div className="newsboard-container">
        <div className="newsboard-left">
          <div className="newsboard-header">
            <div className="title-with-bar">
              <span className="bar" />
              <span className="title">TIN NỔI BẬT</span>
            </div>
            <Link to="/news-events" className="see-more">
              XEM THÊM TIN <FiChevronRight /><FiChevronRight />
            </Link>
          </div>

          {featuredMain && (
            <div className="featured-main">
              <Link to={featuredMain.link} className="main-image-wrap">
                <img src={featuredMain.image} alt={featuredMain.title} />
              </Link>
              <div className="main-content">
                <Link to={featuredMain.link} className="main-title">
                  {featuredMain.title}
                </Link>
                <div className="time-meta">
                  <FiClock className="clock-icon" />
                  <span>{featuredMain.time}</span>
                </div>
              </div>
            </div>
          )}

          <div className="sub-news-grid">
            {subFeatured.map((item, idx) => (
              <div key={item.id || idx} className="sub-news-card">
                <Link to={item.link} className="sub-news-image">
                  <img src={item.image} alt={item.title} />
                </Link>
                <div className="sub-news-content">
                  <Link to={item.link} className="sub-news-title">
                    {item.title}
                  </Link>
                  <div className="time-meta">
                    <FiClock className="clock-icon" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="newsboard-right">
          <div className="newsboard-header">
            <div className="title-with-bar">
              <span className="bar" />
              <span className="title">THÔNG BÁO</span>
            </div>
            <Link to="/news-events" className="see-more">
              XEM THÊM THÔNG BÁO <FiChevronRight /><FiChevronRight />
            </Link>
          </div>

          <ul className="announce-list">
            {announceList.map((item, idx) => (
              <li key={item.id || idx} className="announce-item">
                <FiChevronRight className="announce-arrow" />
                <div className="announce-content">
                  {item.link ? (
                    <a
                      href={buildAnnounceHref(item.link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="announce-text announce-link"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <div className="announce-text">{item.text}</div>
                  )}
                  <div className="announce-time">
                    <FiClock className="clock-icon" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Running notification bar */}

    </section>
  )
}

export default NewsBoard

