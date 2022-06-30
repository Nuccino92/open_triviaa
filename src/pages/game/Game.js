import { useSelector } from "react-redux";

import Timer from "./Timer";

const Game = () => {
  const { mode, questions } = useSelector((state) => state.gameReducer);

  return (
    <div>
      <h1>{mode.toUpperCase()}</h1>
      <div className="timer">
        <Timer />
      </div>
    </div>
  );
};

export default Game;
