import React from 'react';
import '../css/contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>We will get back to you as soon as possible.</p>
    </div>
  );
}

export default Contact;



