import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CmsRoute from './lib/CmsRoute'
import templateMapping from './config/templateMapping'

function App() {
  return (<CmsRoute templateMapping={templateMapping} domain='cms.react-cms-rendering.local' />)
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('app'))