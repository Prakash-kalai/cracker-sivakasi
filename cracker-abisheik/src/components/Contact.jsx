import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Send Message</h2>
      <p className="contact-desc">
        If you get in touch with our office, we'll get back to you about the intervention you need.
        Grow the holistic picture of disruptive innovation through workplace empowerment and diversity.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter Your Email Address" required />
        <input type="tel" placeholder="Enter Your Mobile Number" required />
        <textarea placeholder="Enter Your Message" rows="5" required></textarea>
        <button type="submit" className="btn-submit">Submit</button>
      </form>

      <a href="https://wa.me/9787954470" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <img src="https://clipground.com/images/whatsapp-web-logo-png-5.png" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default Contact;
