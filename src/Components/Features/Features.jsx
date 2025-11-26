import './Features.css'
import anh1 from './Images/anh1.jpg'
import anh2 from './Images/anh2.jpg'
import anh3 from './Images/anh3.jpg'
import anh4 from './Images/anh4.jpg'
import { useNavigate } from 'react-router-dom'

const Features = () => {
  const navigate = useNavigate()
  const features = [
    {
      image: anh1,
      title: 'Đăng ký khám',
      path: ''
    },
    {
      image: anh2,
      title: 'Quy trình khám',
      path: '/kham-chua-benh'
    },
    {
      image: anh3,
      title: 'Giới thiệu các đơn vị',
      path: '/thong-tin-chung/cac-don-vi'
    },
    {
      image: anh4,
      title: 'Trang thiết bị',
      path: '/kham-chua-benh/trang-thiet-bi'
    }
  ]

  return (
    <div className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-panel" onClick={() => feature.path && navigate(feature.path)} style={{ cursor: 'pointer' }}>
            <div className="feature-image-wrapper">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="feature-image"
              />
            </div>
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features

