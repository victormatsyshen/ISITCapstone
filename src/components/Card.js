import React from 'react'
//import styles from '../styles/Card.module.css'
import styles from '../styles/Card.css'

export default function Card({
    flipCard, // action to handle flipping of card
    artistName,
    itemName,
    itemDesc,
    frontImageSrc, // front image source
    backImageSrc // back image source
}) {
    return (
        <>
            <div className="front" onClick={flipCard}>
                <img src={frontImageSrc} className="guitar" alt="Image 1" />
                <h1>{artistName}</h1>
                <h2>{itemName}</h2>
            </div>
            <div className="back" onClick={flipCard}>
                <img src={backImageSrc} className='image2'></img>
                <p>{itemDesc}</p>

                <br />
                <div className={styles['container']}>
                    <ul className={styles['navLinks']}>
                        <li><a href="/map">Map</a></li>
                        <li><a href="/qr">QR</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
