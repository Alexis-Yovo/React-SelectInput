import React, { useReducer } from 'react';
import "./App.css";
import TextInput from './components/TextInput';
import RenderSelector from './components/RenderSelector';
import SizeSelector from './components/SizeSelector';
import TextDisplay from './components/TextDisplay';

const initialState = {
  texts: [],
  currentText: '',
  currentColor: 'palevioletred',
  currentSize: '15',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, currentText: action.payload };
    case 'SET_COLOR':
      return { ...state, currentColor: action.payload };
    case 'SET_SIZE':
      return { ...state, currentSize: action.payload };
    case 'ADD_TEXT':
      return {
        ...state,
        texts: [...state.texts, { text: state.currentText, color: state.currentColor, size: state.currentSize }],
        currentText: '',
      };
    case 'DELETE_TEXT':
      return {
        ...state,
        texts: state.texts.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTextChange = (e) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleColorChange = (e) => {
    dispatch({ type: 'SET_COLOR', payload: e.target.value });
  };

  const handleSizeChange = (e) => {
    dispatch({ type: 'SET_SIZE', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TEXT' });
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_TEXT', payload: index });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <TextInput value={state.currentText} onChange={handleTextChange} />
        <RenderSelector value={state.currentColor} onChange={handleColorChange} />
        <SizeSelector value={state.currentSize} onChange={handleSizeChange} />
        <button type="submit">Valider</button>
      </form>
      <TextDisplay texts={state.texts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
