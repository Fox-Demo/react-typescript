import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {


  return (
    <>
      <div className="App">
        <Link to="/grocery">Grocery</Link>
      </div>
      <div className="App">
        <Link to="/counter">Counter</Link>
      </div>
      <div className="App">
        <Link to="/navbar">Navbar</Link>
      </div>
    </>
  );
}

export default App;