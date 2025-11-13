import React from 'react'
import { Link } from 'react-router-dom'
import './Organization.css'
import doctor1 from './Images/doctor1.png'
import doctor2 from './Images/doctor2.png'
import doctor3 from './Images/doctor3.png'
import doctor4 from './Images/doctor4.png'
import doctor05 from './Images/doctor05.png'

// OrganizationStructure component (gộp từ OrganizationStructure.jsx)
const OrganizationStructure = ({ director, viceDirectors }) => {
  return (
    <div className="organization-structure">
      <div className="org-structure-container">
        {/* Leadership Section */}
        <div className="org-leadership-section">
          <div className="org-leadership-title">LÃNH ĐẠO BỆNH VIỆN</div>
        </div>
        
        {/* Director Section */}
        <div className="org-director-wrapper">
          <div className="org-connector-vertical org-connector-top"></div>
          <div className="org-director-item">
            <div className="org-director-image-wrapper">
              <img src={director.image} alt={director.name} className="org-director-image" />
            </div>
            <div className="org-deputy-label">{director.position}</div>
            <div className="org-director-name">{director.name}</div>
          </div>
          <div className="org-connector-vertical org-connector-director-bottom"></div>
        </div>

        {/* Horizontal connector from director to deputies */}
        <div className="org-connector-horizontal"></div>

        {/* Deputy Directors Section */}
        <div className="org-deputy-section">
          {viceDirectors.map((vice, index) => (
            <div key={`vice-${index}`} className="org-deputy-item-wrapper">
              <div className="org-connector-vertical org-connector-deputy"></div>
              <div className="org-deputy-item">
                <div className="org-deputy-image-wrapper">
                  <img src={vice.image} alt={vice.name || vice.position} className="org-deputy-image" />
                </div>
                <div className="org-deputy-label">{vice.position}</div>
                <div className="org-deputy-name">{vice.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Board of Directors Section */}
        <div className="org-board-section">
          <div className="org-connector-vertical org-connector-board-top"></div>
          <div className="org-board-title">BAN GIÁM ĐỐC BỆNH VIỆN</div>
          <div className="org-connector-vertical org-connector-board-bottom"></div>
        </div>

        {/* Functional Blocks Section */}
        <div className="org-functional-section">
          <div className="org-connector-horizontal org-connector-functional"></div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối nội</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content"></div>
          </div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối ngoại</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content"></div>
          </div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối cận lâm sàng</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content"></div>
          </div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối văn phòng</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

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

      <section className="organization-section">
        <div className="organization-container">
          <header className="organization-header">
            <p className="organization-description">
              Thông tin giới thiệu tổng quan về mô hình tổ chức, chức năng nhiệm vụ của các khoa
               phòng thuộc Bệnh viện Quân y 4. Các nội dung bên dưới có thể được cập nhật chi tiết hơn theo nhu cầu.
            </p>
          </header>

          {/* Organization Structure Chart */}
          <div className="organization-structure-wrapper">
            <OrganizationStructure director={director} viceDirectors={viceDirectors} />
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
