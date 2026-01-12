import { Link } from 'react-router-dom'
import './NewsBoard.css'
import { FiClock, FiChevronRight } from 'react-icons/fi'



import ttbv61 from '../NewsEvents/Images/ttbv61.jpg'
import ttbv7 from '../NewsEvents/Images/ttbv7.jpg'
import ttbv52 from '../NewsEvents/Images/ttbv52.jpg'
import ttbv85 from '../NewsEvents/Images/ttbv85.jpg'
const newsData = {
  featuredNews: {
    title: 'BỆNH VIỆN QUÂN Y 4 VINH DỰ NHẬN THƯỞNG CỜ THI ĐUA CỦA THỦ TRƯỞNG BỘ QUỐC PHÒNG',
    time: '07/12/2025',
    image: ttbv61,
    link: '/news-events/tin-tuc-hoat-dong-benh-vien-6'
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
      title: 'Bệnh viện Quân y 4 hoàn thành tốt nhiệm vụ năm 2025',
      time: '04/12/2025',
      image: ttbv52,
      link: '/news-events/tin-tuc-hoat-dong-benh-vien-5'
    },
    {
      id: 3,
      title: 'Đảng ủy Bệnh viện Quân y 4 ra nghị quyết lãnh đạo thực hiện nhiệm vụ năm 2026',
      time: '02/12/2025',
      image: ttbv85,
      link: '/news-events/tin-tuc-hoat-dong-benh-vien-8'
    }
  ]
}

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
            <Link to={newsData.featuredNews.link} className="main-image-wrap">
              <img src={newsData.featuredNews.image} alt={newsData.featuredNews.title} />
            </Link>
            <div className="main-content">
              <Link to={newsData.featuredNews.link} className="main-title">
                {newsData.featuredNews.title}
              </Link>
              <div className="time-meta">
                <FiClock className="clock-icon" />
                <span>{newsData.featuredNews.time}</span>
              </div>
            </div>
          </div>

          <div className="sub-news-grid">
            {newsData.subNews.map((item) => (
              <div key={item.id} className="sub-news-card">
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
    
    </section>
  )
}

export default NewsBoard

