import { useState } from 'react'
import { Activity, Building2, ClipboardCheck, Heart, UserRoundCheck } from 'lucide-react'
import './Doctors.css'

const Doctors = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <UserRoundCheck />,
      title: 'Đội ngũ chuyên gia đầu ngành',
      desc: 'Đội ngũ bác sĩ của chúng tôi có chuyên môn cao, nhiều năm kinh nghiệm và luôn sẵn sàng tư vấn, chăm sóc bệnh nhân tận tâm, chuyên nghiệp.',
    },
    {
      icon: <ClipboardCheck />,
      title: 'Quy trình chuẩn hóa, nhanh chóng',
      desc: 'Hệ thống quản lý khoa học giúp tối ưu hóa thủ tục hành chính, rút ngắn thời gian chờ đợi và đảm bảo độ chính xác trong từng bước thăm khám.',
    },
    {
      icon: <Building2 />,
      title: 'Hệ thống hạ tầng đồng bộ',
      desc: 'Không gian điều trị khang trang, sạch sẽ theo tiêu chuẩn y tế, tạo cảm giác an tâm và gần gũi cho người bệnh.',
    },
    {
      icon: <Activity />,
      title: 'Kỹ thuật y khoa tiên tiến',
      desc: 'Chủ động cập nhật và ứng dụng những phương pháp điều trị hiện đại, giúp nâng cao tỷ lệ thành công và rút ngắn thời gian hồi phục.',
    },
    {
      icon: <Heart />,
      title: 'Dịch vụ với chi phí tốt',
      desc: 'Mọi danh mục dịch vụ đều được niêm yết rõ ràng; hỗ trợ thanh toán bảo hiểm đúng quy định, giúp bệnh nhân yên tâm về tài chính.',
    },
  ]

  const testimonials = [
    'Sức mạnh cốt lõi của Bệnh viện Quân y 4 nằm ở đội ngũ y bác sĩ nhiệt huyết, luôn lấy sự an tâm và hồi phục của bệnh nhân làm kim chỉ nam cho mọi hành động.',
    'Chất lượng khám chữa bệnh tuyệt vời, các bác sĩ tận tình, thân thiện và chuyên nghiệp. Tôi rất hài lòng với dịch vụ và sẽ tiếp tục tin tưởng bệnh viện.',
    'Cơ sở vật chất hiện đại, quy trình thăm khám khoa học và hiệu quả. Đội ngũ y tế chu đáo, lắng nghe tận tình mỗi nhu cầu của bệnh nhân.',
    'Bệnh viện là nơi mà tôi cảm thấy an tâm được chăm sóc. Từ tiếp đón đến điều trị, mọi thứ đều được sắp xếp chu đáo và chuyên nghiệp.',
    'Dịch vụ chăm sóc bệnh nhân rất tốt, từ bác sĩ đến nhân viên y tế đều nhiệt tình phục vụ. Bệnh viện thực sự xứng đáng với sự tin tưởng của người bệnh.',
    'Tôi đã điều trị tại bệnh viện và rất hài lòng với kết quả. Các bác sĩ chuyên môn cao, giải thích bệnh tình rõ ràng, giúp tôi hiểu rõ hơn về sức khỏe.',
  ]

  return (
    <section className="doctors-section">
      <div className="doctors-section-header">
        <span className="doctors-section-bar" />
        <h2>NỀN TẢNG CHĂM SÓC BỆNH NHÂN</h2>
      </div>
      <div className="doctors-layout">
        <div className="doctors-features-list">
          {features.map((feature, idx) => (
            <article
              className={`doctors-feature-item ${activeFeature === idx ? 'active' : ''}`}
              key={feature.title}
              onClick={() => setActiveFeature(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveFeature(idx)
              }}
            >
              <div className="doctors-feature-icon">{feature.icon}</div>
              <div className="doctors-feature-content">
                <h3 className="doctors-feature-title">{feature.title}</h3>
                <p className="doctors-feature-desc">{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="doctors-highlights" aria-label="Những con số nổi bật">
          <div className="doctors-stat-grid">
            <div className="doctors-stat"><strong>70+</strong><span>Năm kinh nghiệm</span></div>
            <div className="doctors-stat"><strong>120+</strong><span>Bác sĩ chuyên khoa</span></div>
            <div className="doctors-stat"><strong>10,000+</strong><span>Bệnh nhân mỗi năm</span></div>
            <div className="doctors-stat"><strong>100%</strong><span>Hài lòng dịch vụ</span></div>
          </div>
          <div className="doctors-testimonials">
            {testimonials.map((testimonial, idx) => (
              <blockquote className="doctors-quote" key={idx}>
                {testimonial}
              </blockquote>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Doctors
