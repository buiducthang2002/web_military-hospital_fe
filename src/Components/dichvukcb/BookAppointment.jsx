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
      name: 'Nội tổng hợp',
      icon: kcb1
    },
    {
      id: 2,
      name: 'Ngoại tổng hợp',
      icon: kcb2
    },
    {
      id: 3,
      name: 'Tai mũi họng',
      icon: kcb3
    },
    {
      id: 4,
      name: 'Răng hàm mặt',
      icon: kcb4
    },
    {
      id: 5,
      name: 'Mắt',
      icon: kcb5
    },
    {
      id: 6,
      name: ' Nhiệt đới',
      icon: kcb6
    },
    {
      id: 7,
      name: 'Ung bướu',
      icon: kcb7
    },
    {
      id: 8,
      name: 'Nhi',
      icon: kcb8
    },
    {
    id: 9,
      name: 'Bỏng',
      icon: kcb8
    },
    {
      id: 10,
      name: 'Tâm thần kinh',
      icon: kcb8
    },
    {
      id: 11,
    name: 'Đái tháo đường',
      icon: kcb8
    },
    {
      id: 12,
      name: 'Tim mạch',
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
                Bệnh viện Quân y 4 cung cấp nhiều dịch vụ khám chữa bệnh chất lượng, đáp ứng nhu cầu chăm sóc sức khỏe của cộng đồng.
              </p>
            </div>
      <div className="services-section">
        <div className="services-containerA ">
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
