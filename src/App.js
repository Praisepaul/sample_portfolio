import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'src/components/Header.jsx';
import About from 'src/components/About.jsx';
import Projects from 'src/components/Projects.jsx';
import Contact from 'src/components/Contact.jsx';
import Navigation from 'src/components/Navigation.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/sample_portfolio" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
