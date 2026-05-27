import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './GioithieuBV.css'
import '../../Components/NewsEvents/NewsEvents.css'

const GioithieuBV = () => {
  const highlights = [
    {
      number: '70+',
      label: 'Năm kinh nghiệm',
      icon: '🏥'
    },
    {
      number: '500+',
      label: 'Giường bệnh',
      icon: '🛏️'
    },
    {
      number: '200+',
      label: 'Bác sĩ, điều dưỡng',
      icon: '👨‍⚕️'
    },
    {
      number: '30+',
      label: 'Chuyên khoa',
      icon: '⚕️'
    }
  ]

  const missions = [
    {
      title: 'Chăm sóc sức khỏe toàn diện',
      description: 'Cung cấp dịch vụ y tế chất lượng cao cho cán bộ, chiến sĩ và nhân dân',
      icon: '💙'
    },
    {
      title: 'Nghiên cứu và đào tạo',
      description: 'Đào tạo nguồn nhân lực y tế chất lượng, nghiên cứu khoa học ứng dụng',
      icon: '📚'
    },
    {
      title: 'Hiện đại hóa thiết bị',
      description: 'Đầu tư trang thiết bị y tế tiên tiến, áp dụng công nghệ mới',
      icon: '🔬'
    },
    {
      title: 'Phục vụ cộng đồng',
      description: 'Góp phần bảo vệ, chăm sóc và nâng cao sức khỏe nhân dân',
      icon: '🤝'
    }
  ]

  const specialties = [
    'Khoa Nội tổng hợp',
    'Khoa Ngoại tổng hợp',
    'Khoa Sản - Phụ khoa',
    'Khoa Nhi',
    'Khoa Tim mạch',
    'Khoa Tiêu hóa',
    'Khoa Thận - Niệu',
    'Khoa Hô hấp',
    'Khoa Nội tiết',
    'Khoa Chấn thương chỉnh hình',
    'Khoa Tai - Mũi - Họng',
    'Khoa Mắt',
    'Khoa Răng - Hàm - Mặt',
    'Khoa Da liễu',
    'Khoa Thần kinh',
    'Khoa Ung bướu',
    'Khoa Hồi sức cấp cứu',
    'Khoa Chẩn đoán hình ảnh',
    'Khoa Xét nghiệm',
    'Khoa Dược',
  ]

  const achievements = [
    {
      year: '1954',
      title: 'Thành lập',
      description: 'Bệnh viện được thành lập với sứ mệnh phục vụ sức khỏe cán bộ, chiến sĩ và nhân dân'
    },
    {
      year: '1990s',
      title: 'Mở rộng quy mô',
      description: 'Nâng cấp cơ sở vật chất, tăng số giường bệnh và đa dạng hóa chuyên khoa'
    },
    {
      year: '2000s',
      title: 'Hiện đại hóa',
      description: 'Đầu tư trang thiết bị y tế hiện đại, ứng dụng công nghệ thông tin trong quản lý'
    },
    {
      year: '2010s',
      title: 'Phát triển toàn diện',
      description: 'Đạt nhiều danh hiệu cao quý, trở thành bệnh viện hạng I của quân đội'
    },
    {
      year: '2020+',
      title: 'Hội nhập và phát triển',
      description: 'Hợp tác quốc tế, nghiên cứu khoa học, nâng cao chất lượng khám chữa bệnh'
    }
  ]

  const facilities = [
    {
      name: 'Trang thiết bị hiện đại',
      items: [
        'Máy chụp CT 128 lát cắt',
        'Máy cộng hưởng từ MRI 1.5 Tesla',
        'Máy siêu âm 4D',
        'Hệ thống xét nghiệm tự động',
        'Máy nội soi tiêu hóa',
        'Phòng mổ vô trùng hiện đại',
      ]
    },
    {
      name: 'Cơ sở vật chất',
      items: [
        'Khu điều trị nội trú 500+ giường',
        'Phòng khám đa khoa hiện đại',
        'Khu cấp cứu 24/7',
        'Phòng chờ thoải mái, điều hòa',
        'Hệ thống thang máy, bãi đỗ xe rộng rãi',
        'Khu vực canteen, quầy thuốc tiện lợi',
      ]
    }
  ]

  const coreValues = [
    {
      title: 'Tận tâm',
      description: 'Phục vụ bệnh nhân với tất cả sự tận tình và trách nhiệm',
      color: '#0b7439'
    },
    {
      title: 'Chuyên nghiệp',
      description: 'Đội ngũ y bác sĩ giàu kinh nghiệm, chuyên môn cao',
      color: '#19eb74'
    },
    {
      title: 'Chất lượng',
      description: 'Cam kết chất lượng dịch vụ y tế hàng đầu',
      color: '#0b7439'
    },
    {
      title: 'Nhân văn',
      description: 'Đặt lợi ích và sức khỏe bệnh nhân lên hàng đầu',
      color: '#19eb74'
    }
  ]

  return (
    <div className="gioithieu-page">
      <Navbar />

      {/* Hero Section */}
      <div className="gioithieu-hero">
        <div className="gioithieu-hero-overlay"></div>
        <div className="gioithieu-hero-content">
          <div className="news-header">
            <div className="news-header-left">
              <p className="news-label">Tổ chức bệnh viện</p>
              <h2 className="news-main-title">|   Giới thiệu bệnh viện</h2>
            </div>
          </div>
          <h1>BỆNH VIỆN QUÂN Y 4</h1>
          <p className="hero-subtitle">
            Bệnh viện tuyến cuối của Quân khu 4 - Nơi hội tụ y đức và y thuật
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="gioithieu-main">
        <div className="gioithieu-container">

          {/* Highlights Section */}
          <section className="highlights-section">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-number">{item.number}</div>
                  <div className="highlight-label">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Introduction Section */}
          <section className="intro-section">
            <h2 className="section-title">Lời giới thiệu</h2>
            <div className="intro-content">
              <p>
                <strong>Bệnh viện Quân y 4/Cục Hậu cần - Kỹ thuật </strong> là bệnh viện tuyến cuối Quân khu 4, có 
                truyền thống lịch sử vẻ vang hơn 70 năm xây dựng và trưởng thành. Bệnh viện được thành lập 
                với sứ mệnh chăm sóc sức khỏe cho cán bộ, chiến sĩ quân đội và nhân dân, đồng thời là 
                trung tâm đào tạo, nghiên cứu khoa học y học quân sự.
              </p>
              <p>
                Qua nhiều giai đoạn phát triển, Bệnh viện Quân y 4 đã không ngừng lớn mạnh về quy mô, 
                nâng cao chất lượng chuyên môn, hiện đại hóa trang thiết bị và cơ sở vật chất. Với đội ngũ 
                cán bộ y, bác sĩ giàu kinh nghiệm, tận tâm và trách nhiệm cao, bệnh viện đã và đang khẳng định 
                vị thế là một trong những cơ sở y tế uy tín hàng đầu.
              </p>
              <p>
                Bệnh viện hiện có <strong>hơn 500 giường bệnh</strong>, với đầy đủ các chuyên khoa từ nội, 
                ngoại, sản, nhi đến các chuyên khoa chuyên sâu như tim mạch, thần kinh, ung bướu... Trang thiết bị 
                y tế hiện đại như máy CT 128 lát cắt, MRI 1.5 Tesla, máy siêu âm 4D, hệ thống xét nghiệm tự động 
                giúp chẩn đoán chính xác và điều trị hiệu quả.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mission-section">
            <h2 className="section-title">Sứ mệnh và mục tiêu</h2>
            <div className="mission-grid">
              {missions.map((mission, index) => (
                <div key={index} className="mission-card">
                  <div className="mission-icon">{mission.icon}</div>
                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section className="values-section">
            <h2 className="section-title">Giá trị cốt lõi</h2>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div key={index} className="value-card" style={{ borderColor: value.color }}>
                  <h3 style={{ color: value.color }}>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Specialties */}
          <section className="specialties-section">
            <h2 className="section-title">Các chuyên khoa</h2>
            <p className="section-subtitle">
              Bệnh viện có đầy đủ các chuyên khoa từ cơ bản đến chuyên sâu, đáp ứng mọi nhu cầu khám chữa bệnh
            </p>
            <div className="specialties-grid">
              {specialties.map((specialty, index) => (
                <div key={index} className="specialty-item">
                  <span className="specialty-icon">✓</span>
                  <span className="specialty-name">{specialty}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Facilities */}
          <section className="facilities-section">
            <h2 className="section-title">Cơ sở vật chất và trang thiết bị</h2>
            <div className="facilities-grid">
              {facilities.map((facility, index) => (
                <div key={index} className="facility-card">
                  <h3>{facility.name}</h3>
                  <ul>
                    {facility.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="timeline-section">
            <h2 className="section-title">Lịch sử phát triển</h2>
            <div className="timeline">
              {achievements.map((achievement, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{achievement.year}</div>
                  <div className="timeline-content">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default GioithieuBV

