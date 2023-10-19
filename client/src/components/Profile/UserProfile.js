import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Import your CSS file for styling

function UserProfile({ userId }) {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user profile data
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUserProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to fetch user profile. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="user-profile">
      {loading ? (
        <p className="loading-message">Loading user profile...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : userProfile ? (
        <>
          <img src={userProfile.avatarUrl} alt={`${userProfile.name}'s avatar`} className="avatar" />
          <h2>{userProfile.name}</h2>
          <h3>Favorite Items:</h3>
          <ul className="favorite-items-list">
            {userProfile.favoriteItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          {/* Additional user details... */}
        </>
      ) : (
        <p className="no-user-message">User not found.</p>
      )}
    </div>
  );
}

export default UserProfile;
