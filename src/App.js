import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import VictorsPage from './VictorsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/victorspage' element={<VictorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
