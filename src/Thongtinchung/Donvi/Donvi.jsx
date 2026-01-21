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
    'Ban công nghệ thông tin'
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
        'Giúp Giám đốc Bệnh viện theo dõi, chỉ đạo công tác khám bệnh, chữa bệnh chăm sóc và bảo vệ sức khỏe trong toàn Bệnh viện, công tác tổ chức lực lượng phục vụ công tác khám bệnh, chữa bệnh; thống kê, tổng hợp báo cáo công tác Bệnh viện và hoạt động chuyên môn lên Giám đốc và các cơ quan cấp trên theo quy định.',
        'Tham mưu cho Đảng uỷ, Ban Giám đốc Bệnh viện đề ra phương hướng và kế hoạch thực hiện công tác KH-CN&MT trong Bệnh viện. Theo dõi, quản lý công tác đào tạo, huấn luyện học sinh, sinh viên, CBNV từ các đơn vị đến học tập tại Bệnh viện',
        ' Tham mưu giúp chỉ huy Bệnh viện lập và triển khai kế hoạch kiện toàn Bệnh viện theo biểu tổ chức biên chế quy định và quy hoạch tổ chức quân số của Cục Hậu cần, Quân khu, hướng dẫn các khoa, ban thuộc quyền thực hiện biều tổ chức biên chế của từng cấp quản lý, sắp xếp QNCN, CNVQP, HSQ-BS theo phân cấp.',
        ' Triển khai công tác Luật Bảo hiểm y tế tới từng cá nhân, làm tốt công tác hồ sơ bệnh án của Bảo hiểm y tế. Tổng hợp số liệu trong khám chữa bệnh cho các đối tượng bệnh nhân bộ đội, bệnh nhân bảo hiểm y tế và thu viện phí tại bệnh viện; giải quyết chế độ khám chữa bệnh cho bệnh nhân theo qui định của ngành và Giám đốc Bệnh viện.',
        'Quản lý hồ sơ, bệnh án phục vụ công tác điều trị bệnh nhân',
        'Quản lý công tác vệ sinh, môi trường Bệnh viện',
      ],
    },
    'Phòng tham mưu hành chính': {
      head: 'Trưởng phòng: Trần Đức Sơn',
      duties: [
        'Là cơ quan giúp Ban Giám đốc duy trì đơn vị chấp hành nghiêm kỷ luật quân đội, pháp luật nhà nước; các chế độ quy định của người chỉ huy; tổ chức đón tiếp và hướng dẫn khách đến làm việc với Bệnh viện; bảo đảm trật tự an toàn khu vực đơn vị đóng quân.',
        'Tiếp nhận, đăng ký quản lý lưu trữ công văn tài liệu con dấu của đơn vị',
        
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
        'Tham mưu giúp thường vụ Đảng ủy, Ban Giám đốc lãnh đạo, chỉ đạo triển khai hoạt động Công tác Đảng, công tác chính trị trong Bệnh viện.',
        
      ],
      
    },
    'Ban điều dưỡng': {
      head: 'Trưởng phòng:Trần Hoàng',
      duties: [
        '',
        
      ],
    },
        'Ban tài chính': {
          head: 'Trưởng ban:Đặng Văn Mừng',
          duties: [
            'Lập dự toán thu chi ngân sách quốc phòng thường xuyên',
            'Tổ chức bảo đảm, cấp phát, quản lý việc sử dụng, giám sát, kiểm soát việc chi tiêu thanh toán, quyết toán ngân sách.',
            'Tổ chức công tác kế toán, thống kê, đăng ký ghi chép các hoạt động tài chính, Tổ chức công tác kế toán, thống kê, đăng ký ghi chép các hoạt động tài chính, tài sản của đơn vị theo đúng chế độ quy định.',
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
              <p className="news-label">Tổ chức bệnh viện</p>
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
