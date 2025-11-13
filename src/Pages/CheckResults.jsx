import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const CheckResults = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
          Tra cứu kết quả khám
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Tra cứu kết quả xét nghiệm
        </p>
        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Nhập thông tin tra cứu</h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            Vui lòng nhập mã số khám bệnh hoặc số CMND/CCCD để tra cứu kết quả.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Mã số khám bệnh hoặc CMND/CCCD" 
              style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            <input 
              type="date" 
              placeholder="Ngày khám" 
              style={{ padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd' }}
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
              Tra cứu
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckResults

