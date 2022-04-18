import React from 'react'
import useCountDown from 'react-countdown-hook'

const initialTime = 40 * 1000 // initial time in milliseconds, defaults to 60000
const interval = 1000 // interval to change remaining time amount, defaults to 1000

const CountdownTimer = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval)

  // start the timer during the first render
  React.useEffect(() => {
    start()
  }, [])

  const restart = React.useCallback(() => {
    const newTime = 40 * 1000
    start(newTime)
  }, [])

  return (
    <>
      <p>Time left: {timeLeft}</p>

      <button onClick={restart}>
        Restart counter with 40 seconds
      </button>
    </>
  )
}

export default CountdownTimer
