import React from 'react';
import PropTypes from 'prop-types';
import './Reminder.css'; // Import your CSS file for styling

function Reminder({ title, date, notes, onEdit, onDelete }) {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="reminder">
      <div className="reminder-header">
        <h3>{title}</h3>
        <button onClick={onEdit} className="edit-btn">
          Edit
        </button>
        <button onClick={onDelete} className="delete-btn">
          Delete
        </button>
      </div>
      <div className="reminder-details">
        <p>
          <strong>Date:</strong> {formattedDate}
        </p>
        {notes && (
          <p>
            <strong>Notes:</strong> {notes}
          </p>
        )}
      </div>
    </div>
  );
}

// PropTypes for component validation
Reminder.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reminder;
