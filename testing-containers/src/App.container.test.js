import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'

import App from './App.container'

import { counter } from './store'

describe('Tests for App container', () => {
  it('Should initial value when first render', () => {
    render(
      <Provider store={createStore(counter)}>
        <App />
      </Provider>
    )
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })

  it('Should decrement counter when fire decrement click', () => {
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

  it('Should increment counter when fire increment click', () => {
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

  it('Should render initial positive value', () => {
    const store = createStore(counter);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    store.dispatch({ type: 'INCREMENT' })
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })

  it('Should render initial negative value', () => {
    const store = createStore(counter);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    store.dispatch({ type: 'DECREMENT' })
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()
  })
})