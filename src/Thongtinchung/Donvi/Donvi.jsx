import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Donvi.css'

const Donvi = () => {
  const departments = [
    'Ban Giám đốc',
    'Phòng Kế hoạch tổng hợp',
    'Phòng tham mưu hành chính',
    'Phòng hậu cần kỹ thuật',
    'Phòng chính trị',
    'Ban điều dưỡng',
    'Ban tài chính',
    'Ban công nghệ thông tin',
    ,
  ]
  const [activeDept, setActiveDept] = useState(departments[0])

  const departmentData = {
    'Ban Giám đốc': {
      head: 'Giám đốc: Nguyễn An Giang',
      duties: [
    'Giám đốc bệnh viện chịu trách nhiệm điều hành chung, hoạch định chiến lược phát triển và bảo đảm chất lượng khám chữa bệnh.',
    'Các Phó Giám đốc phụ trách từng lĩnh vực chuyên môn, chính trị và hậu cần, phối hợp triển khai nhiệm vụ trong toàn bệnh viện.',
      ],
    },
    'Phòng Kế hoạch tổng hợp': {
      head: 'Trưởng phòng: Trần Sơn',
      duties: [
        
      ],
    },
    'Phòng tham mưu hành chính': {
      head: 'Trưởng phòng: Trần Đức Sơn',
      duties: [
        
      ],
    },
    'Phòng hậu cần kỹ thuật': {
      head: 'Trưởng phòng: Nguyễn Duy Hồng',
      duties: [
        
      ],
    },
    'Phòng chính trị': {
      head: 'Trưởng phòng:Võ Xuân Thành',
      duties: [
        
      ],
      
    },
    'Ban điều dưỡng': {
      head: 'Trưởng phòng:Trần Hoàng',
      duties: [
        
      ],
    },
        'Ban tài chính': {
          head: 'Trưởng ban:Đặng Văn Mừng',
          duties: [
            
          ],
        },
          'Ban công nghệ thông tin': {
          head: 'Trưởng ban:Hoàng Đình Đồng',
          duties: [
            
          ],
        },
  }

  const current = departmentData[activeDept] || { head: 'Đang cập nhật', duties: [] }

  return (
    <div className="donvi-page">
      <Navbar />
      <main className="khamchuabenh-main">
        <div className="khamchuabenh-container">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Trang chủ</p>
              <h2 className="news-main-title">| Giới thiệu các đơn vị</h2>
            </div>
          </div>

          <div className="donvi-menu" role="tablist" aria-label="Danh sách khoa/ban">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                role="tab"
                aria-selected={activeDept === dept}
                className={`donvi-menu-item ${activeDept === dept ? 'active' : ''}`}
                onClick={() => setActiveDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          <section className="donvi-card">
            <div className="donvi-card-title">
              {current.head}
            </div>
            <div className="donvi-card-section-title">Chức năng nhiệm vụ</div>
            <ul className="donvi-list">
              {current.duties.length > 0 ? (
                current.duties.map((duty, idx) => (
                  <li key={idx}>{duty}</li>
                ))
              ) : (
                <li>Đang cập nhật nội dung.</li>
              )}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Donvi
