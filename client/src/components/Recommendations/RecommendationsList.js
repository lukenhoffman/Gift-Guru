import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecommendationItem from './RecommendationItem';

function RecommendationList() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching gift recommendations from API
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/recommendations');
        setRecommendations(response.data);
      } catch (err) {
        setError('Something went wrong! Unable to fetch recommendations.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="recommendation-list">
      <h2 className="recommendation-title">Gift Recommendations</h2>
      {loading && <p className="loading-message">Loading recommendations...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && recommendations.length === 0 && (
        <p className="empty-message">No recommendations found!</p>
      )}
      {!loading && recommendations.length > 0 && (
        <div className="recommendation-items">
          {recommendations.map(recommendation => (
            <RecommendationItem key={recommendation._id} recommendation={recommendation} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RecommendationList;
