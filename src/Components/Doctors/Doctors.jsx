
import React, { useState, useEffect } from 'react'
import { UserCheck, ClipboardCheck, Ambulance, HeartHandshake } from 'lucide-react'
import Doctor1 from './Images/Doctor1.png'
import Doctor2 from './Images/Doctor2.png'
import './Doctors.css'

const Doctors = () => {
  const images = [Doctor1, Doctor2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 9000) 

    return () => clearInterval(interval) 
  }, [images.length])

  const features = [
    {
      icon: <UserCheck />,
      title: 'Đội ngũ chuyên gia đầu ngành ',
      desc:
        'Đội ngũ bác sĩ của chúng tôi có chuyên môn cao, nhiều năm kinh nghiệm và luôn sẵn sàng tư vấn, chăm sóc bệnh nhân tận tâm, chuyên nghiệp',
    },
    {
      icon: <ClipboardCheck />,
      title: 'Quy trình chuẩn hóa, nhanh chóng',
      desc:
        'Hệ thống quản lý khoa học giúp tối ưu hóa thủ tục hành chính, rút ngắn thời gian chờ đợi và đảm bảo độ chính xác trong từng bước thăm khám',
    },
    {
      icon: <Ambulance />,
      title: 'Hệ thống hạ tầng đồng bộ',
      desc:
        'Không gian điều trị khang trang, sạch sẽ theo tiêu chuẩn y tế, tạo cảm giác an tâm và gần gũi cho người bệnh',
    },
     {
      icon: <Ambulance />,
      title: 'Kỹ thuật y khoa tiên tiến',
      desc:
        'Chủ động cập nhật và ứng dụng những phương pháp điều trị hiện đại, giúp nâng cao tỷ lệ thành công và rút ngắn thời gian hồi phục',
    },
    {
      icon: <HeartHandshake />,
      title: 'Dịch vụ với chi phí tốt',
      desc:
        'Mọi danh mục dịch vụ đều được niêm yết rõ ràng; hỗ trợ thanh toán bảo hiểm đúng quy định, giúp bệnh nhân yên tâm về tài chính',
    },
  ]

  return (
    <section className="doctors-section">
     

      <div className="doctors-layout">
        <div className="doctors-features-list">
          {features.map((f, i) => (
            <div className="doctors-feature-item" key={i}>
              <div className="doctors-feature-icon">{f.icon}</div>
              <div className="doctors-feature-content">
                <h4 className="doctors-feature-title">{f.title}</h4>
                <p className="doctors-feature-desc">{f.desc}</p>
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
Sức mạnh cốt lõi của Bệnh viện Quân y 4 nằm ở đội ngũ y bác sĩ những trí tuệ ưu tú từng được tôi luyện và khẳng định tài năng tại các cơ sở y tế danh tiếng nhất Việt Nam. Không chỉ tự hào với bảng thành tích chuyên môn xuất sắc và những công trình nghiên cứu giá trị, mỗi bác sĩ tại đây còn là một tấm gương về sự tận tụy, luôn lấy sự an tâm và hồi phục của thân chủ làm kim chỉ nam cho mọi hành động</p>          
          </div>
        </div>
      </div>
    </section>
  )
}



export default Doctors