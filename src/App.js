import './styles/App.css';
import React, { useEffect, useRef, useState } from "react";
import { Home } from './components/Home';
import { Single } from './Single';
import Footer from './components/Footer';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import MapPage from "./pages/MapPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from './pages/LoginPage';

import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Carousel from './components/Carousel';

let login;
sessionStorage.setItem(login, "false");

function App() {

  // if(sessionStorage.getItem(login) === "false"){
  //   console.log(sessionStorage.getItem(login));
  //     setTimeout(() => {
  //       window.location.href = "http://localhost:3000/Signup";
  //     }, 5000);
  //     sessionStorage.clear(login);
  //     console.log("login status:"+sessionStorage.getItem(login));
  // }

  return (
    <BrowserRouter>
      <Nav />

      {/* Browser View */}
      {/* Browser includes home page, no display, no QR reader */}
      <BrowserView>
        <Routes>
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/map' element={<MapPage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route exact path='/login' element={<LoginPage />} />

          {/* <Route exact path='/extra' element={<ExtraPage />} /> */}
        </Routes>
      </BrowserView>
      <Footer />
      <div className="appContainer">
        {/* <h3 className='d-flex justify-content-center m-3'>
          React JS Frontend
        </h3>
        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/single/?id=1">
                Single
              </NavLink>
            </li>
          </ul>
        </nav> */}

      </div>

    </BrowserRouter>

  );
}

export default App;