/**
 * Packages
 */
import React from 'react';

/**
 * Styles
 */
import './Field.css';

const Field = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={evt => onChange(evt)}
      className="field"
      type="text"
      placeholder="new task"
    />
  );
};

export default Field;
