// //Import base react
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// //Import baseline css
// import './assets/styles/index.css';

// // Render the App component, all other components will be routed in App.js
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

// //Import baseline css
import './assets/styles/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);