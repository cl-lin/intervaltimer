import React, { useState } from "react";
import useCountDown from "react-countdown-hook";

// const initialTime = 40 * 1000

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0);

  // const initialTime = seconds // initial time in milliseconds, defaults to 60000
  const interval = 1000; // interval to change remaining time amount, defaults to 1000

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    seconds,
    interval
  );

  // start the timer during the first render
  // React.useEffect(() => {
  //   start()
  // }, [])

  // const restart = React.useCallback(() => {
  //   const newTime = 40 * 1000
  //   start(newTime)
  // }, [])

  const handleChange = (e) => {
    const time = e.target.value * 1000;
    setSeconds(time);
  };


  return (
    <>
      <p>Input your time (in seconds):</p>
      <input onChange={handleChange} />
      <button onClick={() => start(seconds)}>Submit</button>

      <p>Time left: {timeLeft / 1000}</p>

      <button onClick={() => start(seconds)}>Start</button>
      {/* <button onClick={restart}>
        Restart counter with 40 seconds
      </button> */}
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => resume()}>Resume</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};

export default CountdownTimer;
