import React from 'react';
import './style/SizeSelector.css';
const SizeSelector = ({ value, onChange }) => {
  return (
    <div className="size-selector">
      <label>
        <p>Taille du texte :</p>
        <select value={value} onChange={onChange}>
          {[15, 16, 17, 18, 19, 20].map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SizeSelector;
