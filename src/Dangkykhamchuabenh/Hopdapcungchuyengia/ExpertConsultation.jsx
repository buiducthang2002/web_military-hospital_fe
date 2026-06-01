import usePageMeta from '../../hooks/usePageMeta'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const ExpertConsultation = () => {
  usePageMeta('Hỏi đáp cùng chuyên gia')
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
          Hỏi đáp cùng chuyên gia
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Giải đáp thắc mắc về sức khoẻ
        </p>
        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Đặt câu hỏi</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            Vui lòng điền thông tin và câu hỏi của bạn, các chuyên gia sẽ trả lời trong thời gian sớm nhất.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              placeholder="Họ và tên"
              style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            <input
              type="number"
              placeholder="Số điện thoại"
              style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            <textarea
              placeholder="Câu hỏi của bạn..."
              rows="6"
              style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                backgroundColor: '#109832',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Gửi câu hỏi
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ExpertConsultation

