import React from 'react'
import styles from '../styles/FooterStyle.module.css'

export default function Footer() {
  return (
    <div className={styles['footerContainer']}>

      <div className={styles['footer']}>
        <ul className={styles['navLinks']}>
          <li><a href="/home">Links</a></li>
          <li><a href="/map">Social Media</a></li>
        </ul>
        <p className={styles['footerText']}>Copyright The Crocodile 2022</p>
      </div>

    </div>
  )
}
