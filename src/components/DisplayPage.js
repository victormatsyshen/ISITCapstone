import React from 'react'
import styles from '../styles/DisplayPage.module.css'

export default function DisplayItem() {
  return (
    <div className={styles['container']}>
      <p>Display Page</p>
      <p>The display page will act as a home page, and will be the first route that loads when a user scans a QR code.</p>
      <p>Here we will load database data, and display specific exhibit info.</p>
    </div>
  )
}
