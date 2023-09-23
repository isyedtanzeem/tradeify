import React from 'react';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </Router>
    <Footer />
    </>
  );
}

export default App;
