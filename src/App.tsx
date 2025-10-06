import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import { Main } from "./pages/main";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Support } from "./pages/support";
import { Map } from "./pages/map";
import  { Gallery }  from "./pages/gallery";

import { Navbar } from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/support" element={<Support />}/>
            <Route path="/map" element={<Map />}/>
            <Route path="/gallery" element={<Gallery />}/>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
