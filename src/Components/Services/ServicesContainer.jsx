import React from 'react'
import { PhoneCall, CalendarClock, Users, MailSearch } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesContainer = () => {
  const services = [
    {
      icon: <PhoneCall size={40} color="#069242" strokeWidth={1} />,
      title: 'Gọi tổng đài',
      subtitle: 'Đặt lịch khám qua tổng đài 0974.225.225',
      path: '/call-center'
    },
    {
      icon: <CalendarClock size={40} color="#23b26b" strokeWidth={1} />,
      title: 'Đặt lịch khám',
      subtitle: 'Đặt lịch khám online tại website',
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
  )
}

export default ServicesContainer

