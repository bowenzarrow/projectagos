import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./pages-css/contact.css";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

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
      <h1>Contact Us!</h1>
      <p>For any inquiries, please contact us at this email.</p>
 <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <input type="tel" name="user_phone" placeholder="Your Phone Number" />
      <input type="text" name="reason" placeholder="Reason for Contact" />
      <textarea name="message" placeholder="Your Message" required></textarea>

      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>


    </div>
  );
};
