import React, { useState } from 'react';
import '../css/survey.css';
function Survey() {
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [surveyResults, setSurveyResults] = useState({});
  const feelings = ['Happy', 'Sad', 'Worried', 'Feeling Low', 'Excited'];

  const handleFeelingChange = (event) => {
    setSelectedFeeling(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // This prevents the default form submission
    const formData = new FormData(event.target);
    const surveyData = {
      name: formData.get('name'),
      email: formData.get('email'),
      age: formData.get('age'),
      feeling: selectedFeeling,
      comments: formData.get('comments'),
    };
    setSurveyResults(surveyData); // Update the state with the JSON - we will use this data for our calculations, or whatever. AI?
  };

  //hey just trying 
  return (
    <div className="survey" className="about-container"> 
      <h2>How are you feeling today?</h2>
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
      <pre>{JSON.stringify(surveyResults, null, 2)}</pre>
    </div>
  );
}

export default Survey;
