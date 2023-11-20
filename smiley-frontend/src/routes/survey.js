import React, { useState } from 'react';
import '../css/survey.css';

function Survey() {
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [customFeeling, setCustomFeeling] = useState('');
  const feelings = ['Happy', 'Sad', 'Worried', 'Feeling Low', 'Excited', 'Other'];

  const handleFeelingChange = (event) => {
    const value = event.target.value;
    setSelectedFeeling(value);

    // Clear custom feeling input when selecting an existing feeling
    if (value !== 'Other') {
      setCustomFeeling('');
    }
  };

  const handleCustomFeelingChange = (event) => {
    setCustomFeeling(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const feelingToSubmit = selectedFeeling === 'Other' ? customFeeling : selectedFeeling;
    const surveyData = {
      name: formData.get('name'),
      email: formData.get('email'),
      age: formData.get('age'),
      feeling: feelingToSubmit,
      comments: formData.get('comments'),
      timestamp: new Date().toISOString(),
    };

    const existingLog = JSON.parse(localStorage.getItem('surveyLog')) || [];
    existingLog.push(surveyData);
    localStorage.setItem('surveyLog', JSON.stringify(existingLog));
  };

  return (
    <div className="survey-container">
      <h2>How are you feeling today?</h2>
      <form id="survey-form" onSubmit={handleSubmit}>
        {/* Other form fields... */}

        <div className="form-group">
          <label>How are you feeling today?</label>
          {feelings.map((feeling, index) => (
            <div key={index}>
              <input
                type="radio"
                id={feeling}
                name="feeling"
                value={feeling}
                checked={selectedFeeling === feeling}
                onChange={handleFeelingChange}
              />
              <label htmlFor={feeling}>{feeling}</label>
            </div>
          ))}
          {selectedFeeling === 'Other' && (
            <div>
              <input
                type="text"
                id="custom-feeling"
                name="custom-feeling"
                placeholder="Enter your feeling"
                value={customFeeling}
                onChange={handleCustomFeelingChange}
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea id="comments" name="comments" rows="4" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;
