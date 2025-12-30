
  
  
  
  
  import { Link } from 'react-router-dom'
import { FiActivity, FiGlobe, FiMapPin, FiFileText, FiChevronRight } from 'react-icons/fi'
import './NewsEvents.css'

import anhqh1 from './Images/anhqh1.jpg'
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
import ttbv51 from './Images/ttbv51.jpg'
import ttbv85 from './Images/ttbv85.jpg'
import ttbv61 from './Images/ttbv61.jpg'
import ttbv7 from './Images/ttbv7.jpg'
  

const NewsEvents = () => {
  const newsCategories = [
    { key: 'hospital', label: 'Tin tức hoạt động bệnh viện', icon: FiActivity },
    { key: 'world', label: 'Tin tức y học thế giới', icon: FiGlobe },
    { key: 'domestic', label: 'Tin tức y học trong nước', icon: FiMapPin },
    { key: 'expert', label: 'Bài viết chuyên môn', icon: FiFileText }
  ]

  // Dữ liệu tin tức cho từng tab
  const newsDataByTab = {
    hospital: [
      {
        id: '17',
        slug: 'tin-tuc-hoat-dong-benh-vien-1',
        image: ttbv1,
        title: 'Bệnh viện Quân y 4: Hướng tới sự hài lòng của người bệnh',
        date: '17:05 18/06/2025',
        description: 'Bệnh viện Quân y 4 không ngừng nâng cao chất lượng khám chữa bệnh, cải thiện cơ sở vật chất và dịch vụ nhằm mang lại sự hài lòng cao nhất '
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
        title: 'Bệnh viện Quân y 103 ký kết đào tạo hỗ trợ chuyên môn với Bệnh viện Quân y 4',
        date: '17:05 18/06/2025',
        description: 'Hai bệnh viện đã ký kết thỏa thuận hợp tác trong đào tạo, quản lý cán bộ y tế, chuyển giao kỹ thuật và hỗ trợ chuyên môn.'
      },
        {
        id: '21a',
        slug: 'tin-tuc-hoat-dong-benh-vien-5',
        image: ttbv51,
        title: 'Bệnh viện Quân y 4 hoàn thành tốt nhiệm vụ năm 2025',
        date: '17:05 18/06/2025',
        description: '  Chiều ngày 26/11/2025, Bệnh viện Quân y 4 tổ chức Hội nghị quân chính năm 2025. Đại tá, Thầy thuốc ưu tú, Bác sỹ CKII Nguyễn An Giang, Giám đốc chủ trì hội nghị.Dự hội nghị có Thượng tá Thái Kiên Định'
      },
      {
        id: '21b',
        slug: 'tin-tuc-hoat-dong-benh-vien-6',
        image: ttbv61,
        title: ' Bệnh viện Quân y 4 vinh dự nhận cờ thi đua của Thủ trưởng Bộ Quốc Phòng',
        date: '17:05 18/06/2025',
        description: '  Sáng 28-11, tại TP Hồ Chí Minh, Thượng tướng Vũ Hải Sản, Ủy viên Trung ương Đảng, Thứ trưởng Bộ Quốc phòng chủ trì Hội nghị sơ kết thực hiện Chỉ thị số 97/CT-BQP và Chỉ thị số 85/CT-BQP'
      },
      {
        id: '21c',
        slug: 'tin-tuc-hoat-dong-benh-vien-7',
        image: ttbv7,
        title: 'Chuẩn bị chu đáo tham gia Hội thi Điều dưỡng viên toàn quân năm 2026',
        date: '17:05 18/06/2025',
        description: '  Công tác chuẩn bị cho Hội thi Điều dưỡng viên các bệnh viện trong Quân đội năm 2026 đang được Bệnh viện Quân y 4 (Cục Hậu cần - Kỹ thuật Quân khu 4) xác định là một trong những nhiệm vụ trọng tâm'
      },
      {
        id: '21d',
        slug: 'tin-tuc-hoat-dong-benh-vien-8',
        image: ttbv85,
        title: 'Đảng ủy Bệnh viện Quân y 4: Ra nghị quyết lãnh đạo thực hiện nhiệm vụ năm 2026',
        date: '17:05 18/06/2025',
        description: 'Năm 2025, Đảng ủy, Ban Giám đốc Bệnh viện lãnh đạo triển khai toàn diện các mặt công tác; duy trì nghiêm nền nếp trực sẵn sàng chiến đấu (SSCĐ) và chế độ trực chuyên môn, nhất là dịp lễ '
      },

    ],
    world: [
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
        description: 'WHO khẳng định tất cả các dạng thuốc lá, bao gồm thuốc lá điện tử và các sản phẩm mới, đều gây hại nghiêm trọng đến sức khỏe con người và những người xung quanh.'
      },
      {
        id: '3',
        slug: 'tin-tuc-y-hoc-the-gioi-3',
        image: yttg1,
        title: 'Nguy cơ lây lan cao của virus Chikungunya',
        date: '17:05 18/06/2025',
        description: 'Các chuyên gia y tế cảnh báo về nguy cơ gia tăng sự lây lan của virus Chikungunya do sự thay đổi khí hậu và sự di chuyển của người dân trong thời gian vừa qua.'
      },
      {
        id: '4',
        slug: 'tin-tuc-y-hoc-the-gioi-4',
        image: yttg41,
        title: 'Đại Hội đồng Y tế thế giới nhất trí trao thêm quyền cho Palestine',
        date: '17:05 18/06/2025',
        description: 'Đại Hội đồng Y tế Thế giới đã thông qua nghị quyết trao thêm quyền và trách nhiệm cho Palestine trong các hoạt động y tế quốc tế thế giới hiện nay và tương lai.'
      },
    ],
    domestic: [
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
    
    expert: [
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

  return (
    <div className="news-events-section">
      <div className="news-events-container">
        <div className="section-main-header">
          <p className="section-main-title">Tin tức & Sự kiện</p>
        </div>

        {/* Render mỗi category thành một hàng riêng */}
        {newsCategories.map((category) => {
          const Icon = category.icon
          const newsItems = newsDataByTab[category.key] || []
          const displayItems = newsItems.slice(0, 4) // Hiển thị 4 tin đầu tiên

          return (
            <div key={category.key} className="news-category-section">
              {/* Header cho mỗi category */}
              <div className="category-header">
                <div className="category-title-wrapper">
                  <Icon className="category-icon" />
                  <h3 className="category-title">{category.label}</h3>
                </div>
                <Link to="/news-events" className="category-see-more">
                  XEM THÊM <FiChevronRight /><FiChevronRight />
                </Link>
              </div>

              {/* Grid hiển thị tin tức */}
              <div className="news-grid">
                {displayItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news-events/${item.slug}`}
                    className="news-card-link"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="news-card">
                      <div className="news-image-wrapper">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="news-image"
                        />
                      </div>
                      <div className="news-content">
                        <h4 className="news-title">{item.title}</h4>
                        <p className="news-date">🕐 {item.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewsEvents

