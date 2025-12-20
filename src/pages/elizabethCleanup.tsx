import React from "react";
import "./pages-css/volunteer.css";

export default function Volunteer() {
  return (
    
    <div className="volunteer-container">
      <header>
        <h1>Elizabeth River Cleanup</h1>
        <p>
          Fill out the form below to help clean up Elizabeth River!
        </p>
      </header>

      <div className="volunteer-content">
        <div className="volunteer-card">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSchKYHPYeK3-a1SUetY_5vL8kpg_jXK06TZ8j2JtmYwMSEuSA/viewform?usp=header"
            title="Volunteer Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
