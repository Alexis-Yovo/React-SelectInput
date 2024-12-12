import React from 'react';
import './style/TextDisplay.css';
const TextDisplay = ({ texts, onDelete }) => {
  return (
    <div className="text-display">
    {texts.map((text, index) => (
      <div key={index} className="text-item">
        <div style={{ color: text.color, fontSize: `${text.size}px` }}>
          {text.text}
        </div>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    ))}
  </div>
  );
};

export default TextDisplay;
