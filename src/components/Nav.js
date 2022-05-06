import React from 'react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import styles from "../styles/Nav.module.css";
import Login from './Login';

export default function Nav() {
  return (
    <div>

        {/* Browser View */}
        <BrowserView>   
            <div className={styles['container']}>
                <ul className={styles['navLinks']}>
                    <li><a href="/home">Home Page</a></li>
                    <li><a href="/map">Map</a></li>
                    <li><a href="/extra">Extra Page</a></li>
                    <li><Login /></li>
                </ul>
            </div>
        </BrowserView>

        {/* Mobile View */}
        <MobileView>
            <div className={styles['container']}>
                <ul className={styles['navLinks']}>
                    <li><a href="/">Display</a></li>
                    <li><a href="/map">Map</a></li>
                    <li><a href="/qr">QR</a></li>
                    <li><a href="/extra">Extra Page</a></li>
                </ul>
            </div>
        </MobileView>
        
    </div>  
  )
}
