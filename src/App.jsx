import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
