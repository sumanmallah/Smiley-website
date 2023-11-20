import React from 'react';
import '../css/about.css';

function About() {
  return (
    <div className="about-container">
      <h1 id="about-header" className="about-header">About Us</h1>

      <p id="welcome-text">
        Welcome to the Smiley website, your trusted companion in navigating the complexities of emotions and enhancing your emotional well-being. Our mission is to assist users in embracing their emotional diversity and motivating them to maintain a positive outlook throughout the day.
      </p>

      <h2 id="purpose-header">Our Purpose</h2>
      <p id="purpose-text">
        Life is a journey filled with an array of emotions, and it's completely normal to experience a wide range of feelings daily. However, there are times when negative emotions can become overwhelming, or motivation seems elusive. At Smiley, we understand the importance of emotional well-being and the positive impact it can have on your life.
        Our purpose is to provide personalized solutions and resources to help you manage your emotions,
        boost your motivation, and ultimately lead a more fulfilling and positive life. We believe that every emotion,
        even the challenging ones, has value and can be a stepping stone towards personal growth.
      </p>
      <img className="image1" alt="a pic" src="https://miro.medium.com/v2/resize:fit:490/1*lTdwhTFJppOBiA6V-Ygyqg.png" />
      <img className="small-image" alt="a yoga pic" src="https://caffeyoga.com/wp-content/uploads/2016/01/beach-yoga1.jpg" />
      <h3 id="offer-header">What We Offer</h3>
      <p id="offer-text">
        <strong>Emotional Guidance:</strong> Smiley offers a range of tools and resources to help you better understand and manage your emotions. Whether you're feeling happy, sad, worried, or anything in between, we're here to guide you.
        <br />
        <strong>Daily Motivation:</strong> We provide daily motivational content to inspire and uplift your spirits. Our goal is to help you maintain a positive mindset and stay motivated throughout the day.
        <br />
        <strong>Personalized Resources:</strong> We tailor our recommendations to your unique emotional state. Whether you need self-care tips, relaxation techniques, or a boost in confidence, Smiley has you covered.
        <br />
        <strong>Community Support:</strong> Connect with a community of like-minded individuals who are on a journey to enhance their emotional well-being. Share your experiences, gain insights, and provide support to others.
      </p>

      <h2 id="team-header">Our Team</h2>
      <p id="team-text">
        The Smiley team is comprised of dedicated individuals who are passionate about emotional well-being and mental health. We're committed to creating a safe and inclusive space for everyone to explore their feelings and find the motivation they need.
      </p>
    </div>
  );
}

export default About;
