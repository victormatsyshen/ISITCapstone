import React from 'react'
import styles from '../styles/QRPage.module.css'
import QR from './QR'

export default function QRPage() {
  return (
    <div className={styles['container']}>
        <p>QR Page</p>
        <QR />
    </div>
  )
}
