import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./pages-css/contact.css";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string>("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: ""
  });

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
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <span className="section-label">Get in Touch</span>
          <h1>We'd Love to Hear From You</h1>
          <p>Have a question or want to get involved? Reach out and join us in protecting our waterways.</p>
        </div>

        <div className="form-section">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                required
                value={fields.name}
                onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required
                value={fields.email}
                onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <input 
                type="tel" 
                name="user_phone" 
                placeholder="Your Phone Number"
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField("")}
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <input 
                type="text" 
                name="reason" 
                placeholder="Reason for Contact"
                onFocus={() => setFocusedField("reason")}
                onBlur={() => setFocusedField("")}
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required
                rows={6}
                value={fields.message}
                onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
              ></textarea>
              <div className="form-underline"></div>
            </div>

            <button type="submit" className="submit-btn" disabled={!fields.name || !fields.email || !fields.message}>Send Message</button>
            {status && <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</div>}
          </form>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Union County, New Jersey</p>
            </div>
            <div className="info-item">
              <div className="info-icon">💬</div>
              <h3>Get in Touch</h3>
              <p>We typically respond within 24 hours</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🌍</div>
              <h3>Join Us</h3>
              <p>Become a volunteer and make an impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
