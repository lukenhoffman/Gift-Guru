import React, { useState, useEffect } from 'react';
import './RecommendationsPage.css'; // Import your CSS file for styling

function RecommendationsPage() {
  const [userInputs, setUserInputs] = useState({
    occasion: '',
    recipient: '',
    budget: '',
  });

  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading recommendations when user inputs change
  useEffect(() => {
    setIsLoading(true);
    // Replace with actual recommendation fetching logic based on user inputs
    setTimeout(() => {
      // Simulated recommendations (replace with real data)
      const mockRecommendations = [
        { id: 1, name: 'Gift Idea 1' },
        { id: 2, name: 'Gift Idea 2' },
        { id: 3, name: 'Gift Idea 3' },
      ];
      setRecommendations(mockRecommendations);
      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay for loading
  }, [userInputs]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission (e.g., fetch recommendations based on user inputs)
  };

  return (
    <div className="recommendations-page">
      <h1>Gift Recommendations</h1>
      <form onSubmit={handleSubmit} className="recommendations-form">
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <input
            type="text"
            id="occasion"
            name="occasion"
            value={userInputs.occasion}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={userInputs.recipient}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget:</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={userInputs.budget}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="recommendations-button">
          Find Recommendations
        </button>
      </form>
      {isLoading ? (
        <p>Loading recommendations...</p>
      ) : (
        <ul className="recommendations-list">
          {recommendations.map((recommendation) => (
            <li key={recommendation.id}>{recommendation.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationsPage;
