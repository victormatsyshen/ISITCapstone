import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import "../../assets/styles/Nav.css";
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
                <nav className="navbar">
                    <div className="navbar__logo">
                        <a href="/"><img src={crocLogo} className="crocLogo"></img></a>
                    </div>
                    <ul
                        className={isMobile ? "navbar__menu" : "navbar__menu__mobile"}
                        onClick={() => setIsMobile(false)}
                    >
                        <li><a href="/">Home</a></li>
                        <li><a href="/map">Map</a></li>
                        <li><a href="/extra">Extra</a></li>
                    </ul>
                    <ul className="navbar__icons">
                        <li><a href="https://mobile.twitter.com/thecrocodile"><TwitterIcon /></a></li>
                        <li><a href="https://www.facebook.com/thecrocodilesea"><FacebookIcon /></a></li>
                    </ul>
                    <Link to="#" className="navbar__toggleBtn">
                        <MenuIcon
                            onClick={() => setIsMobile(!isMobile)}
                        />
                    </Link>
                </nav>
            </BrowserView>

            {/* Mobile View */}
            <MobileView>
                <nav className='navContainer'>
                    <ul className='navLinks'>
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