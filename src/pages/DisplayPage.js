import React from 'react'
import styles from '../styles/DisplayPage.module.css'
import Card from '../components/Card'
import Swipe from '../components/Swipe'

export default function DisplayItem() {
  return (
    <div className={styles['container']}>
      {/* <p>Display Page</p>
      <p>The display page will act as a home page, and will be the first route that loads when a user scans a QR code.</p>
      <p>Here we will load database data, and display specific exhibit info.</p> */}
      {/* <Card /> */}
      <Swipe />
    </div>
  )
}
