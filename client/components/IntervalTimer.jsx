import React, { useState } from 'react'
import useCountDown from 'react-countdown-hook'

const IntervalTimer = () => {
  const [seconds, setSeconds] = useState(0)

  const handleChange = (event) => {
    setSeconds(event.target.value * 1000)
  }

  const handleSubmit = () => {
    start(seconds)
    pause(seconds)
  }
  const interval = 1000

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(seconds, interval)
  return (
    <>
      <h2>Intervals</h2>
      <p>Time left: {timeLeft / 1000}</p>

      <p>Work out time (in seconds):</p>
      <input
        onChange = {handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit</button>

      {/* <p>Intervals (in seconds):</p>
      <input></input>
      <button>Submit</button> */}
      <p></p>

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

export default IntervalTimer
