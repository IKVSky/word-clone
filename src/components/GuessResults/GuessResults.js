import React from "react";
import { range } from "../../utils";
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess key={num} guess={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
