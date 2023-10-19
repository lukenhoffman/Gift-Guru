import React, { useState } from 'react';
import axios from 'axios';
import Question from './Question';

const Questionnaire = () => {
  const initialFormData = {
    ageGroup: '',
    interests: '',
    occasion: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/recommendations', formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit questionnaire', err);
    }
  };

  return (
    <div className="questionnaire">
      <h2>Find the Perfect Gift!</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <Question
            question="Age Group:"
            name="ageGroup"
            options={[
              { label: 'Select Age Group', value: '' },
              { label: 'Children', value: 'children' },
              { label: 'Teens', value: 'teens' },
              { label: 'Adults', value: 'adults' },
            ]}
            handleChange={handleChange}
            value={formData.ageGroup || ''}
          />
          <Question
            question="Interests:"
            name="interests"
            handleChange={handleChange}
            value={formData.interests || ''}
          />
          <Question
            question="Occasion:"
            name="occasion"
            options={[
              { label: 'Select Occasion', value: '' },
              { label: 'Birthday', value: 'birthday' },
              { label: 'Anniversary', value: 'anniversary' },
            ]}
            handleChange={handleChange}
            value={formData.occasion || ''}
          />
          <button type="submit">Find Recommendations</button>
        </form>
      ) : (
        <div className="submitted-message">
          <p>Thank you for submitting!</p>
          <p>Checking for recommendations...</p>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
