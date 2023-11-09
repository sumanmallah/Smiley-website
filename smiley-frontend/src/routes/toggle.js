import React, { useState } from 'react';
import '../css/toggle.css';

function Toggle() {
  const [currentColor, setCurrentColor] = useState('red');
  const [isColorBlindMode, setColorBlindMode] = useState(false);

  const handleToggleButtonClick = () => {
    setCurrentColor(currentColor === 'red' ? 'green' : 'red')};

  const toggleColorMode = () => {
    setColorBlindMode(!isColorBlindMode);
  };

  return (
    <div className="about-container">
    <div className={`color_change ${isColorBlindMode ? 'color-blind' : ''}`}>
      <label htmlFor="toggle-button">Toggle Color</label>
      <input type="checkbox" id="toggle-button" onClick={handleToggleButtonClick} />
      <span>Current color: {currentColor}</span>
      <button onClick={toggleColorMode}>
        {isColorBlindMode ? 'Color Blind Mode' : 'Normal Mode'}
      </button>
    </div>
    </div>
  );
}

export default Toggle;
