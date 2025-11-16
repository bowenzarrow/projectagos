
import React, { useRef, useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser";

import FooterButtons from "./components/footer";
import leadership from "./pages/leadershipProfiles";
import LeaderProfile from "./components/profile";
import Map from "./pages/map";
import CursorParticles from "./components/CursorParticles";

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

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: ""
  });

  type SectionKey = keyof typeof sectionRefs;
  const scrollToSection = (key: SectionKey) => {
    const el = sectionRefs[key]?.current;
    if (!el) return;
    const nav = document.querySelector('.sticky-navbar') as HTMLElement | null;
    const navHeight = (nav?.offsetHeight ?? 0) + 8; // small margin
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // Keep CSS var --nav-height in sync for scroll snap padding
  React.useEffect(() => {
    const setNavHeight = () => {
      const nav = document.querySelector('.sticky-navbar') as HTMLElement | null;
      const h = (nav?.offsetHeight ?? 0) + 8;
      document.documentElement.style.setProperty('--nav-height', `${h}px`);
    };
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, []);

  // Prevent browser zoom interactions (pinch/ctrl+wheel/ctrl +/-)
  React.useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '_')) {
        e.preventDefault();
      }
    };
    const onGesture = (e: Event) => {
      e.preventDefault();
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown, { passive: false } as any);
    // iOS Safari pinch gestures
    document.addEventListener('gesturestart', onGesture as any, { passive: false });
    document.addEventListener('gesturechange', onGesture as any, { passive: false });
    document.addEventListener('gestureend', onGesture as any, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel as any);
      window.removeEventListener('keydown', onKeyDown as any);
      document.removeEventListener('gesturestart', onGesture as any);
      document.removeEventListener('gesturechange', onGesture as any);
      document.removeEventListener('gestureend', onGesture as any);
    };
  }, []);

  // (Magnifying glass removed as requested)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fields.name || !fields.email || !fields.message) {
      setStatus("Please fill out all required fields before sending.");
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_m7ykj31",
        "template_7k7y3k8",
        form.current,
        "93O2nZk_kBHr85N2V"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFields({ name: "", email: "", message: "" });
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message, please try again.");
        }
      );
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
          {/* Cursor particle overlay inside the beige box but behind text */}
          <CursorParticles />
          <div className="hero-content-inner">
            <h1>PROJECT AGOS</h1>
            <p>Opening Doors to Waterway Success</p>
            <div className="hero-cta">
              <button className="nav-btn" onClick={() => scrollToSection('contact')}>Get Involved</button>
              <button className="nav-btn" onClick={() => scrollToSection('mission')}>Our Mission</button>
            </div>
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
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="user_name"
            placeholder="Name" 
            required
            value={fields.name}
            onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
          />
          <input 
            type="email" 
            name="user_email"
            placeholder="Email" 
            required
            value={fields.email}
            onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
          />
          <textarea 
            name="message"
            placeholder="Message" 
            required
            value={fields.message}
            onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          />
          <button type="submit">Send Message</button>
        </form>
        {status && <div className="status-message">{status}</div>}
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
