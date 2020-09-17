import React from 'react'

const App = ({ count, increment, decrement }) => (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={decrement} type="button">
      Decrement
      </button>
    <button onClick={increment} type="button">
      Increment
    </button>
  </div>
)

export default App
