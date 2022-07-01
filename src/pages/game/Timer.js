import { useEffect, useRef, useState } from "react";
import "./Timer.scss";

const Timer = () => {
  const minutes = useRef(null);
  const seconds = useRef(null);
  const milliseconds = useRef(null);

  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [completedTime, setCompletedTime] = useState("");

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

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleStop = () => {
    let thetimer =
      minutes.current.innerText +
      seconds.current.innerText +
      milliseconds.current.innerText;

    setCompletedTime(thetimer);
  };

  useEffect(() => {
    console.log(completedTime);
  }, [completedTime]);

  return (
    <div className="timer">
      <span ref={minutes}>
        {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
      </span>
      <span ref={seconds}>
        {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
      </span>
      <span ref={milliseconds}>{("0" + ((timer / 10) % 100)).slice(-2)}</span>{" "}
      <button onClick={handleStop}>stop</button>
    </div>
  );
};

export default Timer;
