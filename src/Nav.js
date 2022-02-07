import logo from './logo.svg';
import './App.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function Nav() {
  return (
    <nav>
        <ul className='navLinks'>
            <li><a href="/">Home</a></li>
            <li><a href="/victorspage">Victor's Page</a></li>
            <li><a href="/dylanspage">Dylan's Page</a></li>
            <li><a href="/devonspage">Devon's Page</a></li>
            <li><a href="/mayspage">May's Page</a></li>
            <MobileView>
              <li><a href="/apppage">App Page</a></li>
            </MobileView>
        </ul>
    </nav>
  );
}

export default Nav;
