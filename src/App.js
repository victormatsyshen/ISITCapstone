import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import VictorsPage from './VictorsPage';
import AppPage from './AppPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/victorspage' element={<VictorsPage />} />
        </Routes>

        <MobileView>
          <Routes>
            <Route exact path='/apppage' element={<AppPage />} />
          </Routes>
        </MobileView>
      </div>
    </Router>
  );
}

export default App;
