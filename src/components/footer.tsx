import React from "react";
import "./components-css/footer.css";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2025 Project Agos. All rights reserved.</p>
      <img src={logo} alt="Logo" className="logo" />
    </footer>

  );
};

export default Footer;
