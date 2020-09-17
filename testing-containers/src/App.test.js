import React from 'react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import App from './App'
import { store } from './store'

describe('Tests for App Container', () => {
  it('should have an initial value when first rendered', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })
})