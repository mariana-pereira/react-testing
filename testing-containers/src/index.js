import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import App from './App.container'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
