import { HeartPulse, MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Youtube } from 'lucide-react'
import './Footer.css'

const contactItems = [
  {
    id: 'intro',
    icon: <HeartPulse size={20} />,
    label: 'Trang thông tin điện tử Bệnh viện quân y 4',
  },
  {
    id: 'address',
    icon: <MapPin size={20} />,
    label: 'Địa chỉ: Đường Lê Viết Thuật, Phường Vinh Lộc, Tỉnh Nghệ An',
  },
  {
    id: 'hotline',
    icon: <Phone size={20} />,
    label: 'Hotline: *********',
  },
  {
    id: 'email',
    icon: <Mail size={20} />,
    label: 'Benhvienquany4@gmail.com',
  },
]

const scheduleItems = [
  {
    id: 'appointment-clinic',
    title: 'Khoa Khám bệnh theo yêu cầu:',
    slots: [
      'Thứ 2 - Thứ 6: 06:00 - 20:00',
      'Thứ 7 - Chủ nhật: 06:30 - 16:30',
    ],
  },
  {
    id: 'clinic',
    title: 'Khoa Khám bệnh: Thứ 2 – Thứ 6',
    slots: ['Sáng: 07:00 - 12:00', 'Chiều: 13:30 - 16:30'],
  },
]

const infoLinks = [
  { id: 'about', label: 'Về Quân Y 4' },
  { id: 'recruitment', label: 'Tin tuyển dụng' },
  { id: 'bidding', label: 'Tin mời thầu' },
  { id: 'activities', label: 'Tin hoạt động' },
]

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__column footer__column--contact">
        <ul className="footer__list">
          {contactItems.map(({ id, icon, label }) => (
            <li key={id} className="footer__item">
              <span className="footer__icon">{icon}</span>
              <span className="footer__text">{label}</span>
            </li>
          ))}
          <li className="footer__item">
            <span className="footer__icon">
              <Clock size={20} />
            </span>
            <div className="footer__text footer__text--schedule">
              <span className="footer__schedule-title">Lịch làm việc:</span>
              <div className="footer__schedule-grid">
                {scheduleItems.map(({ id, title, slots }) => (
                  <div key={id} className="footer__schedule-block">
                    <p className="footer__schedule-heading">{title}</p>
                    <ul className="footer__schedule-list">
                      {slots.map((slot) => (
                        <li key={slot}>{slot}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="footer__column footer__column--links">
        <p className="footer__connect-title">Kết nối với chúng tôi qua:</p>
        <div className="footer__socials">
          <a href="/" className="footer__social footer__social--facebook" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="/" className="footer__social footer__social--youtube" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="/" className="footer__social footer__social--zalo" aria-label="Zalo">
            Zalo
          </a>
        </div>

        <div className="footer__link-list">
          {infoLinks.map(({ id, label }) => (
            <button key={id} type="button" className="footer__link">
              <span>{label}</span>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </div>
    </div>

    <p className="footer__copyright">
      Bản quyền © 2025 thuộc về Bệnh viện quân y 4 - Cục Hậu Cần Kỹ Thuật Quân Khu 4
    </p>
  </footer>
)

export default Footer

