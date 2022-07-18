import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import stringDecoder from "../../resources/stringDecoder";
import "./GameLog.scss";

const GameLog = () => {
  const { gameLog } = useSelector((state) => state.gameReducer);
  const { gameLog: log, score, time } = gameLog;

  const [category, setCategory] = useState(undefined);

  useEffect(() => {
    setCategory(log[0].category);
  }, [log]);

  return (
    <div className="GameLog-component">
      <header>
        <h1>Post Game Report!!</h1>
        <h2>Category: {category}</h2>
        <p>
          Your score: {score} / {log.length}
        </p>
        <p>Your time: {time}</p>
      </header>

      {log.map((question, index) => {
        const { correct } = question;

        const number = index + 1;
        return (
          <div className="GameLog-component-question" key={index}>
            <h2>Question #{number}</h2>
            <h4>Question difficulty: {question.difficulty}</h4>
            <p>{stringDecoder(question.question)}</p>
            <div>
              <span className="answer-span">
                Answer:{" "}
                {correct ? (
                  <span className="correct-answer">Correct</span>
                ) : (
                  <span className="selected-answer">Incorrect</span>
                )}
              </span>
              {question.choiceOptions.map((choice) => {
                const { selected, correct_answer } = question;
                return (
                  <span
                    className={
                      choice === correct_answer
                        ? "correct-answer"
                        : choice === selected
                        ? "selected-answer"
                        : null
                    }
                  >
                    {stringDecoder(choice)}&nbsp;
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameLog;
