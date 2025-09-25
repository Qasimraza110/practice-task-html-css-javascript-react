// src/pages/Contact.jsx
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Side - Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below:</p>

        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Type your message..." rows="5"></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="contact-image">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Contact Illustration"
        />
      </div>
    </div>
  );
};

export default Contact;
