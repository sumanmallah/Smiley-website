import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="top-bar">
      <ul className="horizontal-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/survey">Survey</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Home;
