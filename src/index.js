import './styles/normalize.scss'
import './styles/app.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './routes'

render(
  <div className="app">
    <Router routes={routes} history={hashHistory} />
  </div>,
  document.getElementById('app')
);