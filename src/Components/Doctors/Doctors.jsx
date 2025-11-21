
import React, { useState } from 'react'
import { UserCheck, ClipboardCheck, Ambulance, HeartHandshake } from 'lucide-react'
import Doctor1 from './Images/Doctor1.png'
import Doctor2 from './Images/Doctor2.png'
import './Doctors.css'

const Doctors = () => {
  const images = [Doctor1, Doctor2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const features = [
    {
      icon: <UserCheck size={48} />,
      title: 'Đội ngũ bác sĩ chuyên môn cao',
      desc:
        'Đội ngũ bác sĩ của chúng tôi có chuyên môn cao, nhiều năm kinh nghiệm và luôn sẵn sàng tư vấn, chăm sóc bệnh nhân tận tâm, chuyên nghiệp.',
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: 'Quy trình chuyên nghiệp',
      desc:
        'Tại Bệnh viện quân y 4, chúng tôi tiêu chuẩn hóa quy trình khám chữa bệnh, tối ưu thời gian chờ và nâng cao trải nghiệm người bệnh.',
    },
    {
      icon: <Ambulance size={48} />,
      title: 'Cơ sở vật chất hiện đại nhất ',
      desc:
        'Trang thiết bị tiên tiến, không gian sạch sẽ, thân thiện, đảm bảo môi trường khám chữa bệnh an toàn và thoải mái.',
    },
    {
      icon: <HeartHandshake size={48} />,
      title: 'Dịch vụ cao cấp với chi phí tốt',
      desc:
        'Hỗ trợ đặt lịch trực tuyến, tư vấn 24/7 qua hotline và website, giúp tiết kiệm thời gian với chi phí minh bạch, hợp lý.',
    },
  ]

  return (

    <section className="doctors-section">
      <div className="doctors-intro">
        <h2 className="intro-title">Bệnh viện quân y 4 - Cục hậu cần kỹ thuật Quân Khu 4</h2>
        <p className="intro-desc">
          Tại Bệnh viện chúng tôi cam kết mang đến cho bệnh nhân những dịch vụ chăm sóc sức khỏe tốt nhất. Với tầm nhìn trở thành một trong những bệnh viện hàng đầu trong khu vực, chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ, đầu tư công nghệ tiên tiến và xây dựng đội ngũ bác sĩ, y tá chuyên nghiệp và tận tâm.
        </p>
      </div>


      <div className="doctors-layout">
        <div className="hospital-image-wrapper">
          <img 
            src={images[currentImageIndex]} 
            alt={`Bệnh viện Đa Khoa Happy Health - Ảnh ${currentImageIndex + 1}`} 
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

        <div className="features-grid">
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
      </div>

    </section>
  )
}



export default Doctors
