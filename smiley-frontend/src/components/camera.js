import React, { useRef, useEffect } from 'react';
import Human from '@vladmandic/human';
  const human = new Human({
    backend: 'webgl',
    segmentation: { enabled: true },
    face: { enabled: true,
            detector: { return: true, rotation: true },
            mesh: { enabled: false },
            iris: { enabled: false },
            description: { enabled: true },
            emotion: { enabled: true },
    },
  });


function CameraComponent({ onCapture, onBeginCapture }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => console.log(err));
    }
  }, []);

  const captureEmotion = async () => {
    onBeginCapture();
    const result = await human.detect(videoRef.current);
    onCapture(result);
  };

  return (
    <div style={{display: 'grid'}}>
      <video ref={videoRef} autoPlay></video>
      <button onClick={captureEmotion} id="awesomeCaptureImageButton">Capture Emotion</button>
    </div>
  );
}

export default CameraComponent;
