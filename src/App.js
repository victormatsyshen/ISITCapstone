import './assets/styles/App.css';
import { Home } from './components/object_components/Home';
import { Single } from './firebase/Single';
import Footer from './components/page_components/Footer';
import Nav from './components/page_components/Nav';
import HomePage from './pages/HomePage';
import MapPage from "./pages/MapPage";
import QRPage from "./pages/QRPage";
import ExtraPage from "./pages/ExtraPage";
import MobileHeader from "./components/page_components/MobileHeader";
import MobileNav from "./components/page_components/MobileNav";
import DisplayItem from "./pages/DisplayPage";


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Carousel from './components/object_components/Carousel';

function App() {
  return (
    <Router>
      <div>
      
        {/* Browser View */}
        <BrowserView>
          <Nav />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/map' element={<MapPage />} />
            <Route exact path='/extra' element={<ExtraPage />} />
          </Routes>
          <Footer />
        </BrowserView>

        {/* Mobile View */}
        {/* Mobile includes Display page, QR reader, no home page */}
        <MobileView>
          <MobileHeader />
          <Routes>
            <Route exact path='/' element={<DisplayItem />} />
            <Route exact path='/map' element={<MapPage />} />
            <Route exact path='/qr' element={<QRPage />} />
            <Route exact path='/extra' element={<ExtraPage />} />
          </Routes>
          <MobileNav />
        </MobileView>
        
      </div>
      </Router>
  );
}

export default App;
