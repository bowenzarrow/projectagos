import React from "react";
import "./components-css/footer.css";
import logo from "../assets/logo.png";
import instagramIcon from "../assets/instagram.svg";
import volunteerIcon from "../assets/volunteer.svg"; // Add your own volunteer SVG
import remindIcon from "../assets/remind.svg"; // Add your own remind SVG

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2025 Project Agos. All rights reserved.</p>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="footer-right">
        <div className="footer-line">
          <span>Follow us:</span>
          <a
            href="https://www.instagram.com/projectagosnj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>

        <div className="footer-line">
          <span>Join us:</span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYIo2KiJRNBmk-o4AroLNnrU0lXVSAWJ0YENbJSSO3dVCSJA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={volunteerIcon} alt="Volunteer" className="social-icon" />
          </a>
        </div>

        <div className="footer-line">
          <span>Keep updated:</span>
          <a
            href="https://www.remind.com/join/agos25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={remindIcon} alt="Remind" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
