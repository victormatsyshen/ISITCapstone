import React from 'react'
import styles from '../styles/QRPage.module.css'
import QR from '../components/QR'

export default function QRPage() {
  return (
    <div className={styles['container']}>
        <p>QR Page</p>
        <p>Scan a display QR code!</p>
        <QR />
    </div>
  )
}
