import React from 'react'
import styles from '../assets/style_modules/DisplayPage.module.css'
import MobileCard from '../components/object_components/MobileCard'

export default function DisplayItem() {
  return (
    <div className={styles['container']}>
      <MobileCard />
    </div>
  )
}
