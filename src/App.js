import React from 'react'
import "./index.css"
import Home from './pages/Home.js'
import About from './pages/About.js'
import Project from './pages/Project.js'
import Contact from './pages/Contact.js'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
