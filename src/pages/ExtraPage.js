import React from 'react'
import styles from '../styles/ExtraPage.module.css'
import Popup from '../components/Popup'

export default function ExtraPage() {
  return (
    <div className={styles['container']}>
        <p>Extra Page</p>
        <p>Just a backup route that can used for future features.</p>
        <Popup />
    </div>
  )
}
