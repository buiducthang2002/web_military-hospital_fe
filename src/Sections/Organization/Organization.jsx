import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./Organization.css";
import doctor1 from "./Images/doctor1.png";
import doctor2 from "./Images/doctor2.png";
import doctor3 from "./Images/doctor3.png";
import doctor4 from "./Images/doctor4.png";
import doctor05 from "./Images/doctor05.png";

// OrganizationStructure component (gộp từ OrganizationStructure.jsx)
const OrganizationStructure = ({ director, viceDirectors, additionalDirectors }) => {
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
              <img
                src={director.image}
                alt={director.name}
                className="org-director-image"
              />
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
                  <img
                    src={vice.image}
                    alt={vice.name || vice.position}
                    className="org-deputy-image"
                  />
                </div>
                <div className="org-deputy-label">{vice.position}</div>
                <div className="org-deputy-name">{vice.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Directors Section */}
        {additionalDirectors && additionalDirectors.length > 0 && (
          <>
            <div className="org-connector-vertical" style={{ height: '20px', margin: '20px auto 0' }}></div>
            <div className="org-connector-horizontal org-connector-horizontal-5"></div>
            <div className="org-deputy-section org-deputy-section-5">
              {additionalDirectors.map((director, index) => (
                <div key={`additional-${index}`} className="org-deputy-item-wrapper">
                  <div className="org-connector-vertical org-connector-deputy"></div>
                  <div className="org-deputy-item">
                    <div className="org-deputy-image-wrapper">
                      <img
                        src={director.image}
                        alt={director.name || director.position}
                        className="org-deputy-image"
                      />
                    </div>
                    <div className="org-deputy-label">{director.position}</div>
                    <div className="org-deputy-name">{director.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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
            <div className="org-functional-label">Khối cận lâm sàng</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content">
            <div className="org-office-item">Khoa chẩn đoán hình ảnh</div>
            <div className="org-office-item">Khoa Khám bệnh</div>
            <div className="org-office-item">Khoa Cấp cứu</div>
            <div className="org-office-item">Khoa Xét nghiệm</div>
            <div className="org-office-item">Khoa Dược</div>
            <div className="org-office-item">Khoa Trang bị</div>


            </div>
          </div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối ngoại</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content">
            <div className="org-office-item">Khoa Chấn thương chỉnh hình</div>
            <div className="org-office-item">Khoa Ngoại chung</div>
            <div className="org-office-item">Khoa Phẫu thuật - GMHS</div>
            <div className="org-office-item">Khoa Mắt</div>
            <div className="org-office-item">Khoa Tai - Mũi - Họng</div>
            <div className="org-office-item">Khoa Răng - Hàm - Mặt</div>
            </div>
          </div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối nội</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content">
              <div className="org-office-item">Khoa Xương khớp - Nội tiết</div>
              <div className="org-office-item">Khoa Phụ Sản - Nhi</div>
              <div className="org-office-item">Khoa Y học dự phòng</div>
              <div className="org-office-item">Khoa Dinh dưỡng</div>
              <div className="org-office-item">Khoa kiểm soát nhiễm khuẩn</div>
              <div className="org-office-item">Khoa quốc tế</div>
              <div className="org-office-item">Khoa Nội tim - Thận - Khớp</div>
              <div className="org-office-item">Khoa Nội Tiêu hoá - Bệnh má</div>
              <div className="org-office-item">Khoa Truyền nhiễm - Da liễu</div>
              <div className="org-office-item">Khoa Ưng bứu</div>
              <div className="org-office-item">Khoa Tâm - Thần kinh</div>
              <div className="org-office-item">Khoa Đột quỵ</div>
              <div className="org-office-item">Khoa y học cổ truyền</div>
              <div className="org-office-item">Khoa hồi sức cấp cứu</div>
              <div className="org-office-item">Khoa Thận - Lọc máu</div>
              <div className="org-office-item">Khoa phục hồi chức năng</div>
            
            </div>
            
          </div>
          <div className="org-functional-block">
            <div className="org-connector-vertical org-connector-block"></div>
            <div className="org-functional-label">Khối văn phòng</div>
            <div className="org-connector-vertical org-connector-content"></div>
            <div className="org-functional-content">
              <div className="org-office-item">Phòng kế hoạch tổng hợp</div>
              <div className="org-office-item">Phòng tham mưu hành chính</div>
              <div className="org-office-item">Phòng hậu cần kỹ thuật</div>
              <div className="org-office-item">Phòng chính trị</div>
              <div className="org-office-item">Ban điều dưỡng</div>
              <div className="org-office-item">Ban tài chính</div>
              <div className="org-office-item">Ban công nghệ thông tin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Organization = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top khi navigate đến trang này
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const director = {
    name: "Đại Tá, BS.CK II Nguyễn An Giang",
    position: "Giám đốc bệnh viện",
    image: doctor1,
  };

  const viceDirectors = [
    {
      name: "BS.CK II Trương Quang Thắng",
      position: "Phó giám đốc bệnh viện",
      image: doctor2,
    },
    {
      name: "Tiến sĩ. Bác sĩ Phan Quốc Khánh",
      position: "Phó giám đốc bệnh viện",
      image: doctor3,
    },
    {
      name: "BS.CK II Nguyễn Huy Thắng",
      position: "Phó giám đốc bệnh viện",
      image: doctor4,
    },
    {
      name: "BS.CK II Nguyễn Văn Thắng",
      position: "Phó giám đốc bệnh viện",
      image: doctor05,
    },
  ];

  const additionalDirectors = [
    {
      name: "BS.CK II Trương Quang Thắng",
      position: "Trưởng khoa",
      image: doctor2,
    },
    {
      name: "Tiến sĩ. Bác sĩ Phan Quốc Khánh",
      position: "Trưởng khoa",
      image: doctor3,
    },
    {
      name: "BS.CK II Nguyễn Huy Thắng",
      position: "Trưởng khoa",
      image: doctor4,
    },
    {
      name: "BS.CK II Nguyễn Văn Thắng",
      position: "Trưởng khoa",
      image: doctor05,
    },
    {
      name: "BS.CK II Nguyễn Văn Thắng",
      position: "Trưởng khoa",
      image: doctor05,
    },
    {
      name: "BS.CK II Nguyễn Văn Thắng",
      position: "Trưởng khoa",
      image: doctor05,
    },
  
    {
      name: "BS.CK II Nguyễn Văn Thắng",
      position: "Trưởng khoa",
      image: doctor05,
    },
  
    {
      name: "BS.CK II Nguyễn Văn Thắng",
      position: "Trưởng khoa",
      image: doctor05,
    },
  
  
  ];
 

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        background: "#f3faf6",
      }}
    >
      <Navbar />
      <main className="organization-main">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Trang chủ", path: "/" },
            { label: "Cơ cấu tổ chức", path: "" },
          ]}
        />

        <section className="organization-section">
          <div className="organization-container">
            <header className="organization-header">
              <p className="organization-description">
                Thông tin giới thiệu tổng quan về mô hình tổ chức, chức năng
                nhiệm vụ của các khoa phòng thuộc Bệnh viện Quân y 4. Các nội
                dung bên dưới có thể được cập nhật chi tiết hơn theo nhu cầu.
              </p>
            </header>

            {/* Organization Structure Chart */}
            <div className="organization-structure-wrapper">
              <OrganizationStructure
                director={director}
                viceDirectors={viceDirectors}
                additionalDirectors={additionalDirectors}
              />
            </div>

            <article className="organization-card">
              <h2 className="organization-subheading">Ban giám đốc</h2>
              <p className="organization-text">
                - Giám đốc bệnh viện chịu trách nhiệm điều hành chung, hoạch
                định chiến lược phát triển và bảo đảm chất lượng khám chữa bệnh.
                <br />- Các Phó Giám đốc phụ trách từng lĩnh vực chuyên môn,
                chính trị và hậu cần, phối hợp triển khai nhiệm vụ trong toàn
                bệnh viện.
              </p>
            </article>

            <article className="organization-card">
              <h2 className="organization-subheading">Khối chuyên môn</h2>
              <p className="organization-text">
                Bao gồm các khoa lâm sàng, cận lâm sàng và các trung tâm hỗ trợ
                chuyên sâu. Mỗi khoa phòng có trưởng khoa phụ trách chuyên môn,
                chịu trách nhiệm trực tiếp về hoạt động chuyên môn, đào tạo và
                nghiên cứu khoa học.
              </p>
            </article>

            <article className="organization-card">
              <h2 className="organization-subheading">Khối chức năng</h2>
              <p className="organization-text">
                Gồm các phòng ban làm nhiệm vụ tham mưu, hậu cần, tài chính,
                chính trị và chăm sóc khách hàng. Khối chức năng bảo đảm vận
                hành hiệu quả, nâng cao trải nghiệm người bệnh và phối hợp với
                khối chuyên môn trong mọi hoạt động.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Organization;
