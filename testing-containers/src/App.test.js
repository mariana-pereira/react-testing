import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import App from './App'

describe('Tests for App Container', () => {
  it('should have an initial value when first rendered', () => {
    render(
      <App 
        count={0}
        increment={jest.fn()}
        decrement={jest.fn()}
      />
    )
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })

  it('should decrement counter when fire decrement click', () => {
    const handleDecrement = jest.fn()
    render(
      <App 
        count={0}
        increment={jest.fn()}
        decrement={handleDecrement}
      />
    )
    fireEvent.click(screen.getByText('Decrement'))
    expect(handleDecrement).toHaveBeenCalledTimes(1)
  })

  it('should increment counter when fire increment click', () => {
    const handleIncrement = jest.fn()
    render(
      <App 
        count={0}
        increment={handleIncrement}
        decrement={jest.fn()}
      />
    )
    fireEvent.click(screen.getByText('Increment'))
    expect(handleIncrement).toHaveBeenCalledTimes(1)
  })

  it('should render initial positive value', () => {
    render(
      <App 
        count={1}
        increment={jest.fn()}
        decrement={jest.fn()}
      />
    )
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })

  it('should render initial negative value', () => {
    render(
      <App 
        count={-1}
        increment={jest.fn()}
        decrement={jest.fn()}
      />
    )
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()
  })
})