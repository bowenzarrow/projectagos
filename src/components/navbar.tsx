import { Link } from "react-router-dom";
import "./components-css/navbar.css";
import logo from "../assets/logo.png"

export const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="brand-box">
                <img src={logo} alt="Project Agos Logo" className="logo" />
                <h1>Project Agos</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>  
            <Link to="/contact">Contact</Link>  
            <Link to="/support">Support</Link>
            <Link to="/map">Map</Link>
        </div>
    );
};