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
  const {
    difficulty,
    question,
    type,
    incorrect_answers,
    correct_answer,
    category,
  } = questionData;

  const [choiceOptions, setChoiceOptions] = useState([]);

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

  return (
    <div className={currentTurn ? "question current-question" : "question"}>
      <h3>Question difficulty: {difficulty.toUpperCase()}</h3>
      <p>{stringDecoder(question)}</p>

      <form>
        {choiceOptions.map((option, index) => {
          // checks if option is correct, then passes to handleSubmit
          const correct = option === correct_answer ? true : false;
          const selected = option;

          return (
            <button
              key={index}
              onClick={(e) =>
                handleSubmit(
                  e,
                  finalQuestion,
                  correct,
                  question,
                  choiceOptions,
                  selected,
                  correct_answer,
                  difficulty,
                  category
                )
              }
            >
              {stringDecoder(option)}
            </button>
          );
        })}
      </form>
    </div>
  );
};

export default Question;
