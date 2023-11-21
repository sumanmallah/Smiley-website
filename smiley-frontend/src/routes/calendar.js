import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../css/calendar.css';
import 'react-calendar/dist/Calendar.css';
 
function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    // Retrieve events from localStorage
    const storedEvents = localStorage.getItem('surveyLog');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);
  const setClass = (date) => {
    const dateObj = events.find(event => {
      const eventDate = new Date(event.timestamp);
      return date.getFullYear() === eventDate.getFullYear() &&
             date.getMonth() === eventDate.getMonth() &&
             date.getDate() === eventDate.getDate(); // make sure year, month, and day right. exact time (HH:MM) not important.
    });
    return dateObj ? 'calendar-ACCESSIBILITY-responded-on-this-day' : '';  // 'event-day' is a custom CSS class - make 
  };
    const onDayClick = (day) => {
    const eventForDay = events.find(event => {
      const eventDate = new Date(event.timestamp);
      return day.getFullYear() === eventDate.getFullYear() &&
             day.getMonth() === eventDate.getMonth() &&
             day.getDate() === eventDate.getDate();
    });
    setSelectedEvent(eventForDay);
  };

  return (
    <div className="my-data-container">
      <div className='calendar-container'>
        <Calendar
        onClickDay={onDayClick}
        tileClassName={({ date, view }) => setClass(date)}
        />
        {selectedEvent && (
          <div className='event-details'>
            <p>Comments: {selectedEvent.comments || 'N/A'}</p>
            <p>Feeling: {selectedEvent.feeling || 'N/A'}</p>
            <p>Time: {Date(selectedEvent.timestamp).toLocaleTimeString()} </p>
          </div>
        )}
        
      </div>
    </div>
  );
}
 
export default EventCalendar;
