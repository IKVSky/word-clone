import React from "react";
import { range  } from "../../utils";
import { checkGuess } from '../../../src/game-helpers';


const Cell = ({ letter, status }) => {
  const cellClasses = status ? `cell ${status}` : 'cell';

  return (
    <span className={cellClasses}>
      {letter}
    </span>
  );
};

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map(num => (
        <Cell 
          key={num}
          letter={checkedGuess ? checkedGuess[num].letter : undefined} 
          status={checkedGuess ? checkedGuess[num].status : undefined} 
        />
      ))}
    </p>
  );
}

export default Guess;
