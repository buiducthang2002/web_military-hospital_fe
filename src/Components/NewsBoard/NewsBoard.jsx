import { Link } from 'react-router-dom'
import './NewsBoard.css'
import { FiClock, FiChevronRight } from 'react-icons/fi'

import ttbv1 from '../NewsEvents/Images/ttbv1.jpg'
import ttbv2 from '../NewsEvents/Images/ttbv2.png'
import ttbv3 from '../NewsEvents/Images/ttbv3.jpg'
import ttbv4 from '../NewsEvents/Images/ttbv4.jpg'

const featuredNews = {
  title: 'Bệnh viện Quân y 4: Hướng tới sự hài lòng, niềm tin và sức khoẻ của khách hàng',
  time: '07/12/2025',
  image: ttbv1,
  link: '/news-events/tin-tuc-hoat-dong-benh-vien-1'
}

const subNews = [
  {
    id: 1,
    title: 'Bệnh viện Quân y 4: Tổ chức nhiều hoạt động hỗ trợ người bệnh',
    time: '06/12/2025',
    image: ttbv2,
    link: '/news-events/tin-tuc-hoat-dong-benh-vien-2'
  },
  {
    id: 2,
    title: 'Bệnh viện Quân y 4 tổ chức đánh giá bệnh án điện tử',
    time: '04/12/2025',
    image: ttbv3,
    link: '/news-events/tin-tuc-hoat-dong-benh-vien-3'
  },
  {
    id: 3,
    title: 'Bệnh viện Quân y 103 ký kết đào tạo và hỗ trợ chuyên môn với Bệnh viện Quân y 4"',
    time: '02/12/2025',
    image: ttbv4,
    link: '/news-events/tin-tuc-hoat-dong-benh-vien-4'
  }
]

const announcements = [
  {
    text: 'Thông báo: Lịch Sinh hoạt khoa học của các đơn vị trong Bệnh viện Quân y 4 từ ngày 08/12/2025 đến ngày 14/12/2025',
    time: '1 ngày trước'
  },
  {
    text: 'Thông báo Kế hoạch Tổ chức đào tạo hướng dẫn thực hành khám bệnh, chữa bệnh 12/2025',
    time: '05/12/2025'
  },
  {
    text: 'Thông báo về việc thu hút nhân lực chất lượng cao tham gia triển khai, tổ chức và điều phối hoạt động chuyên môn tại các khoa, trung tâm trực thuộc BV',
    time: '28/11/2025'
  },
  {
    text: 'Thông báo về việc trúng tuyển và nhập học nghiên cứu sinh đợt II năm 2025',
    time: '21/11/2025'
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025'
  },
  {
    text: 'Một số cập nhật quỹ Nafosted (Quỹ phát triển Khoa học và Công nghệ quốc gia) - Hội đồng ứng dụng',
    time: '23/08/2025'
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025'
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025'
  },
  {
    text: 'CƠ HỘI HỌC BỔNG TIẾN SĨ TOÀN PHẦN TẠI ĐỨC CHUYÊN NGÀNH TRUYỀN NHIỄM, DỊCH TỄ HỌC VÀ Y TẾ TOÀN CẦU',
    time: '16/10/2025'
  }
]

const NewsBoard = () => {
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

          <div className="featured-main">
            <Link to={featuredNews.link} className="main-image-wrap">
              <img src={featuredNews.image} alt={featuredNews.title} />
            </Link>
            <div className="main-content">
              <Link to={featuredNews.link} className="main-title">
                {featuredNews.title}
              </Link>
              <div className="main-meta">
                <FiClock className="clock-icon" />
                <span>{featuredNews.time}</span>
              </div>
            </div>
          </div>

          <div className="sub-news-grid">
            {subNews.map((item) => (
              <div key={item.id} className="sub-news-card">
                <Link to={item.link} className="sub-news-image">
                  <img src={item.image} alt={item.title} />
                </Link>
                <div className="sub-news-content">
                  <Link to={item.link} className="sub-news-title">
                    {item.title}
                  </Link>
                  <div className="sub-news-time">
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
            {announcements.map((item, idx) => (
              <li key={idx} className="announce-item">
                <FiChevronRight className="announce-arrow" />
                <div className="announce-content">
                  <div className="announce-text">{item.text}</div>
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
      <div className="notification-bar notification-bar-bottom">
        <div className="notification-content">
          <span className="notification-icon">⚕️</span>
          <span className="notification-text">
            Bệnh viện Quân y 4 - Luôn đồng hành cùng sức khỏe của bạn | 
            Đặt lịch khám qua Hotline: 0974.225.225 | 
            Khám bệnh Thứ 2 - Thứ 6: Sáng 7h30-11h30, Chiều 13h30-15h30 | 
            Cấp cứu 24/7 - Liên hệ: 0999999999
          </span>
        </div>
      </div>
    </section>
  )
}

export default NewsBoard

