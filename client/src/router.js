import React from 'react';
import { Route } from 'react-router-dom';
import Questionnaire from './Questionnaire'; // Import your Questionnaire component

function Router({ children }) {
  return (
    <div>
      {/* Define your routes here */}
      <Route path="/questionnaire" component={Questionnaire} />
      {/* Add more routes as needed */}
      {children}
    </div>
  );
}

export default Router;
