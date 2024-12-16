
/*
import React from 'react';
import Game from './Game';

function App() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
            <h1>Programming Language Color Game</h1>
            <Game />
        </div>
    );
}

export default App;
*/

import React, { useState } from 'react';
import './App.css';

const languages = [
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Python', color: '#306998' },
  { name: 'Java', color: '#B07219' },
  { name: 'C++', color: '#f34b7d' },
  { name: 'Ruby', color: '#701516' },
];

function App() {
  const [score, setScore] = useState(0);
  const [currentLang, setCurrentLang] = useState(null);
  const [message, setMessage] = useState('');

  const generateNewLanguage = () => {
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    setCurrentLang(randomLang);
    setMessage('');
  };

  const checkAnswer = (color) => {
    if (currentLang.color === color) {
      setScore(score + 1);
      setMessage('Correct!');
    } else {
      setMessage('Wrong! Try again.');
    }
    generateNewLanguage();
  };

  return (
    <div className="App">
      <h1>Programming Language Quiz</h1>
      <h3>Score: {score}</h3>
      {currentLang && (
        <div>
          <h2>Identify the Programming Language Color:</h2>
          <div style={{ backgroundColor: currentLang.color, height: '100px', width: '100px', margin: 'auto' }}></div>
          <div>
            <button onClick={() => checkAnswer('#F7DF1E')}>JavaScript</button>
            <button onClick={() => checkAnswer('#306998')}>Python</button>
            <button onClick={() => checkAnswer('#B07219')}>Java</button>
            <button onClick={() => checkAnswer('#f34b7d')}>C++</button>
            <button onClick={() => checkAnswer('#701516')}>Ruby</button>
          </div>
        </div>
      )}
      <p>{message}</p>
      <button onClick={generateNewLanguage}>Start Game</button>
    </div>
  );
}

export default App;
