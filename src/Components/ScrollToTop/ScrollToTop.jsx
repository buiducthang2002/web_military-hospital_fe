import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Đưa trang về đầu mỗi khi chuyển route.
// Giữ nguyên vị trí cuộn khi người dùng bấm back/forward (POP)
// và khi URL có hash để còn nhảy tới đúng phần tử.
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP' || hash) return
    window.scrollTo(0, 0)
  }, [pathname, search, hash, navigationType])

  return null
}

export default ScrollToTop
