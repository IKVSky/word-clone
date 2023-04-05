import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.info(guess);
    setGuess('');
  };

  const handleGuessInput = event => setGuess(event.target.value.toUpperCase());

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Five letter word"
        id="guess-input" 
        type="text" 
        value={guess} 
        onChange={handleGuessInput} />
    </form>
  );
}

export default GuessInput;
