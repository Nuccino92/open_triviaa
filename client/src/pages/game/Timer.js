import { useEffect, useRef, useState } from "react";

const Timer = ({ getTime, gameOver }) => {
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

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleStop = () => {
    let thetimer =
      minutes.current.innerText +
      seconds.current.innerText +
      milliseconds.current.innerText;

    return thetimer;
  };

  useEffect(() => {
    if (gameOver) {
      getTime(handleStop());
    }
  }, [gameOver, getTime]);

  return (
    <div className="Timer-component">
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
