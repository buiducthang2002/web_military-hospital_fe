import usePageMeta from '../../hooks/usePageMeta'
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './CheckResults.css';

const CheckResults = () => {
  usePageMeta('Tra cứu kết quả khám')
  const LINK_KQXN = 'http://117.4.137.26:11664/?c=ketquacls'; 
  const LINK_KQKH = 'http://117.4.137.26:11664/?c=lichsukham';

  return (
    <div className="check-results-page">
      <Navbar />

      <div className="check-results__hero">
        <div className="check-results__container">
          <h1 className="check-results__title">Tra cứu kết quả - lịch sử khám</h1>
          <p className="check-results__desc">
            Hệ thống hỗ trợ tra cứu kết quả xét nghiệm, đơn thuốc và lịch sử khám chữa bệnh nhanh chóng, bảo mật.
          </p>
        </div>
      </div>

      <div className="check-results__container check-results__grid-container">
        <div className="button-card-grid">
          <a 
            href={LINK_KQKH} 
            target="_blank" 
            rel="noopener noreferrer"
            className="customer-guide__card check-results__button-card"
          >
            <h3>Kết quả khám (Khám bệnh)</h3>
            <p>
              Tra cứu kết quả và lịch sử khám bệnh, chẩn đoán ban đầu từ các bác sĩ chuyên khoa.
            </p>
            <div className="customer-guide__link">Truy cập ngay →</div>
          </a>

          <a 
            href={LINK_KQXN} 
            target="_blank" 
            rel="noopener noreferrer"
            className="customer-guide__card check-results__button-card"
          >
            <h3>Kết quả cận lâm sàng (XN, CĐHA)</h3>
            <p>
              Xem kết quả xét nghiệm máu, nước tiểu, X-quang, siêu âm và các hình ảnh chẩn đoán khác.
            </p>
            <div className="customer-guide__link">Truy cập ngay →</div>
          </a>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: '100px' }}></div>
      <Footer />
    </div>
  );
};

export default CheckResults;
