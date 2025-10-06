import React from 'react';
import './pages-css/support.css';

export const Support: React.FC = () => {
  const goFundMeLink = "https://www.gofundme.com/f/example-charity"; // replace with your real link

  return (
    <div className="support-container">
      <header>
        <h1>Support Project Agos</h1>
        <p>
          Project Agos's initiative works to protect our Earth’s waterways by effectively reducing the main cause of aquatic contamination: pollution.
          Through service work like trash cleanups near local woods, ponds, and parks, we target waterway pollution at its source—
          before it can reach rivers, and eventually, the ocean.
        </p>
      </header>

      <div className="support-content">
        <div className="donation-card">
          <h2>Help Us Make a Difference</h2>
          <p>Your donation goes directly to our waterway protection efforts and community initiatives.</p>
          <button
            onClick={() => window.open(goFundMeLink, "_blank")}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

