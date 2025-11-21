
import Doctor1 from './Images/Doctor1.png'
import Doctor2 from './Images/Doctor2.png'

const Doctors = () => {


  const features = [
    {
      icon: <UserCheck size={48} />,
      title: 'Đội ngũ bác sĩ chất lượng hàng đầu',
      desc:
        'Đội ngũ bác sĩ của chúng tôi được đào tạo chuyên sâu, có nhiều năm kinh nghiệm và luôn sẵn sàng tư vấn, chăm sóc bệnh nhân một cách tận tâm và chuyên nghiệp.',
    },
    {
      icon: <ClipboardCheck size={48} />,
      title: 'Quy trình  khoa học - chuyên nghiệp',
      desc:
        'Tại Bệnh viện Quân y 4, chúng tôi cam kết cung cấp dịch vụ chăm sóc sức khỏe chất lượng cao thông qua quy trình làm việc khoa học và chuyên nghiệp.',
    },
    {
      icon: <Ambulance size={48} />,
      title: 'Cơ sở vật chất đạt chuẩn quốc gia ',
      desc:
        'Bệnh viện Quân y 4 được trang bị cơ sở vật chất hiện đại, sạch sẽ và thân thiện, đàm bảo môi trường an toàn và thoải mái cho bệnh nhân.',
    },
    {
      icon: <HeartHandshake size={48} />,
      title: 'Dịch vụ với chi phí hợp lý nhất',
      desc:
        'Chúng tôi khuyến khích bệnh nhân đặt lịch khám trực tuyến để tiết kiệm thời gian. Đội ngũ nhân viên sẵn sàng hỗ trợ bạn 24/7 qua hotline hoặc website.',
    },
  ]

  return (

    <section className="doctors-section">
      <div className="doctors-intro">
        <h2 className="intro-title">Military Hospital - Bệnh viện Quân y 4</h2>
        <p className="intro-desc">
          Tại Bệnh viện Quân y 4, chúng tôi cam kết mang đến cho bệnh nhân những dịch vụ chăm sóc sức khỏe chất lượng cao. Với tầm nhìn trở thành một trong những bệnh viện hàng đầu trong khu vực, chúng tôi không ngừng cải tiến chất lượng dịch vụ và đầu tư công nghệ hiện đại.
        </p>
      </div>


      <div className="doctors-layout">
        <div className="hospital-image-wrapper">
          <img 
            src={images[currentImageIndex]} 
            alt={`Bệnh viện Quân y 4 - Ảnh ${currentImageIndex + 1}`} 
            className="hospital-image" 
          />
          <div className="image-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Chuyển sang ảnh ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-content">
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Doctors
