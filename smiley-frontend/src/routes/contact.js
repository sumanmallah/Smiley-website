import React from 'react';
import '../css/contact.css'; // Import the CSS file
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">{t("FN")}</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("EM")}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">{t("PN")}</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t("RFC")}</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">{t("submit")}</button>
        </div>
        {/* Message inside the box */}
        <p>{t("gbm")}</p>
      </form>
    </div>
  );
}

export default Contact;
