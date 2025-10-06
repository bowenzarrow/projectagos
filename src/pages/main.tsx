import React from 'react';
import './pages-css/home.css';

export const Main = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>WELCOME TO PROJECT AGOS</h1>
        <p>A youth organization dedicated to keeping waterways clean.</p>
      </div>
    </div>
  );
}