import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom' // Import Link
import { ChevronDown, ChevronUp, FileCheck } from 'lucide-react'
import './CustomerGuide.css'
import '../Components/NewsEvents/NewsEvents.css'

const quickLinks = [
  {
    title: 'Sơ đồ bệnh viện & khu điều trị',
    description: 'Dễ dàng tìm đến các khoa, phòng chức năng và khu điều trị khi mới đến viện.',
    cta: 'Xem sơ đồ',
    to: '/so-do-benh-vien', // Ví dụ: Cần điền đường dẫn thực tế
  },
  {
    title: 'Đánh giá dịch vụ khám chữa bệnh',
    description: 'Phản hồi nhanh về trải nghiệm dịch vụ để chúng tôi nâng cao chất lượng phục vụ.',
    cta: 'Gửi đánh giá',
    to: '/danh-gia',
  },
  {
    title: 'Hướng dẫn đặt lịch khám',
    description: 'Các bước đặt lịch đăng ký khám trực tuyến hoặc qua tổng đài trong vài phút.',
    cta: 'Hướng dẫn',
    to: '/dat-lich',
  },
  {
    title: 'Chuẩn bị hồ sơ & thủ tục',
    description: 'Danh sách giấy tờ, biểu mẫu cần thiết cho quá trình tiếp nhận và xuất viện.',
    cta: 'Xem hướng dẫn',
    expandable: true,
    documents: [
      {
        category: 'Giấy tờ cần thiết khi khám bệnh',
        items: [
          'Chứng minh nhân dân/Căn cước công dân (bản gốc)',
          'Thẻ bảo hiểm y tế (nếu có)',
          'Sổ khám bệnh (nếu đã từng khám tại bệnh viện)',
          'Kết quả xét nghiệm, chẩn đoán hình ảnh cũ (nếu có)',
        ]
      },
      {
        category: 'Giấy tờ cần thiết khi nhập viện',
        items: [
          'Giấy chỉ định nhập viện của bác sĩ',
          'Chứng minh nhân dân/Căn cước công dân (bản gốc)',
          'Thẻ bảo hiểm y tế (bản gốc và photo)',
          'Giấy khai sinh (đối với trẻ em dưới 15 tuổi)',
          'Giấy giới thiệu của cơ quan (nếu có)',
        ]
      },
      {
        category: 'Giấy tờ cần chuẩn bị khi xuất viện',
        items: [
          'Giấy ra viện từ bác sĩ điều trị',
          'Hồ sơ bệnh án',
          'Đơn thuốc (nếu có)',
          'Giấy hẹn tái khám (nếu có)',
          'Biên lai thanh toán viện phí',
        ]
      }
    ]
  },
]

const CustomerGuidePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="customer-guide-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="customer-guide-page__hero">
        <div className="customer-guide-page__hero-content">
          <div className="news-header hero-news-header">
            <div className="news-header-left">
              <p className="news-label">Hướng dẫn khách hàng</p>
              <h2 className="news-main-title">| Dành cho khách hàng</h2>             
            </div>
            <p>Tài liệu, biểu mẫu và hướng dẫn giúp người bệnh chuẩn bị tốt nhất</p>
          </div>
          <h1>THÔNG TIN BỆNH VIÊN - QUY TRÌNH KHÁM BỆNH - HỖ TRỢ BỆNH NHÂN</h1>
        </div>
      </div>

      {/* Shortcuts Grid Section */}
      <section className="customer-guide-shortcuts">
        {quickLinks.map((link, index) => (
          <div key={index} className="customer-guide-shortcut-wrapper">
            {link.expandable ? (
              <div 
                className={`customer-guide-shortcut expandable ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <div className="shortcut-header">
                  <span>{link.title}</span>
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <p>{link.description}</p>
                <div className="shortcut-cta">
                  {link.cta} {expandedIndex === index ? '↑' : '↓'}
                </div>
                
                {expandedIndex === index && (
                  <div className="documents-list" onClick={(e) => e.stopPropagation()}>
                    {link.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="document-category">
                        <h4 className="document-category-title">
                          <FileCheck size={18} />
                          {doc.category}
                        </h4>
                        <ul className="document-items">
                          {doc.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to={link.to} 
                className="customer-guide-shortcut"
              >
                <span>{link.title}</span>
                <p>{link.description}</p>
                <div className="shortcut-cta">
                  {link.cta} &rarr;
                </div>
              </Link>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default CustomerGuidePage