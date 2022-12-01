import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootElement: any = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

