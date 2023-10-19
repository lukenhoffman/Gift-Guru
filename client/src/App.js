import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components and pages
import Navbar from './components/Navigation/Navbar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import GiftListPage from './components/pages/GiftListPage';
import RecommendationsPage from './components/pages/RecommendationsPage';
import UserProfile from './components/Profile/UserProfile';
import Questionnaire from './components/Questionnaire/Questionnaire';

// Context
import AuthProvider from './components/Auth/AuthProvider';

// Styles
import './App.css'; // Consider using a single stylesheet for your app

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          {/* Navbar */}
          <Navbar />
          {/* Main Content */}
          <div className="content">
            <Switch>
              {/* Define your routes */}
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/giftlist" component={GiftListPage} />
              <Route exact path="/recommendations" component={RecommendationsPage} />
              <Route exact path="/profile" component={UserProfile} />
              <Route exact path="/questionnaire" component={Questionnaire} />
              {/* Add a default route for 404 */}
              <Route path="*" component={() => <div>404 Page Not Found</div>} />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
