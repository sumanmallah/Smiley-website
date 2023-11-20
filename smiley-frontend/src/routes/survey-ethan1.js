import React, { useState } from 'react';
import CameraComponent from '../components/camera.js';


function Survey() {
  const [step, setStep] = useState('camera'); // State to control the survey flow
  const [emotionResult, setEmotionResult] = useState(null); // State to store the emotion detection result

  const onCapture = async (result) => {
    console.log(result)
    setEmotionResult(result);
    setStep('loading');
    setTimeout(() => {
      setStep('result');
    }, 2000); // Simulate a loading time, it only takes like 0.1s to actually process lol
  };

  //const handleSubmit = (event) => {
  //  event.preventDefault();

  //  const formData = new FormData(event.target);
  //  const surveyData = {
  //    detectedEmotion: emotionResult.emotion, // Add detected emotion to the survey data
  //  };

  //  const existingLog = JSON.parse(localStorage.getItem('surveyLog')) || [];
  //  existingLog.push(surveyData);
  //  localStorage.setItem('surveyLog', JSON.stringify(existingLog));
  //};

  return (
    <div className="survey-container">
      {step === 'camera' && (
        <CameraComponent onCapture={onCapture} />
      )}
      {step === 'loading' && <div>Loading...</div>}
      {step === 'result' && (
        <div>
          Detected Emotion: {emotionResult?.face[0].emotion[0].emotion || "Unknown"}
        </div>
      )}
    </div>
  );
}

export default Survey;
