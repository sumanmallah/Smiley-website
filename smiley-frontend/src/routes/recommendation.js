// Recommendation.js
import '../css/recommendation.css';
import '../css/survey.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Recommendation() {
  const location = useLocation();
  const { feeling, comments } = location.state || { feeling: '', comments: '' };

  return (
    <div className="survey-container">
      <h2>Your Survey Results</h2>
      <p><strong>Feeling:</strong> {feeling}</p>
      <p><strong>Comments:</strong> {comments}</p>
      {/* Add more content or logic based on the results here */}
    </div>
  );
}

export default Recommendation;
