import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return ++state
    case 'DECREMENT':
      return --state
    default:
      return state
  }
}

const store = createStore(counter)

export { store, counter }
