import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
  const history = useHistory();
  const { loginUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null); // State to handle login errors

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    const isSuccess = await loginUser(loginForm);
    if (isSuccess) {
      history.push('/');
    } else {
      setError('Invalid username or password. Please try again.'); // Display error message
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginForm.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
