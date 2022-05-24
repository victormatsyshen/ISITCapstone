import React from "react";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Header from "./components/Header";
import Nav from "./components/Nav";
//import DisplayItem from "./pages/DisplayPage";
import Footer from "./components/Footer";
import MapPage from "./pages/MapPage";
import QRPage from "./pages/QRPage";
//import ExtraPage from "./pages/ExtraPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>

        {/* Browser View */}
        {/* Browser includes home page, no display, no QR reader */}
        <BrowserView>
          <Header />
          <Nav />
          <Routes>
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/map' element={<MapPage />} />
            {/* <Route exact path='/extra' element={<ExtraPage />} /> */}
          </Routes>
          <Footer />
        </BrowserView>

        {/* Mobile View */}
        {/* Mobile includes Display page, QR reader, no home page */}
        <MobileView>
          <Header />
          <Nav />
          <Routes>
            {/* <Route exact path='/' element={<DisplayItem />} />
            <Route exact path='/map' element={<MapPage />} />
            <Route exact path='/qr' element={<QRPage />} />
            <Route exact path='/extra' element={<ExtraPage />} /> */}
          </Routes>
          <Footer/>
        </MobileView>

      </div>
    </Router>
  );
}

export default App;
