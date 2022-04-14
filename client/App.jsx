import React, { useState, useEffect } from 'react'

const App = () => {
  const [seconds, setSeconds] = useState(40)

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      setSeconds('BOOOOM!')
    }
  }, [])

  return (
    <>
      <h1>Interval Timer</h1>

      <p>Countdown from: {seconds} seconds  </p>
      {/* <button onClick={() => { timer }}>Start</button> */}
    </>
  )
}

export default App
