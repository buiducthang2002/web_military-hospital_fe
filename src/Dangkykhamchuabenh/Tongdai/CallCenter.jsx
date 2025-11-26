import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const CallCenter = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
          Gọi tổng đài
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Đặt lịch khám qua tổng đài 0974.225.225
        </p>

      </div>
    </div>
  )
}

export default CallCenter

