import React, { useState, useEffect } from 'react';
import '../css/survey.css';

function Survey() {
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [surveyResults, setSurveyResults] = useState({});
  const [dynamicMessage, setDynamicMessage] = useState('');
  const feelings = ['Happy', 'Sad', 'Worried', 'Feeling Low', 'Excited'];

  useEffect(() => {
    switch (selectedFeeling) {
      case 'Happy':
        setDynamicMessage('Great to hear you are feeling happy!');
        break;
      case 'Sad':
        setDynamicMessage('We are here for you during tough times.');
        break;
      case 'Worried':
        setDynamicMessage('It can be tough, but worrying is a part of life.');
        break;
      case 'Feeling Low':
        setDynamicMessage('Remember, after the rain comes a rainbow.');
        break;
      case 'Excited':
        setDynamicMessage('Excitement is contagious, spread it around!');
        break;
      default:
        setDynamicMessage('');
    }
  }, [selectedFeeling]);

  const handleFeelingChange = (event) => {
    setSelectedFeeling(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const surveyData = {
      name: formData.get('name'),
      email: formData.get('email'),
      age: formData.get('age'),
      feeling: selectedFeeling,
      comments: formData.get('comments'),
      timestamp: new Date().toISOString(),
    };

    const existingLog = JSON.parse(localStorage.getItem('surveyLog')) || [];
    existingLog.push(surveyData);
    localStorage.setItem('surveyLog', JSON.stringify(existingLog));
    setSurveyResults(surveyData);
  };

  return (
    <div className="survey-container">
      <h2>How are you feeling today?</h2>
      {dynamicMessage && <p className="dynamic-message">{dynamicMessage}</p>}
      <form id="survey-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />
        </div>

        <div className="form-group">
          <label htmlFor="feeling">How are you feeling today?</label>
          <select id="feeling" name="feeling" value={selectedFeeling} onChange={handleFeelingChange}>
            <option value="">--Please choose an option--</option>
            {feelings.map((feeling, index) => (
              <option key={index} value={feeling}>{feeling}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea id="comments" name="comments" rows="4" />
        </div>

        <button type="submit">Submit</button>
      </form>
      {Object.keys(surveyResults).length > 0 && (
        <div className="survey-results">
          <h3>Survey Results:</h3>
          <pre>{JSON.stringify(surveyResults, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Survey;
