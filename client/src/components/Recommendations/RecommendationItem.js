import React from 'react';
import PropTypes from 'prop-types';

function RecommendationItem({ recommendation }) {
  return (
    <div className="recommendation-item">
      <div className="recommendation-image-container">
        <img
          src={recommendation.imageUrl}
          alt={recommendation.name}
          className="recommendation-image"
        />
      </div>
      <div className="recommendation-details">
        <h3 className="recommendation-title">{recommendation.name}</h3>
        <p className="recommendation-description">{recommendation.description}</p>
        <div className="recommendation-price">
          <span className="price-label">Price:</span>
          <span className="price-value">${recommendation.price}</span>
        </div>
        <a
          href={recommendation.link}
          target="_blank"
          rel="noopener noreferrer"
          className="recommendation-link"
        >
          Check it Out
        </a>
      </div>
    </div>
  );
}

// Prop-types checking
RecommendationItem.propTypes = {
  recommendation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecommendationItem;
