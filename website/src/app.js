import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CmsRoute from './lib/CmsRoute'
import templateMapping from './config/templateMapping'

function App() {
  return (
    <div>
      <div>Header</div>
      <div>
        <CmsRoute templateMapping={templateMapping} domain='cms.react-cms-rendering.local' />
      </div>
      <div>Footer</div>
    </div>)
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('app'))