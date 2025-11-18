import React from 'react'
import './Pagination.css'

/**
 * Component phân trang
 * @param {number} currentPage - Trang hiện tại
 * @param {number} totalPages - Tổng số trang
 * @param {Function} onPageChange - Callback khi đổi trang
 * @param {number} maxVisiblePages - Số trang tối đa hiển thị (mặc định: 5)
 */
const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  maxVisiblePages = 5 
}) => {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const halfVisible = Math.floor(maxVisiblePages / 2)
    
    let startPage = Math.max(1, currentPage - halfVisible)
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    
    return pages
  }

  const pageNumbers = getPageNumbers()

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="pagination">
      <button
        className="pagination-btn pagination-btn-nav"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Trang trước"
      >
        ‹
      </button>
      
      {pageNumbers[0] > 1 && (
        <>
          <button
            className="pagination-btn"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {pageNumbers[0] > 2 && (
            <span className="pagination-dots">...</span>
          )}
        </>
      )}
      
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="pagination-dots">...</span>
          )}
          <button
            className="pagination-btn"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        className="pagination-btn pagination-btn-nav"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Trang sau"
      >
        ›
      </button>
    </div>
  )
}

export default Pagination

