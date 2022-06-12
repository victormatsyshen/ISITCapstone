import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import styles from "../../assets/style_modules/MobileNav.module.css";
import mapImg from '../../assets/images/map.png'
import homeImg from '../../assets/images/home.png'
import extraImg from '../../assets/images/extra.png'
import qrImg from '../../assets/images/qr-code.png'

export default function MobileNav() {
  return (
    <div>

        {/* Mobile View */}
        <MobileView>
            <div className={styles['container']}>
                <ul className={styles['mobileNavLinks']}>
                    <li><a href="/"><img src={homeImg} className={styles['navIcons']}></img></a></li>
                    <li><a href="/map"><img src={mapImg} className={styles['navIcons']}></img></a></li>
                    <li><a href="/qr"><img src={qrImg} className={styles['navIcons']}></img></a></li>
                    <li><a href="/extra"><img src={extraImg} className={styles['navIcons']}></img></a></li>
                </ul>
            </div>
        </MobileView>
        
    </div>  
  )
}
