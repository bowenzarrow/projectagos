import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components-css/navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [trashCount, setTrashCount] = useState(0);
  const totalTrash = 1250;
  const trashPercent = 73;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let start = 0;
    const duration = 750;
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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => {
    if (isMobile) setIsOpen(false);
    setVolunteerOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="brand-box" onClick={toggleMenu}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="project-agos">PROJECT AGOS</h1>
        {isMobile && <span className="dropdown-icon">{isOpen ? "▲" : "▼"}</span>}
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>HOME</Link>
        <Link to="/about" onClick={handleLinkClick}>ABOUT</Link>
        <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
        <Link to="/map" onClick={handleLinkClick}>MAP</Link>
        <Link to="/support" onClick={handleLinkClick}>SUPPORT US</Link>

        {/* Volunteer Dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => !isMobile && setVolunteerOpen(true)}
          onMouseLeave={() => !isMobile && setVolunteerOpen(false)}
        >
          <span
            className="nav-dropdown-title"
            onClick={() => isMobile && setVolunteerOpen((prev) => !prev)}
          >
            VOLUNTEER {isMobile && (volunteerOpen ? "▲" : "▼")}
          </span>

          <div className={`dropdown-menu ${volunteerOpen ? "show" : ""}`}>
            <Link to="/volunteer/elizabeth" onClick={handleLinkClick}>
              Elizabeth River Cleanup
            </Link>
          </div>
        </div>
      </div>

      <div className="trash-counter">
        <span className="trash-count">{trashCount} lbs collected</span>
        <span className="trash-percent">{trashPercent}%</span>
      </div>
    </nav>
  );
};
