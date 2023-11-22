import React from 'react';
import '../css/about.css';
import { useTranslation } from 'react-i18next';
function About() {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <h1 id="about-header" className="about-header">{t("AU")}</h1>

      <p id="welcome-text">{t("welcome_text")}</p>

      <h2 id="purpose-header">{t("OP")}</h2>
      <p id="purpose-text">{t("PT")}</p>
      <img className="image1" alt="a pic" src="https://miro.medium.com/v2/resize:fit:490/1*lTdwhTFJppOBiA6V-Ygyqg.png" />
      <img className="small-image" alt="a yoga pic" src="https://caffeyoga.com/wp-content/uploads/2016/01/beach-yoga1.jpg" />
      <h3 id="offer-header">{t("WWO")}</h3>
      <p id="offer-text">
        <strong>{t("EG")}</strong> {t("Smiley_offers")}<br/>
        <strong>{t("DM")}</strong>{t("MOTIVATION")}<br/>
        <strong>{t("PR")}</strong>{t("personalized_resources")}<br/>
        <strong>{t("CS")}</strong>{t("community")}</p>

      <h2 id="team-header">Our Team</h2>
      <p id="team-text">
        The Smiley team is comprised of dedicated individuals who are passionate about emotional well-being and mental health. We're committed to creating a safe and inclusive space for everyone to explore their feelings and find the motivation they need.
      </p>
    </div>
  );
}

export default About;
