import React from 'react'
import ArticleCard from './ArticleCard'
import './NewsGrid.css'

/**
 * Component hiển thị grid tin tức
 * @param {Array} news - Mảng các bài viết
 * @param {number} columns - Số cột (mặc định: 4)
 */
const NewsGrid = ({ news = [], columns = 4 }) => {
  if (!news || news.length === 0) {
    return (
      <div className="news-grid-empty">
        <p>Không có tin tức nào</p>
      </div>
    )
  }

  return (
    <div 
      className="news-grid" 
      style={{ '--columns': columns }}
    >
      {news.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default NewsGrid

