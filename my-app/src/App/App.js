import React from 'react';
import Home from '../Home/Home';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Thanks from '../Thanks/Thanks';
import { Route, Routes} from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
