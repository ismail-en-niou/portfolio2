import React from 'react'
import ReactDOM from 'react-dom/client'
import UnderDevelopment from './components/soon/Soon.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articals" element={<UnderDevelopment />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
