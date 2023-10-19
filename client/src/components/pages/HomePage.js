import React from 'react';
import './HomePage.css'; // Import your CSS file for styling

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1 className="hero-title">Welcome to GiftGenius</h1>
        <p className="hero-subtitle">Your one-stop solution for all your gifting needs</p>
      </div>
      <div className="features">
        <div className="feature">
          <i className="fas fa-gift feature-icon"></i>
          <h2 className="feature-title">Discover Unique Gifts</h2>
          <p className="feature-description">Explore a curated collection of unique and thoughtful gift ideas for every occasion.</p>
        </div>
        <div className="feature">
          <i className="fas fa-search feature-icon"></i>
          <h2 className="feature-title">Effortless Search</h2>
          <p className="feature-description">Find the perfect gift with our powerful search and filtering options.</p>
        </div>
        <div className="feature">
          <i className="fas fa-list-ul feature-icon"></i>
          <h2 className="feature-title">Create Gift Lists</h2>
          <p className="feature-description">Organize your gift ideas into lists and share them with your loved ones.</p>
        </div>
      </div>
      <div className="cta">
        <p>Ready to become a gift-guru?</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default HomePage;
