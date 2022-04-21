import React from 'react'
import styles from '../styles/DisplayPage.module.css'
import Card from '../components/Card'

export default function DisplayItem() {
  return (
    <div className={styles['container']}>
      <Card />
    </div>
  )
}
