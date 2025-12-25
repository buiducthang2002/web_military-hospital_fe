
import React, { useState, useEffect } from 'react'
import { UserCheck, ClipboardCheck, Ambulance, HeartHandshake } from 'lucide-react'
import Doctor1 from './Images/Doctor1.png'
import Doctor2 from './Images/Doctor2.png'
import './Doctors.css'

const Doctors = () => {
  const images = [Doctor1, Doctor2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Tự động chuyển ảnh sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 9000) // 9000ms = 9 giây

    return () => clearInterval(interval) // Cleanup khi component unmount
  }, [images.length])

  const features = [
    {
      icon: <UserCheck />,
      title: 'Bác sĩ giàu kinh nghiệm ',
      desc:
        'Đội ngũ bác sĩ của chúng tôi có chuyên môn cao, nhiều năm kinh nghiệm và luôn sẵn sàng tư vấn, chăm sóc bệnh nhân tận tâm, chuyên nghiệp.',
    },
    {
      icon: <ClipboardCheck />,
      title: 'Quy trình chuyên nghiệp',
      desc:
        'Tại Bệnh viện quân y 4, chúng tôi tiêu chuẩn hóa quy trình khám chữa bệnh, tối ưu thời gian chờ và nâng cao trải nghiệm người bệnh.',
    },
    {
      icon: <Ambulance />,
      title: 'Cơ sở vật chất hiện đại ',
      desc:
        'Trang thiết bị tiên tiến, không gian sạch sẽ, thân thiện, đảm bảo môi trường khám chữa bệnh an toàn và thoải mái.',
    },
     {
      icon: <Ambulance />,
      title: 'Ứng dụng công nghệ điều trị cao',
      desc:
        'Trang thiết bị tiên tiến, không gian sạch sẽ, thân thiện, đảm bảo môi trường khám chữa bệnh an toàn và thoải mái.',
    },
    {
      icon: <HeartHandshake />,
      title: 'Dịch vụ với chi phí tốt',
      desc:
        'Hỗ trợ đặt lịch trực tuyến, tư vấn 24/7 qua hotline và website, giúp tiết kiệm thời gian với chi phí minh bạch, hợp lý.',
    },
  ]

  return (
    <section className="doctors-section">
     

      <div className="doctors-layout">
        <div className="features-list">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-content">
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hospital-info-card">
          <div className="hospital-image-wrapper">
            <img
              src={images[currentImageIndex]}
              alt={`Bệnh viện Quân Y 4 - Ảnh ${currentImageIndex + 1}`}
              className="hospital-image"
            />
            <div className="image-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Chuyển sang ảnh ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="hospital-info-content">
          
            <p className="hospital-info-desc">
Sức mạnh cốt lõi của Bệnh viện Quân y 4 nằm ở đội ngũ y bác sĩ những trí tuệ ưu tú từng được tôi luyện và khẳng định tài năng tại các cơ sở y tế danh tiếng nhất Việt Nam. Không chỉ tự hào với bảng thành tích chuyên môn xuất sắc và những công trình nghiên cứu giá trị, mỗi bác sĩ tại đây còn là một tấm gương về sự tận tụy, luôn lấy sự an tâm và hồi phục của thân chủ làm kim chỉ nam cho mọi hành động            </p>
           
          </div>
        </div>
      </div>
    </section>
  )
}



export default Doctors
