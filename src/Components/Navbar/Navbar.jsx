import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/Logo.jpg'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('#home')
  const menuItems = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#org', label: 'Cơ cấu tổ chức' },
    { href: '#news', label: 'Tin tức, Sự kiện' },
    { href: '#services', label: 'Khám chữa bệnh' },
    { href: '#party', label: 'Công tác Đảng- Chính trị' },
    { href: '#research', label: 'Nghiên cứu khoa học-Hợp tác' },
    { href: '#guide', label: 'Hướng dẫn khách hàng' },
    { href: '#info', label: 'Thông tin chung' },
  ]

  return (
    <div className="navbar">
      <div className="top-strip">
        <div className="quick-actions">
          <button className="btn btn-outline">Gọi tổng đài</button>
          <button className="btn btn-outline">Đặt lịch khám</button>
        </div>
      </div>

      <div className="navbar-top">
        <div className="logo-wrap">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="title-wrap">
          <div className="title-vi">BỆNH VIỆN QUÂN Y 4</div>
          <div className="title-en">MILITARY HOSPITAL</div>
        </div>

        <div className="actions-wrap">
          <div className="search-box">
            <input placeholder="Tìm kiếm............" />
            <span className="icon">| 🔍</span>
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        {menuItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={activeMenu === item.href ? 'active' : ''}
            onClick={() => setActiveMenu(item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
