import React, { useState } from 'react';
import CameraComponent from '../components/camera.js';
import '../css/loading.css';

function Loading() {
  // from: https://codepen.io/Manoz/pen/kyWvQw
  return (
    <div className="loading-objects-container">
      <div className="load-3">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="load-6">
        <div className="letter-holder">
          <div className="l-1 letter">L</div>
          <div className="l-2 letter">o</div>
          <div className="l-3 letter">a</div>
          <div className="l-4 letter">d</div>
          <div className="l-5 letter">i</div>
          <div className="l-6 letter">n</div>
          <div className="l-7 letter">g</div>
          <div className="l-8 letter">.</div>
          <div className="l-9 letter">.</div>
          <div className="l-10 letter">.</div>
        </div>
      </div>
    </div>
  )
}

function Survey() {
  const [step, setStep] = useState('camera'); // State to control the survey flow
  const [emotionResult, setEmotionResult] = useState(null); // State to store the emotion detection result

  const onBeginCapture = async () => {
    setStep('loading');
  }

  const onCapture = async (result) => {
    console.log(result)
    setEmotionResult(result);


    const surveyData = {
      feeling: result?.face[0].emotion[0].emotion || "Unknown",
      detectionResult: result,
      timestamp: new Date().toISOString(),
    };

    const existingLog = JSON.parse(localStorage.getItem('surveyLog')) || [];
    existingLog.push(surveyData);
    localStorage.setItem('surveyLog', JSON.stringify(existingLog));

    setTimeout(() => {
      setStep('result');
    }, 2000); // Simulate a loading time, it only takes like 0.1s to actually process lol
    setTimeout(() => {
      window.location.href = '/me';
    }, 5000)
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
    <div className="survey-container" style={{'text-align': 'center'}}>
      {step === 'camera' && (
      <div style={{'font-size': '100px'}}>&#127908;<div style={{'font-size':'30px'}}>Click me!</div></div>
      
      )}
      {step === 'loading' && <Loading />}
      {step === 'result' && (
        <div>
          Detected Emotion: {emotionResult?.face[0].emotion[0].emotion || "Unknown"} 
          <br />
          Redirecting you in 5 seconds...
        </div>
      )}
        <div>
        </div>
    </div>
  );
}

export default Survey;
