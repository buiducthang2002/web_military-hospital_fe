import { Link } from 'react-router-dom'
import { FiGlobe, FiMapPin } from 'react-icons/fi'
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


  const newsDataByTab = {
    0: [ // Sự kiện nổi bật thế giới
      {
        id: '33',
        slug: 'su-kien-noi-bat-the-gioi-1',
        image: sktg1,
        title: 'Sự cân bằng mong manh trong những thành tựu, cũng có thể tiềm ẩn…',      
        date: '17:05 18/06/2025',
        description: 'Ngay trong những thành tựu, cũng có thể tiềm ẩn không ít âu lo trong cuộc sống thường ngày…'
      },
      {
        id: '34',
        slug: 'su-kien-noi-bat-the-gioi-2',
        image: sktg2,
        title: 'Đợi chờ những hành động cụ thể đối với các vấn đề ở phạm vi quốc tế và toàn cầu',
        date: '17:05 18/06/2025',
        description: 'Đối với các vấn đề nóng bỏng ở phạm vi quốc tế và toàn cầu, điều thật sự quan trọng có lẽ không phải là những tuyên bố hay cam kết.'
      },
      {
        id: '35',
        slug: 'su-kien-noi-bat-the-gioi-3',
        image: sktg3,
        title: 'Mở rộng thêm những cánh cửa xuất hiện thêm những nỗ lực đáng chú ý',
        date: '17:05 18/06/2025',
        description: 'Đã xuất hiện thêm những nỗ lực đáng chú ý nhằm tăng cường cũng như mở rộng các cơ hội hợp tác và phát triển.'
      },
      {
        id: '36',
        slug: 'su-kien-noi-bat-the-gioi-4',
        image: sktg4,
        title: 'Hướng về phía tương lai những vấn đề nóng bỏng vẫn tồn tại',
        date: '17:05 18/06/2025',
        description: 'Những vấn đề nóng bỏng vẫn tồn tại, nhưng trong dòng chảy sự kiện quốc tế, những cơ hội hợp tác cũng vẫn luôn hiện hữu.'
      },

    ],
    1: [ 
      {
        id: '37',
        slug: 'su-kien-noi-bat-trong-nuoc-1',
        image: anhqh1,
        title: 'Cứu sống bệnh nhân ngừng tim 30 phút nhờ can thiệp mạch vành khẩn cấp',
        date: '17:05 18/06/2025',
        description: 'Ca cấp cứu thành công bệnh nhân ngừng tim 30 phút nhờ kỹ thuật can thiệp mạch vành khẩn cấp và sự phối hợp nhịp nhàng của đội ngũ y bác sĩ.'
      },
      {
        id: '38',
        slug: 'su-kien-noi-bat-trong-nuoc-2',
        image: anh11,
        title: 'Sự kiện nổi bật trong nước 2',
        date: '17:05 18/06/2025',
        description: 'Đây là mô tả ngắn về sự kiện nổi bật trong nước thứ hai...'
      },
      {
        id: '39',
        slug: 'su-kien-noi-bat-trong-nuoc-3',
        image: anh12,
        title: 'Sự kiện nổi bật trong nước 3',
        date: '17:05 18/06/2025',
        description: 'Đây là mô tả ngắn về sự kiện nổi bật trong nước thứ ba...'
      },
      {
        id: '40',
        slug: 'su-kien-noi-bat-trong-nuoc-4',
        image: anh13,
        title: 'Sự kiện nổi bật trong nước 4',
        date: '17:05 18/06/2025',
        description: 'Đây là mô tả ngắn về sự kiện nổi bật trong nước thứ tư...'
      },

    ],


  }

  const worldNews = newsDataByTab[0].slice(0, 4) // 4 sự kiện thế giới
  const domesticNews = newsDataByTab[1].slice(0, 4) // 4 sự kiện trong nước

  return (
    <div className="featured-events-section">
      <div className="news-events-container">
        <div className="news-header">
          <p className="news-label">Tin tức & Sự kiện</p>
        </div>

        <div className="news-dual-grid">
          {/* Bên trái: Sự kiện thế giới */}
          <div className="news-column">
            <h3 className="news-column-title">
              <FiGlobe className="column-icon" />
             Sự kiện nổi bật trong nước
            </h3>
            <div className="news-grid">
              {worldNews.map((item, index) => (
                <Link
                  key={index}
                  to={`/news-events/${item.slug}`}
                  className="news-card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="news-card">
                    <div className="news-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="news-image"
                      />
                    </div>
                    <div className="news-content">
                      <h4 className="news-title">{item.title}</h4>
                      <p className="news-date">🕐 {item.date}</p>
                      {item.description && (
                        <p className="news-description">{item.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bên phải: Sự kiện trong nước */}
          <div className="news-column">
            <h3 className="news-column-title">
              <FiMapPin className="column-icon" />
              Sự kiện nổi bật trong nước
            </h3>
            <div className="news-grid">
              {domesticNews.map((item, index) => (
                <Link
                  key={index}
                  to={`/news-events/${item.slug}`}
                  className="news-card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="news-card">
                    <div className="news-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="news-image"
                      />
                    </div>
                    <div className="news-content">
                      <h4 className="news-title">{item.title}</h4>
                      <p className="news-date">🕐 {item.date}</p>
                      {item.description && (
                        <p className="news-description">{item.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="news-pagination">
          <Link to="/news-events" className="view-more-text">
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedEvents

