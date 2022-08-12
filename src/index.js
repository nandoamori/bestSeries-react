import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TvShow from './pages/Details/Details';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<TvShow/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
