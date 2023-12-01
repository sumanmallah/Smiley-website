// Recommendation.js
import '../css/recommendation.css';
import '../css/survey.css';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import OpenAI from 'openai';

function Recommendation() {
  const location = useLocation();
  const { feeling, comments } = location.state || { feeling: '', comments: '' };
  const [recommendation, setRecommendation] = useState('');

  const prompt = 'Based on the following input, please consider actions and thoughts for the user to keep in mind throughout their day to better improve their mood: ';
  const openai = new OpenAI({apiKey: "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", dangerouslyAllowBrowser: true});
  const fetchRecommendations = async () => {
      try {
        console.log("BEEEEGIN")
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: prompt+" the user is feeling: " + feeling + ", here's any additional comments: " + comments }],
          model: 'gpt-3.5-turbo',
        });
        console.log(chatCompletion);
        setRecommendation(chatCompletion.choices[0].message.content);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      };
    
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);
  
  return (
    <div className="survey-container">
      <h2>Your Survey Results</h2>
      <p><strong>Feeling:</strong> {feeling}</p>
      <p><strong>Comments:</strong> {comments}</p>
      {recommendation === '' ? (
      <p><strong>Loading...</strong></p>
      ) : (
      <p><strong>Recommendation:</strong> {recommendation }</p>
      )}
    </div>
  );
}

export default Recommendation;
