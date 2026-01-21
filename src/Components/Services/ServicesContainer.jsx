import React from 'react'
import { CalendarClock, Users, MailSearch } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesContainer = () => {
  const services = [
     {
      icon: <CalendarClock size={40} color="#23b26b" strokeWidth={1} />,
      title: 'Đặt lịch khám sức khoẻ',
      subtitle: 'Đặt lịch  tại website hoặc liên hệ tổng đài',
      path: 'https://40026.byt.vn/kcb/dang-ky-ksk',
      external: true
    },
    {
      icon: <CalendarClock size={40} color="#23b26b" strokeWidth={1} />,
      title: 'Đặt lịch khám theo yêu cầu',
      subtitle: 'Đặt lịch  tại website hoặc liên hệ tổng đài',
      path: '/book-appointment'
    },
    {
      icon: <Users size={40} color="#23b26b" strokeWidth={1} />,
      title: 'Hỏi đáp cùng chuyên gia',
      subtitle: 'Giải đáp thắc mắc về sức khoẻ',
      path: '/expert-consultation'
    },
    {
      icon: <MailSearch size={40} color="#23b26b" strokeWidth={1} />,
      title: 'Kết quả khám',
      subtitle: 'Tra cứu kết quả xét nghiệm',
      path: '/check-results'
    }
  ]

  return (
    <div className="services-container">
      {services.map(service => (
        service.external ? (
          <a
            key={service.title}
            href={service.path}
            target="_blank"
            rel="noopener noreferrer"
            className="service-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
            </div>
          </a>
        ) : (
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
        )
      ))}
    </div>
  )
}

export default ServicesContainer

