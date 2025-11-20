import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './Doctors.css'
// Import ảnh từ thư mục Images (20 ảnh)
import gd1a from './Images/gd1a.png'
import gd2a from './Images/gd2a.png'
import gd3 from './Images/gd3.jpg'
import anhgd4vip from './Images/anhgd4vip.png'

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const doctorsPerPage = 4

  const allDoctors = [
    { image: gd1a                              , position: 'GĐ Bệnh Viện', name: 'Đại tá, Bác sỹ CKII: Nguyễn An Giang' },
    { image: gd2a, position: 'PGĐ Bệnh Viện', name: ' Đại tá, Bác sỹ CKII: Truong Quang Thắng' },
    { image: gd3, position: 'PGĐ Bệnh Viện', name: 'Thượng tá, Bác sỹ CKII: Phan Quoc Khanh' },
    { image: anhgd4vip, position: 'PGĐ Bệnh Viện', name: 'Thượng tá, Bác sỹ CKII: Nguyễn Huy Thắng' },
  
   
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
        </div>

        <button className="carousel-btn carousel-btn-right" onClick={handleNext}>
          <ChevronRight size={20} />
        </button>
        </div>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: totalPages }, (_, starIndex) => (
          <button
            key={`star-${starIndex}`}
            type="button"
            className="star-button"
            onClick={() => handleStarClick(starIndex)}
            aria-label={`Go to page ${starIndex + 1}`}
          >
            <Star
              size={16}
              className={`star-icon ${starIndex === currentPage ? 'star-filled' : 'star-outline'}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Doctors

