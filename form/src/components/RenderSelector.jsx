import React from 'react';
import './style/RenderSelector.css';
const RenderSelector = ({ value, onChange }) => {
  return (
    <div className="render-selector">
    <label>
      <p>Sélectionnez un rendu : </p>
      <select value={value} onChange={onChange}>
        <option value="palevioletred">palevioletred</option>
        <option value="tomato">tomato</option>
      </select>
    </label>
  </div>
  );
};

export default RenderSelector;
