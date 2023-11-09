import React, { useState, useEffect } from 'react';
import '../css/about.css';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function FeelingCalendar({ surveyDataLog }) {
  // State to store the selected date and feelings for that date
  const [selectedDate, setSelectedDate] = useState(null);
  const [feelingsForSelectedDate, setFeelingsForSelectedDate] = useState([]);

  // Update the feelings for the selected date when the date changes
  useEffect(() => {
    if (selectedDate) {
      // Filter survey data for the selected date
      const filteredData = surveyDataLog.filter(
        (entry) => entry.timestamp.startsWith(selectedDate.toISOString().split('T')[0])
      );

      // Extract and store the feelings for the selected date
      const feelings = filteredData.map((entry) => entry.feeling);
      setFeelingsForSelectedDate(feelings);
    }
  }, [selectedDate, surveyDataLog]);

  return (
    <div>
      <h2>Feeling Calendar</h2>
      <div className="calendar-container">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
        />
      </div>
      {selectedDate && (
        <div>
          <h3>Feelings on {selectedDate.toLocaleDateString()}</h3>
          {feelingsForSelectedDate.length > 0 ? (
            <ul>
              {feelingsForSelectedDate.map((feeling, index) => (
                <li key={index}>{feeling}</li>
              ))}
            </ul>
          ) : (
            <p>No feelings recorded for this date.</p>
          )}
        </div>
      )}
    </div>
  );
}


function AboutMyData() {
  const [surveyDataLog, setSurveyDataLog] = useState([]);

  useEffect(() => {
    // Retrieve the survey data log from localStorage when the component mounts
    const storedLog = localStorage.getItem('surveyLog');

    if (storedLog) {
      // Parse the stored data and set it as the surveyDataLog state
      setSurveyDataLog(JSON.parse(storedLog));
    }
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="about-container">
      <FeelingCalendar surveyDataLog={surveyDataLog} />
    </div>
  );
}

export default AboutMyData;
