import { PhoneCall, CalendarClock, Users, MailSearch } from 'lucide-react'
import { Link } from 'react-router-dom'

import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <PhoneCall size={40} color="#109832" strokeWidth={1} />,
      title: 'Gọi tổng đài',
      subtitle: 'Đặt lịch khám qua tổng đài 0974.225.225',
      path: '/call-center'
    },
    {
      icon: <CalendarClock size={40} color="#109832" strokeWidth={1} />,
      title: 'Đặt lịch khám',
      subtitle: 'Đặt lịch khám online tại website',
      path: '/book-appointment'
    },
    {
      icon: <Users size={40} color="#109832" strokeWidth={1} />,
      title: 'Hỏi đáp cùng chuyên gia',
      subtitle: 'Giải đáp thắc mắc về sức khoẻ',
      path: '/expert-consultation'
    },
    {
      icon: <MailSearch size={40} color="#109832" strokeWidth={1} />,
      title: 'Kết quả khám',
      subtitle: 'Tra cứu kết quả xét nghiệm',
      path: '/check-results'
    }
  ]

  return (
    <div className="services-section">
      <div className="services-container">
        {services.map(service => (
          <Link
            key={service.title}
            to={service.path}
            className="service-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="services-info">
        <div className="info-left">
          <h2 className="info-title">Chuyên nghiệp - An toàn - Hiệu quả - Tin cậy</h2>
          <p className="info-slogan">
            Sức khỏe <span className="highlight">Hôm nay</span> - Niềm tin <span className="highlight">Tương lai</span>
          </p>
        </div>

        <div className="info-right">
          <p className="info-description">
            Bệnh viện Quân y 4 là bệnh viện hoàn chỉnh tại Việt Nam, với tầm nhìn trở thành bệnh viện uy tín trong khu vực. 
            Chúng tôi cam kết chăm sóc sức khỏe toàn diện cho mọi người dân bằng tài năng, y đức và sự tận tâm....... 
            <button className="read-more-btn">Xem thêm</button>
          </p>

         
        </div>
      </div>
    </div>
  )
}

export default Services
