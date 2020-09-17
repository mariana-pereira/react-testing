import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router'

const App = () => {
  const count = useSelector(state => state)
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleDecrement} type="button">
        Decrement
        </button>
      <button onClick={handleIncrement} type="button">
        Increment
      </button>
    </div>
  )
}

export default withRouter(App)
