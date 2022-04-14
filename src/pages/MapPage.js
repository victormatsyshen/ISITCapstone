import React from 'react'
import styles from '../styles/MapPage.module.css'
import Map from '../components/Map'

export default function MapPage() {
  return (
    <div className={styles['container']}>
        <p>Map Page</p>
        <p>Used to load our customizable venu map.</p>
        <Map />
    </div>
  )
}
