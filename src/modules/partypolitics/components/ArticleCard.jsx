import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'
import { mapImagePath } from '../utils/imageMapper'
import './ArticleCard.css'

/**
 * Component hiển thị card bài viết
 * @param {Object} article - Object chứa thông tin bài viết
 * @param {string} article.id - ID bài viết
 * @param {string} article.title - Tiêu đề bài viết
 * @param {string} article.slug - Slug của bài viết
 * @param {string} article.image - URL hình ảnh
 * @param {string} article.date - Ngày đăng
 * @param {string} article.excerpt - Mô tả ngắn (optional)
 * @param {number} article.views - Số lượt xem (optional)
 */
const ArticleCard = ({ article }) => {
  if (!article) return null

  const articleUrl = `/party-politics/${article.slug || article.id}`

  const imageSrc = mapImagePath(article.image)

  const handleClick = () => {
    // Scroll to top khi chuyển trang
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Link to={articleUrl} className="article-card" onClick={handleClick}>
      <div className="article-image-wrapper">
        <img 
          src={imageSrc} 
          alt={article.title}
          className="article-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
          }}
        />
      </div>
      <div className="article-content">
        <h4 className="article-title">{article.title}</h4>
        <div className="article-meta">
          <p className="article-date">{formatDate(article.date)}</p>
          {article.views !== undefined && (
            <p className="article-views">{article.views} lượt xem</p>
          )}
        </div>
        {article.excerpt && (
          <p className="article-excerpt">{article.excerpt}</p>
        )}
      </div>
    </Link>
  )
}

export default ArticleCard

