import { Link } from "react-router-dom";
import "./components-css/navbar.css";
import logo from "../assets/logo.png"
import { useState } from "react";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
    <div className="navbar">
        <div className="brand-box" onClick={toggleDropdown}>
                <img src={logo} alt="Logo" className="logo" />
                <h1>Project Agos</h1>
                <span className="dropdown-icon">▼</span>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/map">Map</a>
            <a href="/support">Support</a>
        </div>
    </div>
    );
};