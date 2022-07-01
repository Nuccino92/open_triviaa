import { useEffect, useState } from "react";
import stringDecoder from "../../../resources/stringDecoder";
import "./Question.scss";
import shuffle from "../../../resources/shuffle";

const Question = ({
  currentTurn,
  finalQuestion,
  handleSubmit,
  questionData,
}) => {
  // when we submit answer, check to see if right or wrong.
  //  Also listen if finalQuestion === true, if it is stop the game

  const { difficulty, question, type, incorrect_answers, correct_answer } =
    questionData;

  const [choiceOptions, setChoiceOptions] = useState([]);

  console.log(questionData);

  useEffect(() => {
    createChoicesArray(incorrect_answers, correct_answer);
  }, [correct_answer, incorrect_answers, type]);

  // creates a shuffled array of multiple choice options to display
  const createChoicesArray = (incorrect, correct) => {
    const array = [];
    incorrect.map((answer) => {
      return array.push(answer);
    });

    array.push(correct);
    return setChoiceOptions(shuffle(array));
  };

  useEffect(() => {
    console.log(choiceOptions);
  }, [choiceOptions]);

  return (
    <div className={currentTurn ? "question current-question" : "question"}>
      <h3>Question difficulty: {difficulty.toUpperCase()}</h3>
      <p>{stringDecoder(question)}</p>

      <form>
        {choiceOptions.map((option) => {
          return (
            <label htmlFor="choice">
              {option}
              <input type="radio" name="choice" />
            </label>
          );
        })}

        <button
          style={{ fontSize: "33px" }}
          onClick={(e) => handleSubmit(e, finalQuestion)}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Question;
