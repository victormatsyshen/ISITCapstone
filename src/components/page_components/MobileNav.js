import React from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import styles from "../../assets/style_modules/MobileNav.module.css";
import mapImg from "../../assets/images/map.png";
import homeImg from "../../assets/images/home.png";
import extraImg from "../../assets/images/extra.png";
import qrImg from "../../assets/images/qr-code.png";
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function MobileNav() {

  const { search } = useLocation();

  return (
    <div>
      {/* Mobile View */}
      <MobileView>
          <div className={styles['container']}>
              <ul className={styles['mobileNavLinks']}>
                <NavLink to={`/${search}`} 
                style={({ isActive }) => ({
                  filter: isActive ? 'var(--mobile-nav-image-active-color)' : 'none',
                })}><img src={homeImg} className={styles['navIcons']}></img></NavLink>

                <NavLink to={`/map/${search}`}
                style={({ isActive }) => ({
                  filter: isActive ? 'var(--mobile-nav-image-active-color)' : 'none',
                })}><img src={mapImg} className={styles['navIcons']}></img></NavLink>

                <NavLink to={`/qr/${search}`}style={({ isActive }) => ({
                  filter: isActive ? 'var(--mobile-nav-image-active-color)' : 'none',
                })}><img src={qrImg} className={styles['navIcons']}></img></NavLink>

                <NavLink to={`/extra/${search}`}style={({ isActive }) => ({
                  filter: isActive ? 'var(--mobile-nav-image-active-color)' : 'none',
                })}><img src={extraImg} className={styles['navIcons']}></img></NavLink>

              </ul>
          </div>
      </MobileView>
    </div>
  );
}
