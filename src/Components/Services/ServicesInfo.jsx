import React from 'react'

const ServicesInfo = () => {
  return (
    <div className="services-info">
      <div className="info-left">
        <h2 className="info-title">Chuyên nghiệp - An toàn - Hiệu quả - Tin cậy</h2>
        <p className="info-slogan">
          Sức khỏe <span className="highlight">Hôm nay</span> - Niềm tin <span className="highlight">Tương lai</span>
        </p>
      </div>

      <div className="info-right">
        <p className="info-description">
          Bệnh viện Quân y 4 là bệnh viện hoàn chỉnh tại Việt Nam, với tầm nhìn trở thành bệnh viện uy tín trong khu vực.
          Chúng tôi cam kết chăm sóc sức khỏe toàn diện cho mọi người dân bằng tài năng, y đức và sự tận tâm.......
          <button className="read-more-btn">Xem thêm</button>
        </p>
      </div>
    </div>
  )
}

export default ServicesInfo

