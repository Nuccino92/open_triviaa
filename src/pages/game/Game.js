import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Question from "./question/Question";
import { useNavigate } from "react-router-dom";

import Timer from "./Timer";

const Game = () => {
  const navigate = useNavigate();
  const { mode, questions } = useSelector((state) => state.gameReducer);

  const [turn, setTurn] = useState(0);
  const [gameLog, setGameLog] = useState([]);

  const handleSubmit = (
    e,
    finalQuestion,
    correct,
    question,
    choiceOptions,
    selected,
    correct_answer,
    difficulty,
    category
  ) => {
    e.preventDefault();

    // if(selected === correct answer {make selected green} else {selected red && correct_answer green})
    setGameLog((prev) => {
      return [
        ...prev,
        {
          correct,
          question,
          choiceOptions,
          selected,
          correct_answer,
          difficulty,
          category,
        },
      ];
    });

    if (finalQuestion) {
      return handleGameOver();
    }
    setTurn((prev) => prev + 1);
  };

  const handleGameOver = () => {
    // set gamelog into redux
    navigate("/game/gamelog");
  };

  useEffect(() => {
    console.log(gameLog);
  }, [gameLog]);

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
