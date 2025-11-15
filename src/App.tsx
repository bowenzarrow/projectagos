
import React, { useRef } from 'react';
import './App.css';

import FooterButtons from "./components/footer";
import leadership from "./pages/leadershipProfiles";
import LeaderProfile from "./components/profile";
import Map from "./pages/map";

const NAV_ITEMS = [
  { label: 'Home', ref: 'hero' },
  { label: 'Mission', ref: 'mission' },
  { label: 'Impact', ref: 'impact' },
  { label: 'Team', ref: 'team' },
  { label: 'Map', ref: 'map' },
  { label: 'Success', ref: 'success' },
  { label: 'Testimonials', ref: 'testimonials' },
  { label: 'FAQ', ref: 'faq' },
  { label: 'Contact', ref: 'contact' },
];

function App() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    mission: useRef<HTMLElement>(null),
    impact: useRef<HTMLElement>(null),
    team: useRef<HTMLElement>(null),
    map: useRef<HTMLElement>(null),
    success: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  type SectionKey = keyof typeof sectionRefs;
  const scrollToSection = (key: SectionKey) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className="sticky-navbar">
        <div className="nav-btns">
          {NAV_ITEMS.map(item => (
            <button
              key={item.ref}
              className="nav-btn"
              onClick={() => scrollToSection(item.ref as SectionKey)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <img src={require('./assets/logo.png')} alt="Project Agos Logo" className="nav-logo" />
      </nav>


      {/* HERO SECTION */}
      <section ref={sectionRefs.hero} className="hero-section">
        <video className="hero-bg" autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>PROJECT AGOS</h1>
          <p>Opening Doors to Waterway Success</p>
          <div className="hero-cta">
            <button className="nav-btn" onClick={() => scrollToSection('contact')}>Get Involved</button>
            <button className="nav-btn" onClick={() => scrollToSection('mission')}>Our Mission</button>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section ref={sectionRefs.mission} className="mission-section">
        <h2>OUR MISSION</h2>
        <p>
          We empower local communities to protect waterways by reducing pollution at its source—through cleanups, education, and youth leadership.
        </p>
      </section>

      {/* IMPACT SECTION */}
      <section ref={sectionRefs.impact} className="impact-section">
        <h2>OUR IMPACT</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-stat">1000+</div>
            <div className="impact-label">LBS COLLECTED</div>
          </div>
          <div className="impact-card">
            <div className="impact-stat">50+</div>
            <div className="impact-label">VOLUNTEERS</div>
          </div>
          <div className="impact-card">
            <div className="impact-stat">10+</div>
            <div className="impact-label">LOCATIONS</div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section ref={sectionRefs.team} className="team-section">
        <h2>OUR TEAM</h2>
        <div className="team-grid">
          {leadership.map((leader) => (
            <LeaderProfile
              key={leader.name}
              name={leader.name}
              position={leader.position}
              schoolgrade={leader.schoolgrade}
              image={leader.image}
              fontsize={leader.fontsize}
            />
          ))}
        </div>
      </section>

      {/* MAP SECTION */}
      <section ref={sectionRefs.map} className="map-section">
        
        <Map />
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section ref={sectionRefs.success} className="success-section">
        <h2>SUCCESS STORIES</h2>
        <div className="success-grid">
          <div className="success-card">
            <h3>River Cleanup</h3>
            <p>Removed 350+ lbs of trash from Rahway River.</p>
          </div>
          <div className="success-card">
            <h3>Park Restoration</h3>
            <p>Zimmerman Park revitalized with 750+ lbs collected.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section ref={sectionRefs.testimonials} className="testimonials-section">
        <h2>TESTIMONIALS</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>“Project Agos transformed our local river. We saw a huge impact in just one month!”</p>
            <span className="testimonial-author">— Community Member</span>
          </div>
          <div className="testimonial-card">
            <p>“The team automated our cleanup events and made volunteering easy and fun.”</p>
            <span className="testimonial-author">— Volunteer</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section ref={sectionRefs.faq} className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>How can I get involved?</h3>
            <p>Contact us or join a cleanup event—everyone is welcome!</p>
          </div>
          <div className="faq-card">
            <h3>Where do you operate?</h3>
            <p>We serve Union County and surrounding areas.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={sectionRefs.contact} className="contact-section">
        <h2>CONTACT US</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <div>Email: projectagos@gmail.com</div>
          <div>Phone: (908) 472-4094</div>
          <div>Location: Union County, NJ</div>
        </div>
      </section>

  <FooterButtons />
    </div>
  );
}

export default App;
