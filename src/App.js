import { useState } from "react";
import Timer from './components/Timer/Timer';
import './styles/global.scss';
import { useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    let timeGo;
    if (intervalId) {
      timeGo = setIntervalId(() => setTime((prevValue) => prevValue + 10), 10);
    }
    return () => clearInterval(timeGo);
  }, [intervalId]);

  const startTimer = () => {
    setIntervalId(true)
  };
  
  const stopTimer = () => {
    setIntervalId(null);
  }

  const resetTime = () => {
    setTime(0);
  }
  return (
  <div className='container'>
    <Timer time={time} />
    <div className='buttons'>
      <button className='button'onClick={startTimer}>Start</button>
      <button className='button'onClick={stopTimer}>Stop</button>
      <button className='button'onClick={resetTime}>Reset</button>
    </div>
  </div>
  );
}

export default App;