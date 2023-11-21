import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import statement for useNavigate
import '../css/survey.css';

function Survey() {
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [customFeeling, setCustomFeeling] = useState('');
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const feelings = {
    'Happy': '😊',
    'Sad': '😢',
    'Worried': '😟',
    'Excited': '🤩',
    'Other': '🤔'
  };

  const handleFeelingSelection = (feeling) => {
    setSelectedFeeling(feeling);
    if (feeling !== 'Other') {
      setCustomFeeling('');
    }
  };

  const handleCustomFeelingChange = (event) => {
    setCustomFeeling(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const feelingToSubmit = selectedFeeling === 'Other' ? customFeeling : selectedFeeling;
    const surveyData = {
      feeling: feelingToSubmit,
      comments,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage or handle the submission as needed
    const existingLog = JSON.parse(localStorage.getItem('surveyLog')) || [];
    existingLog.push(surveyData);
    localStorage.setItem('surveyLog', JSON.stringify(existingLog));

    // Redirect to recommendation page with survey data
    navigate('/recommendation', { state: { feeling: feelingToSubmit, comments } });
  
  
  };

  return (
    <div className="survey-container">
      <h2 className="survey-title">Welcome to Smiley Survey!</h2>
      <form id="survey-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>How are you feeling today?</label>
          <div className="feelings-container">
            {Object.entries(feelings).map(([feeling, emoji], index) => (
              <button
                key={index}
                className={`feeling-button ${selectedFeeling === feeling ? 'selected' : ''}`}
                onClick={() => handleFeelingSelection(feeling)}
              >
                {emoji} {feeling}
              </button>
            ))}
          </div>
          {selectedFeeling === 'Other' && (
            <input
              type="text"
              id="custom-feeling"
              name="custom-feeling"
              placeholder="Enter your feeling"
              value={customFeeling}
              onChange={handleCustomFeelingChange}
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea id="comments" name="comments" rows="4" value={comments} onChange={handleCommentsChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;
