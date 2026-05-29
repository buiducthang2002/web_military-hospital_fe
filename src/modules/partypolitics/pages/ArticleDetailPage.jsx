import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { formatDate } from '../utils/formatDate'
import { getPartyCategoryById } from '../categories'
import { mapArticlesImages, mapImagePath } from '../utils/imageMapper'
import { getArticleContent } from '../content'
import allNewsData from '../data/allNews.json'
import { getArticleBySlug } from '../../../lib/articles'
import './ArticleDetailPage.css'

/**
 * Trang chi tiết bài viết
 */
const ArticleDetailPage = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [relatedNews, setRelatedNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    let cancelled = false

    const resolveStaticImages = (html, fallbackImage) => {
      if (!html) return html
      let result = html
      if (fallbackImage) {
        result = result.replace(/\{\{ARTICLE_IMAGE\}\}/g, fallbackImage)
      }
      const imagePlaceholderRegex = /\{\{([^}]+\.(jpg|jpeg|png|gif|webp))\}\}/gi
      result = result.replace(imagePlaceholderRegex, (_m, imageName) => {
        const mapped = mapImagePath(imageName)
        return mapped || imageName
      })
      return result
    }

    const loadFromStatic = () => {
      const newsWithImages = mapArticlesImages(allNewsData)
      const foundArticle = newsWithImages.find(item => item.slug === slug)
      if (!foundArticle) return null

      const contentFromFile = getArticleContent(slug, foundArticle.content)
      const content = resolveStaticImages(contentFromFile, foundArticle.image)

      const related = newsWithImages
        .filter(item => item.categoryId === foundArticle.categoryId && item.id !== foundArticle.id)
        .slice(0, 4)

      return { article: { ...foundArticle, content }, related }
    }

    const run = async () => {
      try {
        const sanityArticle = await getArticleBySlug(slug)
        if (cancelled) return

        if (sanityArticle && sanityArticle.module === 'partypolitics') {
          setArticle(sanityArticle)
          const newsWithImages = mapArticlesImages(allNewsData)
          const related = newsWithImages
            .filter(item => item.categoryId === sanityArticle.categoryId && item.slug !== sanityArticle.slug)
            .slice(0, 4)
          setRelatedNews(related)
          return
        }

        const fromStatic = loadFromStatic()
        if (fromStatic) {
          setArticle(fromStatic.article)
          setRelatedNews(fromStatic.related)
        }
      } catch {
        const fromStatic = loadFromStatic()
        if (fromStatic) {
          setArticle(fromStatic.article)
          setRelatedNews(fromStatic.related)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => { cancelled = true }
  }, [slug])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        <Navbar />
        <div className="article-detail-loading">
          <p>Đang tải...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        <Navbar />
        <div className="article-detail-not-found">
          <h2>Không tìm thấy bài viết</h2>
          <Link to="/party-politics" className="back-link">
            ← Quay lại trang Công tác Đảng - Chính trị
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const category = getPartyCategoryById(article.categoryId)

  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div className="article-detail-page">
        <div className="article-detail-container">
          {/* Breadcrumb */}
          <nav className="article-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span> | </span>
            <Link to="/party-politics">Công tác Đảng - Chính trị</Link>
            {category && (
              <>
                <span> | </span>
                <span className="category-text">{category.displayName}</span>
              </>
            )}
            
          </nav>

          {/* Article Header */}
          <div className="article-detail-header">
            <h1 className="article-detail-title">{article.title}</h1>
            <div className="article-detail-meta">
              <span className="article-meta-item">
                <strong>Ngày đăng:</strong> {formatDate(article.date)}
              </span>
              {article.author && (
                <span className="article-meta-item">
                  <strong>Tác giả:</strong> {article.author}
                </span>
              )}
              {article.views !== undefined && (
                <span className="article-meta-item">
                  <strong>Lượt xem:</strong> {article.views}
                </span>
              )}
            </div>
          </div>

          {/* Article Image */}
          {article.image && (
            <div className="article-detail-image-wrapper">
              <img 
                src={article.image} 
                alt={article.title}
                className="article-detail-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400?text=No+Image'
                }}
              />
            </div>
          )}

          {/* Article Content */}
          <div className="article-detail-content">
            <div className="article-body">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p>Nội dung bài viết đang được cập nhật...</p>
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="article-tags">
                <strong>Tags: </strong>
                {article.tags.map((tag, index) => (
                  <span key={index} className="article-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="related-news-section">
              <h2 className="related-news-title">Tin tức liên quan</h2>
              <ul className="related-news-list">
                {relatedNews.map((item, index) => (
                  <li key={item.id} className="related-news-item">
                    <Link 
                      to={`/party-politics/${item.slug}`}
                      className="related-news-link"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Share Buttons */}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ArticleDetailPage

