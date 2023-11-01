import React, { useState } from 'react';
function Toggle() {
    // Survey form code goes here
  
    const [currentColor, setCurrentColor] = useState("red");
  
    const handleToggleButtonClick = () => {
      setCurrentColor(currentColor === "red" ? "green" : "red");
    };
  
    return (
      <div className="color_change">
        <label htmlFor="toggle-button">Toggle Color</label>
        <input type="checkbox" id="toggle-button" onClick={handleToggleButtonClick} />
        <span>Current color: {currentColor}</span>
      </div>
    );
  }
  
  export default Toggle;