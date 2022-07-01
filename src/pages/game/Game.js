import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Question from "./question/Question";

import Timer from "./Timer";

const Game = () => {
  const { mode, questions } = useSelector((state) => state.gameReducer);

  const [turn, setTurn] = useState(0);

  const handleSubmit = (e, finalQuestion) => {
    e.preventDefault();
    if (finalQuestion) {
      return handleGameOver();
    }
    setTurn((prev) => prev + 1);
  };

  const handleGameOver = () => {
    alert("the game is done");
  };

  useEffect(() => {
    console.log(turn);
  }, [turn]);

  return (
    <div>
      <h1>{mode.toUpperCase()}</h1>
      <h2>{questions[0].category}</h2>

      <Timer />
      {questions.map((question, index) => {
        return (
          <Question
            questionData={question}
            currentTurn={index === turn ? true : false}
            key={index}
            finalQuestion={questions.length === index + 1 ? true : false}
            handleSubmit={handleSubmit}
          />
        );
      })}
    </div>
  );
};

export default Game;
