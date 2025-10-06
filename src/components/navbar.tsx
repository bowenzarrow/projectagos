import React, { useState, useEffect } from "react";
import "./components-css/navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Trash counter state
  const [trashCount, setTrashCount] = useState(0);
  const totalTrash = 1250; // replace with your dynamic value
  const trashPercent = 73; // replace with your dynamic value

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate trash count quickly on page load
  useEffect(() => {
    let start = 0;
    const duration = 750; // animation duration in ms
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = totalTrash / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= totalTrash) {
        setTrashCount(totalTrash);
        clearInterval(interval);
      } else {
        setTrashCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [totalTrash]);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false); 
  };

  return (
    <div className="navbar">
      <div className="brand-box" onClick={toggleDropdown}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="project-agos">PROJECT AGOS</h1>
        {isMobile && (
          <span className="dropdown-icon">{isOpen ? "▲" : "▼"}</span>
        )}
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/" onClick={handleLinkClick}>HOME</a>
        <a href="/about" onClick={handleLinkClick}>ABOUT</a>
        <a href="/contact" onClick={handleLinkClick}>CONTACT</a>
        <a href="/map" onClick={handleLinkClick}>MAP</a>
        <a href="/support" onClick={handleLinkClick}>SUPPORT US</a>
        <a href="/gallery" onClick={handleLinkClick}>GALLERY</a>
      </div>

      
      <div className="trash-counter">
        <span className="trash-count">{trashCount} lbs collected</span>
        <span className="trash-percent">{trashPercent}%</span>
      </div>
    </div>
  );
};
