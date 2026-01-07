import React from 'react'
import { Link } from 'react-router-dom'
import './SearchResults.css'

const SearchResults = ({ results, onClose, searchTerm }) => {
  if (results.length === 0) {
    return (
      <div className="search-results-dropdown">
        <div className="search-no-results">
          Không tìm thấy kết quả cho "{searchTerm}"
        </div>
      </div>
    )
  }

  return (
    <div className="search-results-dropdown">
      <div className="search-results-header">
        Tìm thấy {results.length} kết quả
      </div>
      <div className="search-results-list">
        {results.map((article) => (
          <Link
            key={article.id}
            to={`/news-events/${article.slug}`}
            className="search-result-item"
            onClick={onClose}
          >
            <div className="search-result-content">
              <h4 className="search-result-title">{article.title}</h4>
              <p className="search-result-excerpt">
                {article.excerpt?.substring(0, 100)}...
              </p>
              <div className="search-result-meta">
                <span className="search-result-date">{article.date}</span>
                {article.tags && article.tags.length > 0 && (
                  <span className="search-result-tags">
                    {article.tags.slice(0, 2).join(', ')}
                  </span>
                )}
              </div>
            </div>
            {article.image && (
              <div className="search-result-image">
                <img
                  src={article.image}
                  alt={article.title}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            )}
          </Link>
        ))}
      </div>
      {results.length > 5 && (
        <div className="search-results-footer">
          <Link to="/news-events" className="search-view-all" onClick={onClose}>
            Xem tất cả kết quả
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchResults
