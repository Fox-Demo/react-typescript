import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Grocery from './Components/Grocery/Grocery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './Components/Counter/Counter';
import Navbar from './Components/Navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);