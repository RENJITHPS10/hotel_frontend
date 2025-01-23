import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Header from './component/Header';
import Footer from './component/Footer';



function App() {
 

  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
