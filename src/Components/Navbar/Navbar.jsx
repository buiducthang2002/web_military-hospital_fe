import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import Logo from '../Assets/Logo.jpg'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const navbarRef = useRef(null)
  const location = useLocation()

  const menuItems = [
    { href: '/', label: 'Trang chủ', isRoute: true },
    { href: '/organization', label: 'Cơ cấu tổ chức', isRoute: true },
    { href: '#news', label: 'Tin tức, Sự kiện', isRoute: false },
    { href: '#services', label: 'Khám chữa bệnh', isRoute: false },
    { href: '#party', label: 'Công tác Đảng - Chính trị', isRoute: false },
    { href: '#research', label: 'Nghiên cứu khoa học - Hợp tác', isRoute: false },
    { href: '#guide', label: 'Hướng dẫn khách hàng', isRoute: false },
    { href: '#info', label: 'Thông tin chung', isRoute: false },
  ]

  // Cập nhật activeMenu dựa trên location
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveMenu('/')
    }
  }, [location])
//Bấm vào menu là cuộn về đầu trang
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  const handleMenuClick = (event, item) => {
    setActiveMenu(item.href)

    if (item.isRoute) {
      if (item.href === '/' && location.pathname === '/') {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    event.preventDefault()
    const targetElement = document.querySelector(item.href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarBottom = navbarRef.current.getBoundingClientRect().bottom
        setIsScrolled(navbarBottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="navbar" ref={navbarRef}>
        <div className="top-strip">
          <div className="quick-actions">
            <button className="btn btn-outline">Gọi tổng đài</button>
            <button className="btn btn-outline">Đặt lịch khám</button>
          </div>
        </div>

        <div className="navbar-top">
          <div className="logo-wrap">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
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
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className={location.pathname === item.href ? 'active' : ''}
                onClick={event => handleMenuClick(event, item)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={activeMenu === item.href ? 'active' : ''}
                onClick={event => handleMenuClick(event, item)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
      {isScrolled && (
        <div className="navbar-menu fixed-menu">
          {menuItems.map(item => (
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className={location.pathname === item.href ? 'active' : ''}
                onClick={event => handleMenuClick(event, item)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={activeMenu === item.href ? 'active' : ''}
                onClick={event => handleMenuClick(event, item)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
