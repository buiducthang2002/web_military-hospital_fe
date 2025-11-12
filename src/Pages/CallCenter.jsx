import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const CallCenter = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
          Gọi tổng đài
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Đặt lịch khám qua tổng đài 1900.****
        </p>
        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Thông tin liên hệ</h2>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <strong>Tổng đài:</strong> 1900.****
          </p>
          <p style={{ fontSize: '16px', color: '#666' }}>
            Vui lòng gọi số tổng đài trên để được tư vấn và đặt lịch khám.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CallCenter

