// Import React Packages
import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import FirebaseLogin from "../../firebase/FirebaseLogin";
import { NavLink, activeStyle} from 'react-router-dom';

// Import Styles
import styles from "../../assets/style_modules/Popup.module.css";
import navstyles from '../../assets/style_modules/Nav.module.css'
// import '../../assets/styles/App.css'

// Import Assets
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import crocLogo from "../../assets/images/crocLogo.png";
import { color } from "@mui/system";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  if (popUp) {
    document.body.classList.add("active-popUp");
  } else {
    document.body.classList.remove("active-popUp");
  }

  return (
    <div>
      <BrowserView>

        <nav className={navstyles["navbar"]}>

          <div className={navstyles["navbar__logo"]}>

            <a href="/home">
              <img src={crocLogo} className={navstyles["crocLogo"]}></img>
            </a>

          </div>

          <ul
            className={navstyles["navbar__menu"]}
            onClick={() => setIsMobile(false)}
          >
            <li>
              <NavLink to='/home' className={navstyles["navbar_link"]}
              style={({ isActive }) => ({
                color: isActive ? 'var(--desktop-nav-text-active-color)' : 'var(--desktop-nav-text-color)',
                borderBottom: isActive ? '2px solid' : '',
              })}
              >Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/map' className={navstyles["navbar_link"]}
              style={({ isActive }) => ({
                color: isActive ? 'var(--desktop-nav-text-active-color)' : 'var(--desktop-nav-text-color)',
                borderBottom: isActive ? '2px solid' : '',
              })}
              >Map
              </NavLink>
            </li>
            <li>
              <NavLink to='/info' className={navstyles["navbar_link"]}
              style={({ isActive }) => ({
                color: isActive ? 'var(--desktop-nav-text-active-color)' : 'var(--desktop-nav-text-color)',
                borderBottom: isActive ? '2px solid' : '',
              })}
              >Info
              </NavLink>
            </li>
            {/* <li>
              <a href="/home" className={navstyles["navbar_link"]}>Home</a>
            </li>
            <li>
              <a href="/map" className={navstyles["navbar_link"]}>Map</a>
            </li> */}
            <li>
              {/* Popup login in navigation bar */}
              <button onClick={togglePopUp} className={styles["btn-popup"]}>
                <div className={navstyles["navbar_link"]}>Sign In</div>
              </button>
              {popUp && (
                <div className={styles["popup"]}>
                  <div
                    onClick={togglePopUp}
                    className={styles["overlay"]}
                  ></div>
                  <div className={styles["popup-content"]}>
                    <FirebaseLogin />
                    <button
                      className={styles["close-popup"]}
                      onClick={togglePopUp}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>

          <ul className={navstyles["navbar_icons"]}>
            <li>
              <a href="https://mobile.twitter.com/thecrocodile">
                < TwitterIcon className={navstyles["navbar_image"]}/>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/thecrocodilesea">
                <FacebookIcon className={navstyles["navbar_image"]}/>
              </a>
            </li>
          </ul>

          <Link to="#" className={navstyles["navbar_toggleBtn"]}>
            <MenuIcon onClick={() => setIsMobile(!isMobile)} />
          </Link>

        </nav>
      </BrowserView>
    </div>
  );
}
