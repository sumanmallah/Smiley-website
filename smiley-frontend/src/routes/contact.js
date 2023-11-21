import React from 'react';
import '../css/contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Reason for your contact:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        {/* Message inside the box */}
        <p>We will get back to you as soon as possible.</p>
      </form>
    </div>
  );
}

export default Contact;
