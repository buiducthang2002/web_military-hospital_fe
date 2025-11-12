import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './Doctors.css'
// Import ảnh từ thư mục Images (20 ảnh)
import doctor1 from './Images/doctor1.png'
import doctor2 from './Images/doctor2.png'
import doctor3 from './Images/doctor3.png'
import doctor4 from './Images/doctor4.png'
import doctor5 from './Images/doctor5.png'
import doctor6 from './Images/doctor6.png'
import doctor7 from './Images/doctor7.png'
import doctor8 from './Images/doctor8.png'
import doctor9 from './Images/doctor9.png'
import doctor10 from './Images/doctor10.png'
import doctor11 from './Images/doctor11.png'
import doctor12 from './Images/doctor12.png'
import doctor13 from './Images/doctor13.png'
import doctor14 from './Images/doctor14.png'
import doctor15 from './Images/doctor15.png'
import doctor16 from './Images/doctor16.png'
import doctor17 from './Images/doctor17.png'
import doctor18 from './Images/doctor18.png'
import doctor19 from './Images/doctor19.png'
import doctor20 from './Images/doctor20.png'

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const doctorsPerPage = 4
  const totalPages = 5

  // Danh sách thông tin 20 bác sĩ - Bạn có thể chỉnh sửa position và name ở đây
  const allDoctors = [
    { image: doctor1, position: 'Giám đốc Bệnh Viện', name: 'Bác sỹ CKII: Nguyễn Văn A' },
    { image: doctor2, position: 'Phó khoa', name: 'Trần Thị B' },
    { image: doctor3, position: 'Bác sĩ chuyên khoa', name: 'Lê Văn C' },
    { image: doctor4, position: 'Trưởng khoa', name: 'Phạm Thị D' },
    { image: doctor5, position: 'Bác sĩ', name: 'Hoàng Văn E' },
    { image: doctor6, position: 'Phó khoa', name: 'Vũ Thị F' },
    { image: doctor7, position: 'Bác sĩ chuyên khoa', name: 'Đặng Văn G' },
    { image: doctor8, position: 'Trưởng khoa', name: 'Bùi Thị H' },
    { image: doctor9, position: 'Bác sĩ', name: 'Ngô Văn I' },
    { image: doctor10, position: 'Phó khoa', name: 'Đỗ Thị K' },
    { image: doctor11, position: 'Bác sĩ chuyên khoa', name: 'Lý Văn L' },
    { image: doctor12, position: 'Trưởng khoa', name: 'Võ Thị M' },
    { image: doctor13, position: 'Bác sĩ', name: 'Phan Văn N' },
    { image: doctor14, position: 'Phó khoa', name: 'Trương Thị O' },
    { image: doctor15, position: 'Bác sĩ chuyên khoa', name: 'Dương Văn P' },
    { image: doctor16, position: 'Trưởng khoa', name: 'Lưu Thị Q' },
    { image: doctor17, position: 'Bác sĩ', name: 'Tôn Văn R' },
    { image: doctor18, position: 'Phó khoa', name: 'Vương Thị S' },
    { image: doctor19, position: 'Bác sĩ chuyên khoa', name: 'Tăng Văn T' },
    { image: doctor20, position: 'Trưởng khoa', name: 'Hồ Thị U' }
  ]

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
      <div className="doctors-header">
        <h3 className="doctors-label">BÁC SỸ</h3>
        <h2 className="doctors-title">Đội ngũ bác sỹ & chuyên gia</h2>
        <p className="doctors-description">
          Hơn 100 bác sĩ, đội ngũ hàng đầu cùng với hơn 200 nhân viên y tế tận tâm, sẵn sàng phục vụ và chăm sóc sức khỏe cho mỗi bệnh nhân
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

