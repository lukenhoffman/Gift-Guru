import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, options, name, handleChange, value }) => {
  return (
    <div className="question">
      <label htmlFor={name} className="question-label">
        {question}
      </label>
      {options ? (
        <select
          name={name}
          id={name}
          className="question-select"
          onChange={handleChange}
          value={value}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          className="question-input"
          onChange={handleChange}
          value={value}
          required
        />
      )}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Question;
