import React, { useState } from 'react';
import languages from './languages';
import Score from './Score';
import Message from './Message';

function Game() {
    const [currentLanguage, setCurrentLanguage] = useState(null);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');

    const handleGuess = (color) => {
        if (currentLanguage && languages[currentLanguage].color === color) {
            setScore(score + 1);
            setMessage('Correct!');
        } else {
            setMessage('Wrong! Try again.');
        }
        nextLanguage();
    };

    const nextLanguage = () => {
        const randomLanguage = Object.keys(languages)[Math.floor(Math.random() * Object.keys(languages).length)];
        setCurrentLanguage(randomLanguage);
    };

    React.useEffect(() => {
        nextLanguage();
    }, []);

    return (
        <div>
            {currentLanguage && (
                <div>
                    <h2>Guess the color of {currentLanguage}</h2>
                    <button onClick={() => handleGuess('red')}>Red</button>
                    <button onClick={() => handleGuess('blue')}>Blue</button>
                    <button onClick={() => handleGuess('green')}>Green</button>
                    <button onClick={() => handleGuess('yellow')}>Yellow</button>
                </div>
            )}
            <Message message={message} />
            <Score score={score} />
        </div>
    );
}

export default Game;
