import React, { useState, useEffect } from 'react';

function GiftListPage() {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching gifts from an API (replace with your actual API call)
    fetch('/api/gifts')
      .then((response) => response.json())
      .then((data) => {
        setGifts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (gifts.length === 0) {
    return <p>No gifts found.</p>;
  }

  return (
    <div>
      <h1>Gift List Page</h1>
      <ul className="gift-list">
        {gifts.map((gift) => (
          <li key={gift.id} className="gift-item">
            <h2>{gift.name}</h2>
            <div className="gift-details">
              <p>Price: ${gift.price}</p>
              <p>Category: {gift.category}</p>
              {/* Add more gift details as needed */}
            </div>
            {/* Add a "Add to Wishlist" button or other actions */}
          </li>
        ))}
      </ul>
      {/* Pagination, search, sorting, and other features can be added here */}
    </div>
  );
}

export default GiftListPage;
