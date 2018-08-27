import './styles/normalize.scss'
import './styles/app.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './routes'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import commentReducer from './js/reducers/comments'

const store = createStore(commentReducer);

render(
  <Provider store={store}>
    <div className="app">
      <Router routes={routes} history={hashHistory} />
    </div>
  </Provider>,
  document.getElementById('app')
);

