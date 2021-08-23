import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState(10); //Seconds
  const [isRunning, setIsRunning] = useState(false);

  function padTime(time) {
    return time.toString().padStart(2, '0');
  }
  let interval = useRef(null);

  const val = useRef(null);

  function startTimer() {
    setIsRunning(true);

    interval.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime >= 1) return prevTime - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    setIsRunning(false);
    clearInterval(interval.current);
    interval.current = null;
  }
  function resetTimer() {
    setIsRunning(false);
    clearInterval(interval.current);
    interval.current = null;
    setTimeLeft(25 * 60);
  }

  function setTimer() {
    console.log(val.current.value); //
    const value = val.current.value;
    setTimeLeft(value * 60);
    val.current.value = '';
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className='App'>
      <div className='container'>
        <h1>Pomodoro Timer</h1>
        <h2>
          {minutes}:{seconds}
        </h2>
        <div className='btn-container'>
          {isRunning && <button onClick={stopTimer}>Stop</button>}
          {!isRunning && <button onClick={startTimer}>Start</button>}

          <button onClick={resetTimer}>Reset</button>

          <div className='second'>
            <label>Set Timer (inMinutes)</label>&nbsp;
            <input ref={val} type='number' />
            <button onClick={setTimer}>Set</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
