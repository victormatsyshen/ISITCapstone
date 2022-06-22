import React from 'react'
import styles from'../assets/style_modules/QRPage.module.css'
import QR from '../components/object_components/QR'

export default function QRPage() {
  return (
    <div className="qrContainer">
        <div className={styles["qrInfo"]}>
          <p>Scan a Display QR code.</p>
          <p>Camera access needs to be Allowed.</p>
        </div>
        
        <div className={styles["qr"]}>
          <QR />
        </div>
        
    </div>
  )
}
