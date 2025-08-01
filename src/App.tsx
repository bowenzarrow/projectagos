import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import { Main } from "./pages/main";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Mission } from "./pages/mission";
import { Support } from "./pages/support";
import { Map } from "./pages/map";

import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/mission" element={<Mission />}/>
            <Route path="/support" element={<Support />}/>
            <Route path="/map" element={<Map />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
