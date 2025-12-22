import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar as BootstrapNavbar, NavDropdown, Container, Offcanvas } from 'react-bootstrap'
import './Navbar.css'
import Logo from '../Assets/Logo.jpg'
import { FiMinus, FiPlus } from 'react-icons/fi'

const SCROLL_TO_TOP_PATHS = new Set([
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

const MOBILE_MENU_HOTLINE_DISPLAY = '1900.888.866'
const MOBILE_MENU_HOTLINE_TEL = '1900888866'
const MOBILE_MENU_BOOKING_PATH = '/book-appointment'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null) // 'kcb' | 'info' | 'org' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileExpandedKey, setMobileExpandedKey] = useState(null) // 'org' | 'kcb' | 'info' | null
  const navbarRef = useRef(null)
  const location = useLocation()

  const menuItems = [
    { href: '/', label: 'Trang chủ', isRoute: true },
    { href: '/organization', label: 'Tổ chức bệnh viện', isRoute: true, isDropdown: true, dropdownKey: 'org' },
    { href: '/news-events', label: 'Tin tức - Sự kiện', isRoute: true },
    { href: '/kham-chua-benh', label: 'Khám chữa bệnh', isRoute: true, isDropdown: true, dropdownKey: 'kcb' },
    { href: '/party-politics', label: 'Công tác Đảng - Chính trị', isRoute: true },
    { href: '/nghiencuu-hoptac', label: 'Nghiên cứu khoa học - Hợp tác', isRoute: true },
    { href: '/customer-guide', label: 'Dành cho khách hàng', isRoute: true },
    { href: '/thong-tin-chung', label: 'Thông tin chung', isRoute: false, isDropdown: true, dropdownKey: 'info' },
  ]

  const organizationItems = [
    { href: '/organization', label: 'Ban giám đốc bệnh viện' },
    { href: '/thong-tin-chung/thong-tin-benh-vien', label: 'Giới thiệu bệnh viện' },
    { href: '/thong-tin-chung/cac-don-vi', label: 'Giới thiệu các đơn vị' },
  ]

  const khamChuaBenhItems = [
    { href: '/kham-chua-benh', label: 'Quy trình khám chữa bệnh' },
    { href: '/kham-chua-benh/loai-hinh', label: 'Thủ tục xuất viện' },
    { href: '/kham-chua-benh/thanh-toan', label: 'Quy trình thanh toán' },
    { href: '/kham-chua-benh/trang-thiet-bi', label: 'Trang thiết bị' },
    { href: 'http://117.4.137.26:11664/?c=banggia', label: 'Bảng giá dịch vụ' },
  ]

  const infoItems = [

    { href: 'https://moh.gov.vn/cong-bo-thong-tin-lien-quan-den-linh-vuc-duoc', label: 'Thông tin dược' },
    { href: 'https://baohiemxahoi.gov.vn/tracuu/pages/tra-cuu-thoi-han-su-dung-the-bhyt.aspx', label: 'Thông tin bảo hiểm y tế' },
    { href: '/thong-tin-chung/thu-chao-moi-san-pham', label: 'Thư chào mời sản phẩm' },
    { href: '/thong-tin-chung/tool', label: 'Tool' },
  ]

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveMenu('/')
    }
  }, [location])


  useEffect(() => {
    if (SCROLL_TO_TOP_PATHS.has(location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  // Close mobile drawer when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileExpandedKey(null)
  }, [location.pathname])

  // Reset expanded section when drawer closes
  useEffect(() => {
    if (!isMobileMenuOpen) setMobileExpandedKey(null)
  }, [isMobileMenuOpen])

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

  const getMobileDropdownItems = (dropdownKey) => {
    if (dropdownKey === 'org') return organizationItems
    if (dropdownKey === 'kcb') return khamChuaBenhItems
    if (dropdownKey === 'info') return infoItems
    return []
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setMobileExpandedKey(null)
  }

  const handleMobileLeafClick = () => {
    closeMobileMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Mobile Bootstrap Navbar - Only visible on mobile */}
      <BootstrapNavbar 
        bg="success" 
        variant="dark" 
        expand={false} 
        className="mobile-navbar-bootstrap" 
        fixed="top"
      >
        <Container fluid>
          <BootstrapNavbar.Brand as={Link} to="/">
            <img
              src={Logo}
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </BootstrapNavbar.Brand>
          <div className="position-absolute start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center text-center text-white">
            <span className="fw-bold" style={{ fontSize: '11px', lineHeight: '1.2', whiteSpace: 'nowrap' }}>Bệnh viện Quân y 4</span>
            <span style={{ fontSize: '11px', lineHeight: '1.2', whiteSpace: 'nowrap' }}>Military Central Hospital </span>
          </div>
          <BootstrapNavbar.Toggle
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </Container>
      </BootstrapNavbar>

      {/* Mobile Drawer Menu (Offcanvas) */}
      <Offcanvas
        show={isMobileMenuOpen}
        onHide={closeMobileMenu}
        placement="start"
        className="mobile-drawer"
        backdrop
        scroll={false}
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <div className="mobile-drawer-body">
            <ul className="mobile-menu">
              {menuItems.map((item) => {
                const isExpanded = mobileExpandedKey === item.dropdownKey
                const isDropdown = Boolean(item.isDropdown)

                if (!isDropdown) {
                  const isExternal = item.href.startsWith('http')
                  return (
                    <li key={item.href} className="mobile-menu-item">
                      {isExternal ? (
                        <a
                          className="mobile-menu-row"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleMobileLeafClick}
                        >
                          <span className="mobile-menu-label">{item.label}</span>
                        </a>
                      ) : (
                        <Link
                          className="mobile-menu-row"
                          to={item.href}
                          onClick={handleMobileLeafClick}
                        >
                          <span className="mobile-menu-label">{item.label}</span>
                        </Link>
                      )}
                    </li>
                  )
                }

                return (
                  <li key={item.href} className="mobile-menu-item">
                    <button
                      type="button"
                      className="mobile-menu-row mobile-menu-row--toggle"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setMobileExpandedKey(isExpanded ? null : item.dropdownKey)
                      }
                    >
                      <span className="mobile-menu-label">{item.label}</span>
                      <span className="mobile-menu-icon" aria-hidden="true">
                        {isExpanded ? <FiMinus /> : <FiPlus />}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="mobile-submenu">
                        {getMobileDropdownItems(item.dropdownKey).map((subItem) => {
                          const isExternal = subItem.href.startsWith('http')
                          return isExternal ? (
                            <a
                              key={subItem.href}
                              className="mobile-submenu-link"
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={handleMobileLeafClick}
                            >
                              {subItem.label}
                            </a>
                          ) : (
                            <Link
                              key={subItem.href}
                              className="mobile-submenu-link"
                              to={subItem.href}
                              onClick={handleMobileLeafClick}
                            >
                              {subItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                className="mobile-drawer-btn mobile-drawer-btn--outline"
                href={`tel:${MOBILE_MENU_HOTLINE_TEL}`}
                onClick={closeMobileMenu}
              >
                Gọi tổng đài {MOBILE_MENU_HOTLINE_DISPLAY}
              </a>
              <Link
                className="mobile-drawer-btn mobile-drawer-btn--solid"
                to={MOBILE_MENU_BOOKING_PATH}
                onClick={handleMobileLeafClick}
              >
                Đặt lịch khám
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Desktop Navbar - Unchanged, hidden on mobile */}
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
            <div className="title-en">Military Central Hospital 4</div>
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
                {(item.dropdownKey === 'org' ? organizationItems : item.dropdownKey === 'kcb' ? khamChuaBenhItems : infoItems).map(dropdownItem => (
                  <NavDropdown.Item
                    key={dropdownItem.href}
                    as={dropdownItem.href.startsWith('http') ? 'a' : Link}
                    to={dropdownItem.href.startsWith('http') ? undefined : dropdownItem.href}
                    href={dropdownItem.href.startsWith('http') ? dropdownItem.href : undefined}
                    target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                    rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                {(item.dropdownKey === 'org' ? organizationItems : item.dropdownKey === 'kcb' ? khamChuaBenhItems : infoItems).map(dropdownItem => (
                  <NavDropdown.Item
                    key={dropdownItem.href}
                    as={dropdownItem.href.startsWith('http') ? 'a' : Link}
                    to={dropdownItem.href.startsWith('http') ? undefined : dropdownItem.href}
                    href={dropdownItem.href.startsWith('http') ? dropdownItem.href : undefined}
                    target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                    rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
