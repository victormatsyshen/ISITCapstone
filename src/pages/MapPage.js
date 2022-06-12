// Import base files
import React from 'react'
import Map from '../components/map_Import/Map'

// Import assets and styles
import styles from '../assets/style_modules/Map.module.css'

// Export Page
export default function MapPage() {
  return (
    <div className={styles['mapContainer']}>
        <Map />
    </div>
  )
}
