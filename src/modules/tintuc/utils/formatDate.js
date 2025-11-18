/**
 * Format date utilities
 */

/**
 * Format date từ string hoặc Date object sang định dạng DD/MM/YYYY
 * @param {string|Date} date - Date string hoặc Date object
 * @returns {string} - Date đã format (DD/MM/YYYY)
 */
export const formatDate = (date) => {
  if (!date) return ''
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(dateObj.getTime())) {
    return ''
  }
  
  const day = String(dateObj.getDate()).padStart(2, '0')
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const year = dateObj.getFullYear()
  
  return `${day}/${month}/${year}`
}

/**
 * Format date sang định dạng đầy đủ (DD/MM/YYYY HH:mm)
 * @param {string|Date} date - Date string hoặc Date object
 * @returns {string} - Date đã format (DD/MM/YYYY HH:mm)
 */
export const formatDateTime = (date) => {
  if (!date) return ''
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(dateObj.getTime())) {
    return ''
  }
  
  const day = String(dateObj.getDate()).padStart(2, '0')
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const year = dateObj.getFullYear()
  const hours = String(dateObj.getHours()).padStart(2, '0')
  const minutes = String(dateObj.getMinutes()).padStart(2, '0')
  
  return `${day}/${month}/${year} ${hours}:${minutes}`
}

/**
 * Format date sang định dạng relative time (ví dụ: "2 ngày trước")
 * @param {string|Date} date - Date string hoặc Date object
 * @returns {string} - Relative time string
 */
export const formatRelativeTime = (date) => {
  if (!date) return ''
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(dateObj.getTime())) {
    return ''
  }
  
  const now = new Date()
  const diffInMs = now - dateObj
  const diffInSeconds = Math.floor(diffInMs / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)
  
  if (diffInSeconds < 60) {
    return 'Vừa xong'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} phút trước`
  } else if (diffInHours < 24) {
    return `${diffInHours} giờ trước`
  } else if (diffInDays < 7) {
    return `${diffInDays} ngày trước`
  } else {
    return formatDate(dateObj)
  }
}

/**
 * Format date sang định dạng ISO (YYYY-MM-DD)
 * @param {string|Date} date - Date string hoặc Date object
 * @returns {string} - Date đã format (YYYY-MM-DD)
 */
export const formatDateISO = (date) => {
  if (!date) return ''
  
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(dateObj.getTime())) {
    return ''
  }
  
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  
  return `${year}-${month}-${day}`
}

