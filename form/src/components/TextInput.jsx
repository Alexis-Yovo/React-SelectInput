import React from 'react';
import './style/TextInput.css';
const TextInput = ({ value, onChange }) => {
  return (
    <div className="text-input">
    <label>
      <p>Saisir le texte : </p>
      <input type="text" value={value} onChange={onChange} placeholder="Entrer un texte"/>
    </label>
  </div>
  );
};

export default TextInput;
