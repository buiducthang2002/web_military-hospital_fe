import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import './Navbar.css'
import Logo from '../Assets/Logo.jpg'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navbarRef = useRef(null)
  const location = useLocation()

  const menuItems = [
    { href: '/', label: 'Trang chủ', isRoute: true },
    { href: '/organization', label: 'Cơ cấu tổ chức', isRoute: true },
    { href: '/news-events', label: 'Tin tức, Sự kiện', isRoute: true },
    { href: '/kham-chua-benh', label: 'Khám chữa bệnh', isRoute: true, isDropdown: true },
    { href: '/party-politics', label: 'Công tác Đảng - Chính trị', isRoute: true },
    { href: '#research', label: 'Nghiên cứu khoa học - Hợp tác', isRoute: false },
    { href: '#guide', label: 'Hướng dẫn khách hàng', isRoute: false },
    { href: '#info', label: 'Thông tin chung', isRoute: false },
  ]

  const khamChuaBenhItems = [
    { href: '/kham-chua-benh', label: 'Quy trình khám chữa bệnh' },
    { href: '/kham-chua-benh/loai-hinh', label: 'Loại hình khám chữa bệnh' },
    { href: '/kham-chua-benh/thanh-toan', label: 'Quy trình thanh toán' },
    { href: '/kham-chua-benh/bang-gia', label: 'Bảng giá khám, chữa bệnh' },
  ]

  // Cập nhật activeMenu dựa trên location
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveMenu('/')
    }
  }, [location])

  // Bấm vào menu là cuộn về đầu trang
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/organization' || location.pathname === '/news-events') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  const handleMenuClick = (event, item) => {
    if (item.isRoute) {
      // Nếu đang ở cùng trang, prevent navigation và scroll to top
      if (item.href === location.pathname) {
        event.preventDefault()
        event.stopPropagation()
        setActiveMenu(item.href)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return false
      }
      // Nếu navigate sang trang khác, để React Router xử lý
      setActiveMenu(item.href)
      return
    }

    event.preventDefault()
    setActiveMenu(item.href)
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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (!target || typeof target.closest !== 'function') return
      
      // Check if click is on dropdown toggle (will be handled by onToggle)
      const isClickOnDropdownToggle = target.closest('.custom-nav-dropdown .dropdown-toggle')
      if (isClickOnDropdownToggle) {
        // Let onToggle handle it
        return
      }
      
      // Check if click is on dropdown menu or its items
      const isClickOnDropdownMenu = target.closest('.dropdown-menu')
      if (isClickOnDropdownMenu) {
        // Check if it's our custom dropdown menu
        const hasCustomItems = isClickOnDropdownMenu.querySelector('.custom-dropdown-item')
        if (hasCustomItems) {
          // Don't close when clicking on menu items
          return
        }
      }
      
      // Close if clicking outside
      setIsDropdownOpen(false)
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isDropdownOpen])

  // Keep dropdown open when hovering over dropdown menu
  useEffect(() => {
    const handleDropdownMenuHover = (e) => {
      const target = e.target
      if (!target || typeof target.closest !== 'function') return
      
      const dropdownMenu = target.closest('.dropdown-menu')
      if (dropdownMenu) {
        const hasCustomItems = dropdownMenu.querySelector('.custom-dropdown-item')
        if (hasCustomItems && isDropdownOpen) {
          // Keep it open when hovering over menu
          setIsDropdownOpen(true)
        }
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mouseenter', handleDropdownMenuHover, true)
      return () => {
        document.removeEventListener('mouseenter', handleDropdownMenuHover, true)
      }
    }
  }, [isDropdownOpen])

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
            item.isDropdown ? (
              <NavDropdown
                key={item.href}
                title="Khám chữa bệnh"
                id="kham-chua-benh-dropdown"
                menuVariant="dark"
                className="custom-nav-dropdown"
                show={isDropdownOpen}
                onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
                popperConfig={{
                  modifiers: [
                    {
                      name: 'preventOverflow',
                      options: {
                        boundary: 'viewport',
                      },
                    },
                    {
                      name: 'flip',
                      enabled: false,
                    },
                  ],
                }}
              >
                {khamChuaBenhItems.map(dropdownItem => (
                  <NavDropdown.Item
                    key={dropdownItem.href}
                    as={Link}
                    to={dropdownItem.href}
                    className="custom-dropdown-item"
                  >
                    {dropdownItem.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : item.isRoute ? (
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
            item.isDropdown ? (
              <NavDropdown
                key={item.href}
                title="Khám chữa bệnh"
                id="kham-chua-benh-dropdown-fixed"
                menuVariant="dark"
                className="custom-nav-dropdown"
                show={isDropdownOpen}
                onToggle={(isOpen) => setIsDropdownOpen(isOpen)}
                popperConfig={{
                  modifiers: [
                    {
                      name: 'preventOverflow',
                      options: {
                        boundary: 'viewport',
                      },
                    },
                    {
                      name: 'flip',
                      enabled: false,
                    },
                  ],
                }}
              >
                {khamChuaBenhItems.map(dropdownItem => (
                  <NavDropdown.Item
                    key={dropdownItem.href}
                    as={Link}
                    to={dropdownItem.href}
                    className="custom-dropdown-item"
                  >
                    {dropdownItem.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : item.isRoute ? (
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
