import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import './Navbar.css'
import Logo from '../Assets/Logo.jpg'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null) // 'kcb' | 'info' | null
  const navbarRef = useRef(null)
  const location = useLocation()

  const menuItems = [
    { href: '/', label: 'Trang chủ', isRoute: true },
    { href: '/organization', label: 'Cơ cấu tổ chức', isRoute: true },
    { href: '/news-events', label: 'Tin tức, Sự kiện', isRoute: true },
    { href: '/kham-chua-benh', label: 'Khám chữa bệnh', isRoute: true, isDropdown: true, dropdownKey: 'kcb' },
    { href: '/party-politics', label: 'Công tác Đảng - Chính trị', isRoute: true },
    { href: '/nghiencuu-hoptac', label: 'Nghiên cứu khoa học - Hợp tác', isRoute: true },
    { href: '/customer-guide', label: 'Hướng dẫn khách hàng', isRoute: true },
    { href: '/thong-tin-chung', label: 'Thông tin chung', isRoute: false, isDropdown: true, dropdownKey: 'info' },
  ]

  const khamChuaBenhItems = [
    { href: '/kham-chua-benh', label: 'Quy trình khám chữa bệnh' },
    { href: '/kham-chua-benh/loai-hinh', label: 'Thủ tục xuất viện' },
    { href: '/kham-chua-benh/thanh-toan', label: 'Quy trình thanh toán' },
    { href: '/kham-chua-benh/trang-thiet-bi', label: 'Trang thiết bị' },
  ]

  const infoItems = [
    { href: '/thong-tin-chung/thong-tin-benh-vien', label: 'Giới thiệu bệnh viện' },
    { href: '/thong-tin-chung/cac-don-vi', label: 'Giới thiệu các đơn vị' },
    { href: '/thong-tin-chung/thong-tin-duoc', label: 'Thông tin dược' },
    { href: '/thong-tin-chung/bao-hiem-y-te', label: 'Thông tin bảo hiểm y tế' },
    { href: '/thong-tin-chung/thu-chao-moi-san-pham', label: 'Thư chào mời sản phẩm' },
  ]

  const scrollToTopPaths = new Set([
    '/',
    '/organization',
    '/news-events',
    '/kham-chua-benh',
    '/kham-chua-benh/loai-hinh',
    '/kham-chua-benh/thanh-toan',
    '/kham-chua-benh/trang-thiet-bi',
    '/kham-chua-benh/cac-don-vi',
    '/thong-tin-chung/cac-don-vi',
    '/thong-tin-chung/thong-tin-duoc',
    '/thong-tin-chung/bao-hiem-y-te',
    '/thong-tin-chung/thu-chao-moi-san-pham',
  ])


  useEffect(() => {
    if (location.pathname === '/') {
      setActiveMenu('/')
    }
  }, [location])


  useEffect(() => {
    if (scrollToTopPaths.has(location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  const handleDropdownItemClick = () => {

    setOpenDropdown(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getScrollTarget = (href) => {
    if (!href) return null

    if (href.startsWith('#')) {
      try {
        return document.querySelector(href)
      } catch (error) {
        console.warn(`Invalid selector ${href}`, error)
        return null
      }
    }

    const normalizedId = href.replace(/^[#\\/]+/, '')
    if (!normalizedId) return null
    return document.getElementById(normalizedId)
  }

  const handleMenuClick = (event, item) => {
    if (item.isRoute) {

      if (item.href === location.pathname) {
        event.preventDefault()
        event.stopPropagation()
        setActiveMenu(item.href)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return false
      }

      setActiveMenu(item.href)
      return
    }

    event.preventDefault()
    setActiveMenu(item.href)
    const targetElement = getScrollTarget(item.href)
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


  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (!target || typeof target.closest !== 'function') return

      const isClickOnDropdownToggle = target.closest('.custom-nav-dropdown .dropdown-toggle')
      if (isClickOnDropdownToggle) {

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
      setOpenDropdown(null)
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [openDropdown])

  // Keep dropdown open when hovering over dropdown menu
  useEffect(() => {
    const handleDropdownMenuHover = (e) => {
      const target = e.target
      if (!target || typeof target.closest !== 'function') return

      const dropdownMenu = target.closest('.dropdown-menu')
      if (dropdownMenu) {
        const hasCustomItems = dropdownMenu.querySelector('.custom-dropdown-item')
        if (hasCustomItems && openDropdown) {
          // Keep it open when hovering over menu
          setOpenDropdown(openDropdown)
        }
      }
    }

    if (openDropdown) {
      document.addEventListener('mouseenter', handleDropdownMenuHover, true)
      return () => {
        document.removeEventListener('mouseenter', handleDropdownMenuHover, true)
      }
    }
  }, [openDropdown])

  return (
    <>
      <div className="navbar" ref={navbarRef}>
        <div className="top-strip">
          <div className="location-text">Đường Lê Viết Thuật, Phường Vinh Lộc, Tỉnh Nghệ An</div>
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
            <div className="title-vi">BỆNH VIỆN QUÂN Y 4 - CỤC HẬU CẦN KỸ THUẬT QUÂN KHU 4</div>
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
                title={item.label}
                id={`${item.dropdownKey}-dropdown`}
                menuVariant="dark"
                className="custom-nav-dropdown"
                show={openDropdown === item.dropdownKey}
                onToggle={(isOpen) => setOpenDropdown(isOpen ? item.dropdownKey : null)}
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
                {(item.dropdownKey === 'kcb' ? khamChuaBenhItems : infoItems).map(dropdownItem => (
                  <NavDropdown.Item
                    key={dropdownItem.href}
                    as={Link}
                    to={dropdownItem.href}
                    className="custom-dropdown-item"
                    onClick={handleDropdownItemClick}
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
                title={item.label}
                id={`${item.dropdownKey}-dropdown-fixed`}
                menuVariant="dark"
                className="custom-nav-dropdown"
                show={openDropdown === item.dropdownKey}
                onToggle={(isOpen) => setOpenDropdown(isOpen ? item.dropdownKey : null)}
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
                {(item.dropdownKey === 'kcb' ? khamChuaBenhItems : infoItems).map(dropdownItem => (
                  <NavDropdown.Item
                    key={dropdownItem.href}
                    as={Link}
                    to={dropdownItem.href}
                    className="custom-dropdown-item"
                    onClick={handleDropdownItemClick}
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
