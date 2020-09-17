import React from 'react'
import { createStore } from 'redux'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'

import App from './App'
import { counter } from './store'

describe('Tests for App Container', () => {
  it('should have an initial value when first rendered', () => {
    render(
      <Provider store={createStore(counter)}>
        <App />
      </Provider>
    )
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })

  it('should decrement counter when fire decrement click', () => {
    render(
      <Provider store={createStore(counter)}>
        <App />
      </Provider>
    )
    fireEvent.click(screen.getByText('Decrement'))
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Decrement'))
    expect(screen.getByText('Counter: -2')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Decrement'))
    expect(screen.getByText('Counter: -3')).toBeInTheDocument()
  })

  it('should increment counter when fire increment click', () => {
    render(
      <Provider store={createStore(counter)}>
        <App />
      </Provider>
    )
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Counter: 2')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Counter: 3')).toBeInTheDocument()
  })

  it('should render initial positive value', () => {
    const store = createStore(counter)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    store.dispatch({ type: 'INCREMENT' })
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })

  it('should render initial negative value', () => {
    const store = createStore(counter)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    store.dispatch({ type: 'DECREMENT' })
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()
  })
})