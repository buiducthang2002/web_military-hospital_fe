import React from 'react'
import Navbar from '../Navbar/Navbar'
import './BookAppointment.css'

// Import các ảnh icons
import kcb1 from './Images/kcb1.png'
import kcb2 from './Images/kcb2.png'
import kcb3 from './Images/kcb3.png'
import kcb4 from './Images/kcb4.png'
import kcb5 from './Images/kcb5.png'
import kcb6 from './Images/kcb6.png'
import kcb7 from './Images/kcb7.png'
import kcb8 from './Images/kcb8.png'

const BookAppointment = () => {
  const services = [
    {
      id: 1,
      name: 'Dinh dưỡng',
      icon: kcb1
    },
    {
      id: 2,
      name: 'Sơ sinh',
      icon: kcb2
    },
    {
      id: 3,
      name: 'Tiêu hóa',
      icon: kcb3
    },
    {
      id: 4,
      name: 'Răng hàm mặt',
      icon: kcb4
    },
    {
      id: 5,
      name: 'Lây nhiễm',
      icon: kcb5
    },
    {
      id: 6,
      name: 'Da liễu',
      icon: kcb6
    },
    {
      id: 7,
      name: 'Hô hấp',
      icon: kcb7
    },
    {
      id: 8,
      name: 'Tai, Mũi, Họng',
      icon: kcb8
    },
    {
    id: 9,
      name: 'Nội khoa',
      icon: kcb8
    },
    {
      id: 10,
      name: 'Tai, Mũi, Họng',
      icon: kcb8
    },
    {
      id: 11,
    name: 'Nội tiết',
      icon: kcb8
    },
    {
      id: 12,
      name: 'Tai, Mũi, Họng',
      icon: kcb8
    },
  ]

  return (
    <div className="book-appointment-page">
      <Navbar />
      <div className="services-info-card">
              <h1 className="services-title">
                Những dịch vụ khám tại bệnh viện Quân y 4
              </h1>
              <p className="services-description">
                Happy Health cung cấp nhiều dịch vụ khám chữa bệnh chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của cộng đồng.
              </p>
            </div>
      <div className="services-section">
        <div className="services-container">
          <div className="services-content-wrapper">

            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon-wrapper">
                    <img 
                      src={service.icon}
                      alt={service.name}
                      className="service-icon"
                    />
                  </div>
                  <p className="service-label">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookAppointment
