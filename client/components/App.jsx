import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(40)

  useEffect(() => {

  }, [count])

  return (
    <>
      <h1>Interval Timer</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Click</button>
    </>
  )
}

export default App

// const [greeting, setGreeting] = useState('hello ')
// const [count, setCount] = useState(10)

// useEffect(() => {
//   getGreeting()
//     .then((greeting) => {
//       console.log('this is', greeting)
//       setGreeting(greeting)
//     })
// }, [count])
