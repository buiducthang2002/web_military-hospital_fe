import React from 'react'
import { Link } from 'react-router-dom'
import './Organization.css'
import OrganizationStructure from './OrganizationStructure'
import doctor1 from './Images/doctor1.png'
import doctor2 from './Images/doctor2.png'
import doctor3 from './Images/doctor3.png'
import doctor4 from './Images/doctor4.png'
import doctor05 from './Images/doctor05.png'

const Organization = () => {
  const director = {
    name: 'Đại Tá, BS.CK II Nguyễn An Giang',
    position: 'Giám đốc bệnh viện',
    image: doctor1
  }

  const viceDirectors = [
    {
      name: 'BS.CK II Trương Quang Thắng',
      position: 'Phó giám đốc bệnh viện',
      image: doctor2
    },
    {
      name: 'Tiến sĩ. Bác sĩ Phan Quốc Khánh',
      position: 'Phó giám đốc bệnh viện',
      image: doctor3
    },
    {
      name: 'BS.CK II Nguyễn Huy Thắng',
      position: 'Phó giám đốc bệnh viện',
      image: doctor4
    },
    {
      name: 'BS.CK II Nguyễn Văn Thắng',
      position: 'Phó giám đốc bệnh viện',
      image: doctor05
    }
  ]

  return (
    <main className="organization-main">
      {/* Breadcrumb */}
      <div className="organization-breadcrumb">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">Trang chủ</Link>
          <span className="breadcrumb-separator">|</span>
          <span className="breadcrumb-current">Cơ cấu tổ chức</span>
        </div>
      </div>

      {/* Board of Directors Section */}
      <section className="board-directors-section">
        <div className="board-directors-container">
          <h2 className="board-directors-title">BAN GIÁM ĐỐC BỆNH VIỆN</h2>

          <div className="director-section">
            <div className="director-card">
              <div className="director-image-wrapper">
                <img src={director.image} alt={director.name} className="director-image" />
              </div>
              <div className="director-info">
                <p className="director-position">{director.position}</p>
                <p className="director-name">{director.name}</p>
              </div>
            </div>
          </div>

          <div className="vice-directors-section">
            {viceDirectors.map((vice, index) => (
              <div key={`vice-${vice.name || vice.position}-${index}`} className="vice-director-card">
                <div className="vice-director-image-wrapper">
                  <img src={vice.image} alt={vice.name || vice.position} className="vice-director-image" />
                </div>
                <div className="vice-director-info">
                  <p className="vice-director-position">{vice.position}</p>
                  {vice.name && <p className="vice-director-name">{vice.name}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="organization-section">
        <div className="organization-container">
          <header className="organization-header">
            <h1 className="organization-heading">Cơ cấu tổ chức</h1>
            <p className="organization-description">
              Thông tin giới thiệu tổng quan về mô hình tổ chức, chức năng nhiệm vụ của các khoa phòng
              thuộc Bệnh viện Quân y 4. Các nội dung bên dưới có thể được cập nhật chi tiết hơn theo nhu cầu.
            </p>
          </header>

          {/* Organization Structure Chart */}
          <div className="organization-structure-wrapper">
            <OrganizationStructure />
          </div>

          <article className="organization-card">
            <h2 className="organization-subheading">Ban giám đốc</h2>
            <p className="organization-text">
              - Giám đốc bệnh viện chịu trách nhiệm điều hành chung, hoạch định chiến lược phát triển và bảo đảm
              chất lượng khám chữa bệnh.<br />
              - Các Phó Giám đốc phụ trách từng lĩnh vực chuyên môn, chính trị và hậu cần, phối hợp triển khai nhiệm vụ
              trong toàn bệnh viện.
            </p>
          </article>

          <article className="organization-card">
            <h2 className="organization-subheading">Khối chuyên môn</h2>
            <p className="organization-text">
              Bao gồm các khoa lâm sàng, cận lâm sàng và các trung tâm hỗ trợ chuyên sâu. Mỗi khoa phòng có trưởng khoa
              phụ trách chuyên môn, chịu trách nhiệm trực tiếp về hoạt động chuyên môn, đào tạo và nghiên cứu khoa học.
            </p>
          </article>

          <article className="organization-card">
            <h2 className="organization-subheading">Khối chức năng</h2>
            <p className="organization-text">
              Gồm các phòng ban làm nhiệm vụ tham mưu, hậu cần, tài chính, chính trị và chăm sóc khách hàng. Khối chức
              năng bảo đảm vận hành hiệu quả, nâng cao trải nghiệm người bệnh và phối hợp với khối chuyên môn trong mọi
              hoạt động.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Organization
