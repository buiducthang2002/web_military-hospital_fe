import usePageMeta from '../../hooks/usePageMeta'
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Organization.css";
import "../../Components/NewsEvents/NewsEvents.css";
import gd1a from "./Images/gd1a.png";
import gd2a from "./Images/gd2a.png";
import gd3 from "./Images/gd3.jpg";
import anhgd4vip from "./Images/anhgd4vip.png";

// OrganizationStructure component (gộp từ OrganizationStructure.jsx)
const OrganizationStructure = ({ director, viceDirectors, additionalDirectors }) => {
  return (
    <div className="organization-structure">
      <div className="org-structure-container">
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
  usePageMeta('Cơ cấu tổ chức')
  const location = useLocation();

  useEffect(() => {
    // Scroll to top khi navigate đến trang này
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const director = {
    name: "Đại tá, BSCKII, Thầy thuốc Ưu tú Nguyễn An Giang",
    position: "Giám đốc bệnh viện",
    image: gd1a,
  };

  const viceDirectors = [
    {
      name: " Đại tá, BSCKII, Thạc sĩ Trương Quang Thắng",
      position: "Phó giám đốc bệnh viện",
      image: gd2a,
    },
    {
      name: "Thượng tá, Tiến sĩ, BS Phan Quốc Khánh",
      position: "Phó giám đốc bệnh viện",
      image: gd3,
    },
    {
      name: "Đại tá, BSCKII, Thạc sĩ Nguyễn Huy Thắng",
      position: "Phó giám đốc bệnh viện",
      image: anhgd4vip,
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
        <section className="organization-section">
            <div className="organization-container">
            <div className="news-header">
              <div className="news-header-left">
                <p className="news-label">Tổ chức bệnh viện</p>
                <h2 className="news-main-title">|   Giám đốc bệnh viện</h2>
              </div>
            </div>
           

            {/* Organization Structure Chart */}
            <div className="organization-structure-wrapper">
              <OrganizationStructure
                director={director}
                viceDirectors={viceDirectors}
              />
            </div>

           
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Organization;