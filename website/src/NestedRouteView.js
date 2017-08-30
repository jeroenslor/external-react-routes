import React from 'react'

import { Switch, Route } from 'react-router-dom'

// todo add support for frontend only nested routes? avoid reloading on link?

function NestedRouteView({ content: { foo }, match, routes }) {
  function getRoute(name) {
    return routes[name]
  }

  return (
    <div>
      <h1>Nested route template</h1>
      <div>How to get the current params?</div>
      <Switch>
        <Route path={getRoute('nested1')} component={({ match }) => <div>nested1 with id {match.params.id}</div>} />
        <Route path={getRoute('nested1')} component={({ match }) => <div>nested2 with id {match.params.id}</div>} />
      </Switch>
      <Link to={getRoute('nested1').replace(':id', 1)}>nested 1</Link>
    </div>
  )
}

export default NestedRouteView