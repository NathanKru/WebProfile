import React from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Certification from "./Components/Certification";
import { BrowserRouter, Routes, Route } 
from 'react-router-dom';

//Website Mobile Friendlyness under construction


function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Certification" element={<Certification/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;