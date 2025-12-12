import React from 'react'
import './ClinicHours.css'

const ClinicHours = () => {
  return (
    <div className="clinic-hours-bar">
      <div className="clinic-hours-content">
        <span className="clinic-label">Thời gian khám chữa bệnh</span>
        {' '}
        <span className="clinic-days"> / Thứ 2 - Thứ 6</span>
        {' '}
        <span className="clinic-morning">- Sáng :</span>
        {' '}
        <span className="clinic-time">7h30 - 11h30</span>
        {' '}
        <span className="clinic-afternoon">- Chiều :</span>
        {' '}
        <span className="clinic-time">13h30 - 15h30</span>
        {' / '}
        <span className="clinic-emergency">- Cấp cứu : 24/7 Liên hệ:0999999999</span>
      </div>
    </div>
  )
}

export default ClinicHours

