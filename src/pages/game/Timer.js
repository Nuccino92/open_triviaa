import { useEffect, useRef, useState } from "react";
import "./Timer.scss";

const Timer = () => {
  const minutes = useRef(null);
  const seconds = useRef(null);
  const milliseconds = useRef(null);

  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    setTimerOn(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
  }, [timerOn]);

  return (
    <div className="timer">
      <span ref={minutes}>
        {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
      </span>
      <span ref={seconds}>
        {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
      </span>
      <span ref={milliseconds}>{("0" + ((timer / 10) % 100)).slice(-2)}</span>{" "}
    </div>
  );
};

export default Timer;
