import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import styles from "../../assets/style_modules/Nav.module.css";
import "../object_components/Login";
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import crocLogo from "../../assets/images/crocLogo.png";

export default function Nav() {

    const [isMobile, setIsMobile] = useState(true);

    return (
        <div>
            {/* Browser View */}
            <BrowserView>
                <nav className={styles['navbar']}>
                    <div className={styles['navbar__logo']}>
                        <a href="/"><img src={crocLogo} className={styles['crocLogo']}></img></a>
                    </div>
                    <ul
                        className={styles['navbar__menu']}
                    >
                        <li><a href="/">Home</a></li>
                        <li><a href="/map">Map</a></li>
                        <li><a href="/extra">Extra</a></li>
                    </ul>
                    <ul className={styles['navbar__icons']}>
                        <li><a href="https://mobile.twitter.com/thecrocodile"><TwitterIcon /></a></li>
                        <li><a href="https://www.facebook.com/thecrocodilesea"><FacebookIcon /></a></li>
                    </ul>
                    <Link to="#" className={styles['navbar__toggleBtn']}>
                        <MenuIcon
                            onClick={() => setIsMobile(!isMobile)}
                        />
                    </Link>
                </nav>
            </BrowserView>

            {/* Mobile View */}
            <MobileView>
                <nav className={styles['navContainer']}>
                    <ul className={styles['navLinks']}>
                        <li><a href="/home">Home Page</a></li>
                        <li><a href="/map">Map</a></li>
                        <li><a href="/extra">Extra Page</a></li>
                        {/* <li><Login /></li> */}
                    </ul>
                </nav>
            </MobileView>
        </div>
    )
}