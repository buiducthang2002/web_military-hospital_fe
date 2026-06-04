import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import usePageMeta from '../../hooks/usePageMeta'

/**
 * Trang xem tài liệu (PDF) nhúng trực tiếp trong web thay vì tải về.
 * Dùng qua route: /xem-tai-lieu?file=<url-da-encode>
 */
const DocumentViewer = () => {
  const [params] = useSearchParams()
  const file = params.get('file') || ''
  usePageMeta('Xem tài liệu')

  return (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {file ? (
        <iframe
          src={file}
          title="Tài liệu"
          style={{ flex: 1, width: '100%', border: 'none', minHeight: '85vh' }}
        />
      ) : (
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <p>Không tìm thấy tài liệu.</p>
          <Link to="/">← Về trang chủ</Link>
        </div>
      )}
    </div>
  )
}

export default DocumentViewer
