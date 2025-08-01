import React, { useState, useEffect } from "react";
import "./components-css/navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false); 
  };

  return (
    <div className="navbar">
      <div className="brand-box" onClick={toggleDropdown}>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Project Agos</h1>
        {isMobile && (
          <span className="dropdown-icon">{isOpen ? "▲" : "▼"}</span>
        )}
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/" onClick={handleLinkClick}>Home</a>
        <a href="/about" onClick={handleLinkClick}>About</a>
        <a href="/contact" onClick={handleLinkClick}>Contact</a>
        <a href="/map" onClick={handleLinkClick}>Map</a>
        <a href="/support" onClick={handleLinkClick}>Support us!</a>
      </div>
    </div>
  );
}