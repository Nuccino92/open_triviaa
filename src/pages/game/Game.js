import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "./question/Question";
import { useNavigate } from "react-router-dom";

import Timer from "./Timer";
import { storePostGameData } from "../../redux/actions/game";

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode, questions } = useSelector((state) => state.gameReducer);

  const [turn, setTurn] = useState(0);
  const [gameLog, setGameLog] = useState([]);
  const [time, setTime] = useState(null);
  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(false);

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

    if (correct) {
      setScore((prev) => prev + 1);
    }

    if (finalQuestion) {
      setGameOver(true);
    }

    setTurn((prev) => prev + 1);
  };

  useEffect(() => {
    if (gameOver) {
      getTime();
      console.log(score);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver]);

  const getTime = (time) => {
    setTime(time);
  };

  useEffect(() => {
    if (time) {
      dispatch(storePostGameData(gameLog, score, time));

      // set gamelog into redux
      navigate("/game/gamelog");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div>
      <h1>{mode.toUpperCase()}</h1>
      <h2>{questions[0].category}</h2>

      <Timer getTime={getTime} gameOver={gameOver} />
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
