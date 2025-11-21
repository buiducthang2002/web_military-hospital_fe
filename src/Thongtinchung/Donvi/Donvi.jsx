import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Donvi.css'

const Donvi = () => {
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

          <section className="donvi-card">
            <div className="donvi-card-title">
              Ban Kế Hoạch Tổng Hợp |    Trưởng ban: Bùi Đức Thắng
            </div>
            <div className="donvi-card-section-title">Chức năng nhiệm vụ</div>
            <ul className="donvi-list">
              <li>Giúp Giám đốc Bệnh viện theo dõi, chỉ đạo công tác khám bệnh, chữa bệnh bảo vệ sức khỏe trong toàn Bệnh viện; công tác tổ chức lực lượng phục vụ công tác khám bệnh, chữa bệnh; thống kê, tổng hợp công tác Bệnh viện và hoạt động chuyên môn lên Giám đốc và các cơ quan cấp trên theo quy định.</li>
              <li>Tham mưu cho Đảng ủy, Ban Giám đốc Bệnh viện đề ra phương hướng và kế hoạch thực hiện công tác KH-CN&MT trong Bệnh viện. Theo dõi, quản lý công tác đào tạo, huấn luyện học sinh viên, CBNV tư cách học tập tại Bệnh viện.</li>
              <li>Tham mưu giúp chỉ huy Bệnh viện lập và triển khai kế hoạch kiện toàn biên chế quy định và quy hoạch tổ chức quản số của Cục Hậu cần, Quân khu, hướng dẫn các khoa, ban thuộc quyền thực hiện điều tổ chức biên chế của từng cấp quản lý, sắp xếp QNCN, CNVQP, HSQ-BS theo phân cấp.</li>
              <li>Triển khai công tác Luật Bảo hiểm y tế tới từng cá nhân, làm tốt công tác hồ sơ Bệnh án bảo hiểm y tế. Tổng hợp số liệu trong khám chữa bệnh cho các đối tượng bệnh nhân bộ đội, bệnh nhân có thẻ bảo hiểm y tế và tư vấn hỗ trợ bệnh viện; giải quyết chế độ khám chữa bệnh cho bệnh nhân theo quy định của ngành và Giám đốc Bệnh viện.</li>
              <li>Quản lý hồ sơ, bệnh án phục vụ công tác điều trị bệnh nhân.</li>
              <li>Triển khai ứng dụng công nghệ thông tin phục vụ chuyên môn và nghiệp vụ Bệnh viện, khai thác mạng LAN nội bộ trong toàn viện.</li>
              <li>Quản lý công tác vệ sinh, môi trường Bệnh viện.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Donvi
