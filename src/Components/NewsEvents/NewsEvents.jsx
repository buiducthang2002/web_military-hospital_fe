import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NewsEvents.css'
import anh1 from './Images/anh1.jpg'
import anh2 from './Images/anh2.jpg'
import anh3 from './Images/anh4.jpg'
import anh4 from './Images/anh4.jpg'
import anh6 from './Images/anh6.jpg'
import anh7 from './Images/anh7.jpg'
import anh8 from './Images/anh8.jpg'
import anh9 from './Images/anh9.jpg'
import anh10 from './Images/anh10.jpg'
import anh11 from './Images/anh11.jpg'
import anh12 from './Images/anh12.jpg'
import anh13 from './Images/anh13.jpg'
import anhqh1 from './Images/anhqh1.jpg'
import anhqh3 from './Images/anhqh3.jpg'
import anhbonoivu from './Images/anhbonoivu.png'
import WHO from './Images/WHO.jpg'
import thuocla1 from './Images/thuocla1.jpg'
import yttg1 from './Images/yttg1.jpg'
import yttg41 from './Images/yttg41.jpg'
import ytvn2 from './Images/ytvn2.jpg'
import yhvn31 from './Images/yhvn31.jpg'
import yhvn41 from './Images/yhvn41.png'
import ttbv1 from './Images/ttbv1.jpg'
import ttbv2 from './Images/ttbv2.png'
import ttbv3 from './Images/ttbv3.jpg'
import ttbv4 from './Images/ttbv4.jpg'
import bvcm1 from './Images/bvcm1.jpeg'
import bvcm2 from './Images/bvcm2.jpg'
import bvcm3 from './Images/bvcm3.jpg'
import bvcm4 from './Images/bvcm4.jpg'

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const isNewsEventsPage = location.pathname === '/news-events'

  const tabs = [
    'Tin tức y học thế giới',
    'Tin tức y học trong nước',
    'Tin tức hoạt động bệnh viện',
    'Bài viết chuyên môn'
  ]

  // Dữ liệu tin tức cho từng tab
  const newsDataByTab = {
    0: [ // Tin tức y học thế giới
      {
        id: '1',
        slug: 'tin-tuc-y-hoc-the-gioi-1',
        image: WHO,
        title: 'WHO khôi phục các dịch vụ y tế cơ bản và tiêm chủng cho trẻ em tại Gaza...',
        date: '17:05 18/06/2025',
        description: 'Tổ chức Y tế Thế giới (WHO) đã khôi phục các dịch vụ y tế cơ bản và chương trình tiêm chủng cho trẻ em tại khu vực Gaza sau thời gian gián đoạn do xung đột.'
      },
      {
        id: '2',
        slug: 'tin-tuc-y-hoc-the-gioi-2',
        image: thuocla1,
        title: 'Tất cả các sản phẩm thuốc lá đều có hại cho sức khỏe',
        date: '17:05 18/06/2025',
        description: 'WHO khẳng định tất cả các dạng thuốc lá, bao gồm thuốc lá điện tử và các sản phẩm mới, đều gây hại nghiêm trọng đến sức khỏe con người.'
      },
      {
        id: '3',
        slug: 'tin-tuc-y-hoc-the-gioi-3',
        image: yttg1,
        title: 'Nguy cơ lây lan cao của virus Chikungunya',
        date: '17:05 18/06/2025',
        description: 'Các chuyên gia y tế cảnh báo về nguy cơ gia tăng sự lây lan của virus Chikungunya do sự thay đổi khí hậu và sự di chuyển của người dân.'
      },
      {
        id: '4',
        slug: 'tin-tuc-y-hoc-the-gioi-4',
        image: yttg41,
        title: 'Đại Hội đồng Y tế thế giới nhất trí trao thêm quyền cho Palestine',
        date: '17:05 18/06/2025',
        description: 'Đại Hội đồng Y tế Thế giới đã thông qua nghị quyết trao thêm quyền và trách nhiệm cho Palestine trong các hoạt động y tế quốc tế.'
      },
      {
        id: '9',
        slug: 'tin-tuc-y-hoc-trong-nuoc-1',
        image: anhqh1,
        title: 'Trình UBTVQH Chương trình mục tiêu quốc gia về chăm sóc sức khỏe, dân số và phát triển giai đoạn 2026–2035',
        date: '17:05 18/06/2025',
        description: 'Bộ Y tế đã trình Ủy ban Thường vụ Quốc hội Chương trình mục tiêu quốc gia về chăm sóc sức khỏe người dân, dân số và phát triển giai đoạn 2026-2035.'
      },
      {
        id: '10',
        slug: 'tin-tuc-y-hoc-trong-nuoc-2',
        image: ytvn2,
        title: 'Thúc đẩy các nỗ lực loại trừ ung thư cổ tử cung tại Việt Nam',
        date: '17:05 18/06/2025',
        description: 'Việt Nam đang đẩy mạnh các chương trình sàng lọc và tiêm vắc-xin phòng ngừa HPV nhằm loại trừ ung thư cổ tử cung trong cộng đồng.'
      },
      {
        id: '11',
        slug: 'tin-tuc-y-hoc-trong-nuoc-3',
        image: yhvn31,
        title: 'Ngành y tế Thành phố Hồ Chí Minh hướng về đồng bào vùng lũ',
        date: '17:05 18/06/2025',
        description: 'Ngành y tế TP.HCM đã tổ chức nhiều đoàn cán bộ y tế mang theo thuốc men, thiết bị y tế đến hỗ trợ đồng bào vùng lũ lụt.'
      },
      {
        id: '12',
        slug: 'tin-tuc-y-hoc-trong-nuoc-4',
        image: yhvn41,
        title: 'Bộ Y tế đề nghị tăng cường công tác phòng, chống dịch bệnh ứng phó với thiên tai',
        date: '17:05 18/06/2025',
        description: 'Bộ Y tế yêu cầu các địa phương tăng cường công tác phòng chống dịch bệnh, đảm bảo an toàn sức khỏe cho người dân trong mùa mưa bão.'
      },
    ],
    1: [ // Tin tức y học trong nước
      {
        id: '9',
        slug: 'tin-tuc-y-hoc-trong-nuoc-1',
        image: anhqh1,
        title: 'Trình UBTVQH Chương trình mục tiêu quốc gia về chăm sóc sức khỏe, dân số và phát triển giai đoạn 2026–2035',
        date: '17:05 18/06/2025',
        description: 'Bộ Y tế đã trình Ủy ban Thường vụ Quốc hội Chương trình mục tiêu quốc gia về chăm sóc sức khỏe người dân, dân số và phát triển giai đoạn 2026-2035.'
      },
      {
        id: '10',
        slug: 'tin-tuc-y-hoc-trong-nuoc-2',
        image: ytvn2,
        title: 'Thúc đẩy các nỗ lực loại trừ ung thư cổ tử cung tại Việt Nam',
        date: '17:05 18/06/2025',
        description: 'Việt Nam đang đẩy mạnh các chương trình sàng lọc và tiêm vắc-xin phòng ngừa HPV nhằm loại trừ ung thư cổ tử cung trong cộng đồng.'
      },
      {
        id: '11',
        slug: 'tin-tuc-y-hoc-trong-nuoc-3',
        image: yhvn31,
        title: 'Ngành y tế Thành phố Hồ Chí Minh hướng về đồng bào vùng lũ',
        date: '17:05 18/06/2025',
        description: 'Ngành y tế TP.HCM đã tổ chức nhiều đoàn cán bộ y tế mang theo thuốc men, thiết bị y tế đến hỗ trợ đồng bào vùng lũ lụt.'
      },
      {
        id: '12',
        slug: 'tin-tuc-y-hoc-trong-nuoc-4',
        image: yhvn41,
        title: 'Bộ Y tế đề nghị tăng cường công tác phòng, chống dịch bệnh ứng phó với thiên tai',
        date: '17:05 18/06/2025',
        description: 'Bộ Y tế yêu cầu các địa phương tăng cường công tác phòng chống dịch bệnh, đảm bảo an toàn sức khỏe cho người dân trong mùa mưa bão.'
      },
    ],
    2: [ // Tin tức hoạt động bệnh viện
      {
        id: '17',
        slug: 'tin-tuc-hoat-dong-benh-vien-1',
        image: ttbv1,
        title: 'Bệnh viện Quân y 4: Hướng tới sự hài lòng của người bệnh',
        date: '17:05 18/06/2025',
        description: 'Bệnh viện Quân y 4 không ngừng nâng cao chất lượng khám chữa bệnh, cải thiện cơ sở vật chất và dịch vụ nhằm mang lại sự hài lòng cao nhất cho người bệnh.'
      },
      {
        id: '18',
        slug: 'tin-tuc-hoat-dong-benh-vien-2',
        image: ttbv2,
        title: 'Bệnh viện Quân y 4: Tổ chức nhiều hoạt động hỗ trợ người bệnh',
        date: '17:05 18/06/2025',
        description: 'Bệnh viện đã triển khai nhiều hoạt động hỗ trợ như tư vấn sức khỏe miễn phí, tặng thuốc, và hướng dẫn chăm sóc sau điều trị cho bệnh nhân.'
      },
      {
        id: '19',
        slug: 'tin-tuc-hoat-dong-benh-vien-3',
        image: ttbv3,
        title: 'Bệnh viện Quân y 4 tổ chức đánh giá bệnh án điện tử',
        date: '17:05 18/06/2025',
        description: 'Hội đồng đánh giá đã tiến hành kiểm tra chất lượng bệnh án điện tử nhằm cải thiện quy trình quản lý và lưu trữ hồ sơ bệnh nhân.'
      },
      {
        id: '20',
        slug: 'tin-tuc-hoat-dong-benh-vien-4',
        image: ttbv4,
        title: 'Bệnh viện Quân y 103 ký kết đào tạo và hỗ trợ chuyên môn với Bệnh viện Quân y 4',
        date: '17:05 18/06/2025',
        description: 'Hai bệnh viện đã ký kết thỏa thuận hợp tác trong đào tạo cán bộ y tế, chuyển giao kỹ thuật và hỗ trợ chuyên môn.'
      },
      
    ],
    3: [ // Bài viết chuyên môn
      {
        id: '25',
        slug: 'bai-viet-chuyen-mon-1',
        image: bvcm1,
        title: 'Bé 7 tuổi mắc ung thư xương giữ được đôi chân nhờ công nghệ in 3D cá thể hóa',
        date: '17:05 18/06/2025',
        description: 'Nhờ ứng dụng công nghệ in 3D cá thể hóa tiên tiến, các bác sĩ đã cứu được đôi chân cho bé 7 tuổi mắc ung thư xương.'
      },
      {
        id: '26',
        slug: 'bai-viet-chuyen-mon-2',
        image: bvcm2,
        title: 'Ca mổ thay cùng lúc 2 khớp gối, bệnh nhân 67 tuổi chấm dứt hơn 10 năm đau đớn',
        date: '17:05 18/06/2025',
        description: 'Ca phẫu thuật thay hai khớp gối đồng thời đã giúp bệnh nhân 67 tuổi chấm dứt hơn 10 năm sống trong đau đớn và lấy lại khả năng vận động.'
      },
      {
        id: '27',
        slug: 'bai-viet-chuyen-mon-3',
        image: bvcm3,
        title: 'Hành trình tìm lại nụ cười cho những phụ nữ nhiều năm sợ soi gương',
        date: '17:05 18/06/2025',
        description: 'Các bác sĩ đã thực hiện phẫu thuật tái tạo thẩm mỹ, giúp nhiều phụ nữ tự tin trở lại với cuộc sống sau nhiều năm mặc cảm.'
      },
      {
        id: '28',
        slug: 'bai-viet-chuyen-mon-4',
        image: bvcm4,
        title: 'Cuộc marathon trong phòng mổ cứu sống bệnh nhân ung thư xương hiếm gặp',
        date: '17:05 18/06/2025',
        description: 'Ca phẫu thuật kéo dài nhiều giờ với sự nỗ lực không ngừng của đội ngũ y bác sĩ đã cứu sống bệnh nhân mắc ung thư xương hiếm gặp.'
      },
    ],
  }

  // Lấy dữ liệu cho tab hiện tại
  const allNewsItems = newsDataByTab[activeTab] || []
  const itemsPerPage = 8
  const totalPages = Math.ceil(allNewsItems.length / itemsPerPage)

  // Tính toán các items hiển thị dựa trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const newsItems = allNewsItems.slice(startIndex, endIndex)

  // Hàm xử lý khi chuyển tab - reset về trang 1
  const handleTabChange = (index) => {
    setActiveTab(index)
    setCurrentPage(1)
  }

  return (
    <div className="news-events-section">
      <div className="news-events-container">
        <div className="news-header">
          <div className="news-header-left">
            <p className="news-label">Tin tức & Sự kiện</p>
            
          </div>
          <div className="news-tabs">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`news-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabChange(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card">
              <Link to={`/news-events/${item.slug}`} className="news-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-image"
                />
              </Link>
              <div className="news-content">
                <Link to={`/news-events/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h4 className="news-title">{item.title}</h4>
                </Link>
                <p className="news-date">🕐 {item.date}</p>
                {item.description && (
                  <p className="news-description">{item.description}</p>
                )}
                <Link to={`/news-events/${item.slug}`} className="news-detail-link">Chi tiết</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="news-pagination">
          {isNewsEventsPage ? (
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))
          ) : (
            <Link to="/news-events" className="view-more-text">
              Xem thêm
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsEvents

