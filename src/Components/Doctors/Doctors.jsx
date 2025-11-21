
import React, { useState } from 'react'
import { UserCheck, ClipboardCheck, Ambulance, HeartHandshake } from 'lucide-react'
import './Doctors.css'

import Doctor1 from './Images/Doctor1.png'
import Doctor2 from './Images/Doctor2.png'

const Doctors = () => {
 
  const images = [Doctor1, Doctor2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

 

  const features = [
    {
      icon: <UserCheck size={48} />,
      title: 'Đội ngũ bác sĩ chất lượng hàng đầu',
      desc:
        'Đội ngũ bác sĩ của chúng tôi được đào tạo chuyên sâu, có nhiều năm kinh nghiệm và luôn sẵn sàng tư vấn, chăm sóc bệnh nhân một cách tận tâm và chuyên nghiệp.',
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: 'Quy trình  khoa học - chuyên nghiệp',
      desc:
        'Tại Bệnh viện Quân y 4, chúng tôi cam kết cung cấp dịch vụ chăm sóc sức khỏe chất lượng cao thông qua quy trình làm việc khoa học và chuyên nghiệp.',
    },
    {
      icon: <Ambulance size={48} />,
      title: 'Cơ sở vật chất đạt chuẩn quốc gia ',
      desc:
        'Bệnh viện Quân y 4 được trang bị cơ sở vật chất hiện đại, sạch sẽ và thân thiện, đàm bảo môi trường an toàn và thoải mái cho bệnh nhân.',
    },
    {
      icon: <HeartHandshake size={48} />,
      title: 'Dịch vụ với chi phí hợp lý nhất',
      desc:
        'Chúng tôi khuyến khích bệnh nhân đặt lịch khám trực tuyến để tiết kiệm thời gian. Đội ngũ nhân viên sẵn sàng hỗ trợ bạn 24/7 qua hotline hoặc website.',
    },
  ]

  const totalPages = Math.ceil(allDoctors.length / doctorsPerPage)

  // Lấy bác sĩ cho page hiện tại (4 bác sĩ mỗi page)
  const startIndex = currentPage * doctorsPerPage
  const endIndex = startIndex + doctorsPerPage
  const currentDoctors = allDoctors.slice(startIndex, endIndex)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const handleStarClick = (starIndex) => {
    setCurrentPage(starIndex)
  }

  return (
    <div className="doctors-section">
      <div className="doctors-content-wrapper">
        <div className="doctors-header">
          <h3 className="doctors-label">BÁC SỸ</h3>
          <h2 className="doctors-title">Đội ngũ bác sỹ & chuyên gia y tế</h2>
          <p className="doctors-description">
          Với hơn 100 bác sĩ giàu kinh nghiệm, là những chuyên gia hàng đầu trong nhiều lĩnh vực chuyên khoa khác nhau, cùng đội ngũ hơn 200 nhân viên y tế tận tâm, được đào tạo bài bản và luôn đặt sức khỏe của người bệnh lên hàng đầu, chúng tôi tự hào mang đến dịch vụ khám chữa bệnh toàn diện, tận tình và chất lượng cao. Từng thành viên trong đội ngũ luôn sẵn sàng phục vụ, đồng hành và chăm sóc sức khỏe cho mỗi bệnh nhân bằng cả chuyên môn, y đức và lòng nhân ái......
          </p>
        </div>

        <div className="doctors-carousel">
        <button className="carousel-btn carousel-btn-left" onClick={handlePrev}>
          <ChevronLeft size={20} />
        </button>
    <section className="doctors-section">
      <div className="doctors-intro">
        <h2 className="intro-title">Military Hospital - Bệnh viện Quân y 4</h2>
        <p className="intro-desc">
          Tại Bệnh viện Quân y 4, chúng tôi cam kết mang đến cho bệnh nhân những dịch vụ chăm sóc sức khỏe chất lượng cao. Với tầm nhìn trở thành một trong những bệnh viện hàng đầu trong khu vực, chúng tôi không ngừng cải tiến chất lượng dịch vụ và đầu tư công nghệ hiện đại.
        </p>
      </div>

        <div className="doctors-grid">
          {currentDoctors.map((doctor, index) => {
            const doctorId = startIndex + index
            return (
              <div key={`doctor-${doctorId}`} className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="doctor-image"
                    onError={(e) => {
                      console.error('Error loading image:', doctor.image);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="doctor-info">
                  <h4 className="doctor-position">{doctor.position}</h4>
                  <p className="doctor-name">{doctor.name}</p>
                </div>
              </div>
            )
          })}
      <div className="doctors-layout">
        <div className="hospital-image-wrapper">
          <img 
            src={images[currentImageIndex]} 
            alt={`Bệnh viện Quân y 4 - Ảnh ${currentImageIndex + 1}`} 
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
