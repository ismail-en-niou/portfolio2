import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Assuming this is your main App component
import Articles from './components/soon/Soon'; // Assuming this is where your Articles component is located
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
