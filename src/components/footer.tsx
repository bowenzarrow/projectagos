import React from "react";
import instagramIcon from "../assets/instagram.svg";
import donateIcon from "../assets/donate.svg"; 
import remindIcon from "../assets/remind.svg"; 
import volunteerIcon from "../assets/volunteer.svg";

const FooterButtons: React.FC = () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1.1rem",
      padding: "0.5rem 0 0.5rem 0",
      background: "none",
      position: "static"
    }}>
      <a href="https://www.instagram.com/projectagosnj" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" style={{width: "22px", height: "22px", borderRadius: "50%", filter: "invert(16%) sepia(98%) saturate(1200%) hue-rotate(185deg) brightness(80%) contrast(140%)"}} />
      </a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYIo2KiJRNBmk-o4AroLNnrU0lXVSAWJ0YENbJSSO3dVCSJA/viewform" target="_blank" rel="noopener noreferrer">
        <img src={volunteerIcon} alt="Volunteer" style={{width: "22px", height: "22px", borderRadius: "50%", filter: "invert(16%) sepia(98%) saturate(1200%) hue-rotate(185deg) brightness(80%) contrast(140%)"}} />
      </a>
      <a href="https://www.remind.com/join/agos25" target="_blank" rel="noopener noreferrer">
        <img src={remindIcon} alt="Remind" style={{width: "22px", height: "22px", borderRadius: "50%", filter: "invert(16%) sepia(98%) saturate(1200%) hue-rotate(185deg) brightness(80%) contrast(140%)"}} />
      </a>
      <a href="https://gofund.me/724c7ced9" target="_blank" rel="noopener noreferrer">
        <img src={donateIcon} alt="Donate" style={{width: "22px", height: "22px", borderRadius: "50%", filter: "invert(16%) sepia(98%) saturate(1200%) hue-rotate(185deg) brightness(80%) contrast(140%)"}} />
      </a>
    </div>
  );
}

export default FooterButtons;
