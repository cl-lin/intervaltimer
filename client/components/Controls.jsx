import React from 'react'
import useCountDown from 'react-countdown-hook'

const Controls = () => {
  const interval = 1000 // interval to change remaining time amount, defaults to 1000

  const [{ start, pause, resume, reset }] = useCountDown(seconds, interval)
  return (
    <>

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
export default Controls
