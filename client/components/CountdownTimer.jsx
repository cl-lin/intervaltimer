import React, { useState } from 'react'
import useCountDown from 'react-countdown-hook'

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0)

  const handleChange = (event) => {
    setSeconds(event.target.value * 1000)
  }

  const handleSubmit = () => {
    start(seconds)
    pause(seconds)
  }
  const interval = 1000 // interval to change remaining time amount, defaults to 1000

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(seconds, interval)
  return (
    <>
      <p>Input your time (in seconds):</p>
      <input
        onChange = {handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit</button>

      <p>Time left: {timeLeft / 1000}</p>

      <button onClick={() => start(seconds)}>
        Start
      </button>
      <button onClick={() => pause()}>
        Pause
      </button>
      <button onClick={() => resume()}>
        Resume
      </button>
      <button onClick={() => reset()}>
        Reset
      </button>
    </>
  )
}

export default CountdownTimer
