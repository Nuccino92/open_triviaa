import "./LoadingScreen.scss";
import { useState } from "react";
import { useEffect } from "react";

const LoadingScreen = ({ setLoading }) => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const number = timer;
    setInterval(() => {
      number === 1 ? setTimer("START") : setTimer(number - 1);
    }, 1000);
    if (timer === "START") {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [setLoading, timer]);

  return <div className="LoadingScreen-component">{timer}</div>;
};

export default LoadingScreen;
