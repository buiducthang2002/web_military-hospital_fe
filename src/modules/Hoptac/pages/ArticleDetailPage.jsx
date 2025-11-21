import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import { formatDate, formatDateTime } from '../utils/formatDate'
import { getPartyCategoryById } from '../categories'
import { mapArticlesImages, mapImagePath } from '../utils/imageMapper'
import { getArticleContent } from '../content'
import allNewsData from '../data/allNews.json'
import './ArticleDetailPage.css'

/**
 * Trang chi tiết bài viết Nghiên cứu khoa học - Hợp tác
 */
const ArticleDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [relatedNews, setRelatedNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Scroll to top khi load trang
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Map images cho all news data
    const newsWithImages = mapArticlesImages(allNewsData)
    
    // Tìm bài viết theo slug
    const foundArticle = newsWithImages.find(item => item.slug === slug)
    
    if (foundArticle) {
      // Lấy nội dung từ file riêng nếu có, nếu không thì dùng nội dung từ JSON
      let contentFromFile = getArticleContent(slug, foundArticle.content)
      
      // Thay thế placeholder {{ARTICLE_IMAGE}} bằng ảnh thực tế nếu có
      if (contentFromFile && foundArticle.image) {
        contentFromFile = contentFromFile.replace(/\{\{ARTICLE_IMAGE\}\}/g, foundArticle.image)
      }
      
      // Thay thế các placeholder dạng {{tên_file.jpg}} bằng đường dẫn ảnh đã được map
      if (contentFromFile) {
        // Tìm tất cả các placeholder dạng {{tên_file}}
        const imagePlaceholderRegex = /\{\{([^}]+\.(jpg|jpeg|png|gif|webp))\}\}/gi
        contentFromFile = contentFromFile.replace(imagePlaceholderRegex, (match, imageName) => {
          // Map tên file thành đường dẫn ảnh thực tế
          const mappedImage = mapImagePath(imageName)
          return mappedImage || imageName
        })
      }
      
      // Tạo article object với nội dung đã được cập nhật
      const articleWithContent = {
        ...foundArticle,
        content: contentFromFile
      }
      
      setArticle(articleWithContent)
      
      // Lấy các bài viết liên quan (cùng category, loại trừ bài hiện tại)
      const related = newsWithImages
        .filter(item => 
          item.categoryId === foundArticle.categoryId && 
          item.id !== foundArticle.id
        )
        .slice(0, 4)
      
      setRelatedNews(related)
    }
    
    setLoading(false)
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
          <Link to="/nghiencuu-hoptac" className="back-link">
            ← Quay lại trang Nghiên cứu khoa học - Hợp tác
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const category = getPartyCategoryById(article.categoryId)

  // Hàm chia sẻ lên Facebook
  const handleShareFacebook = () => {
    const url = window.location.href
    const title = article.title
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  // Hàm chia sẻ lên Zalo
  const handleShareZalo = () => {
    const url = window.location.href
    const title = article.title
    const shareUrl = `https://zalo.me/share?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }

  // Hàm copy link
  const handleCopyLink = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      alert('Đã sao chép link bài viết!')
    } catch (err) {
      // Fallback cho trình duyệt cũ
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Đã sao chép link bài viết!')
    }
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div className="article-detail-page">
        <div className="article-detail-container">
          {/* Breadcrumb */}
          <nav className="article-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span> | </span>
            <Link to="/nghiencuu-hoptac">Nghiên cứu khoa học - Hợp tác</Link>
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
                        to={`/nghiencuu-hoptac/${item.slug}`}
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

