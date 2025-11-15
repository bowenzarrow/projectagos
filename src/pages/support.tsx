import React from 'react';
import './pages-css/support.css';

export const Support: React.FC = () => {
  const goFundMeLink = "https://www.gofundme.com/f/example-charity"; // replace with your real link
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div className="support-container">
      {/* SUPPORT HERO */}
      <section className="support-hero">
        <div>
          <div className="section-label">💚 Make an Impact</div>
          <h1>Support Our Mission</h1>
          <p>
            Project Agos works to protect our Earth's waterways by effectively reducing aquatic contamination. 
            Your donation helps us continue our cleanup efforts and environmental initiatives in local communities.
          </p>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact-section">
        <div className="impact-header">
          <div className="section-label">📊 Your Impact</div>
          <h2>Donation Tiers</h2>
          <p>Every dollar makes a difference in protecting our waterways</p>
        </div>

        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-amount">$25</div>
            <div className="impact-title">Local Cleanup</div>
            <div className="impact-description">Supplies for one neighborhood cleanup event</div>
            <button 
              className="donate-btn"
              onClick={() => window.open(goFundMeLink, "_blank")}
            >
              Donate
            </button>
          </div>

          <div className="impact-card">
            <div className="impact-amount">$50</div>
            <div className="impact-title">Equipment Kit</div>
            <div className="impact-description">Provides cleanup tools for 5 volunteers</div>
            <button 
              className="donate-btn"
              onClick={() => window.open(goFundMeLink, "_blank")}
            >
              Donate
            </button>
          </div>

          <div className="impact-card">
            <div className="impact-amount">$100</div>
            <div className="impact-title">Community Impact</div>
            <div className="impact-description">Funds an entire cleanup event in your area</div>
            <button 
              className="donate-btn"
              onClick={() => window.open(goFundMeLink, "_blank")}
            >
              Donate
            </button>
          </div>

          <div className="impact-card">
            <div className="impact-amount">$250+</div>
            <div className="impact-title">Legacy Partner</div>
            <div className="impact-description">Becomes a major sponsor of our initiatives</div>
            <button 
              className="donate-btn"
              onClick={() => window.open(goFundMeLink, "_blank")}
            >
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-layout">
          <div className="donation-card">
            <h3>Ready to Help?</h3>
            <p>
              Join thousands of supporters working to protect our waterways. Every contribution, no matter the size, 
              helps us continue our mission to reduce aquatic pollution and protect our planet for future generations.
            </p>
            <button
              onClick={() => window.open(goFundMeLink, "_blank")}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span>Donate Now</span>
              <span>{isHovering ? '→' : '♥'}</span>
            </button>
          </div>

          <div className="testimonial-section">
            <h3>Why Support Project Agos?</h3>
            <div className="testimonials">
              <div className="testimonial">
                <div className="testimonial-quote">
                  "Project Agos has helped us clean up our local rivers and teach the community about waterway protection. 
                  Their work is making a real difference."
                </div>
                <div className="testimonial-author">— Community Member</div>
              </div>

              <div className="testimonial">
                <div className="testimonial-quote">
                  "Supporting Project Agos means investing in the future of our waterways and the next generation of environmental leaders."
                </div>
                <div className="testimonial-author">— Local Partner</div>
              </div>

              <div className="testimonial">
                <div className="testimonial-quote">
                  "With donations from supporters, we've removed over 1000 lbs of pollution from our waterways this year alone."
                </div>
                <div className="testimonial-author">— Project Agos Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

