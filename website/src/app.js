import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { matchPath } from 'react-router'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const callCmsApi = (url) => new Promise((resolve, reject) => {
  console.info('get route data for', url)
  // convert pub url to cms url sub domain
  setTimeout(() => {
    switch (url) {
      case '/':
        return resolve({ template: 'home', content: { foo: 'bar' }, route: { name: 'home', pattern: '/' } })
      case '/foo':
      case '/foo/':
        return resolve({ template: 'foo', content: { foo: 'bar' }, route: { name: 'foo', pattern: '/foo' } })
      case '/nested':
      case '/nested/':
        return resolve({
          template: 'nested', content: { foo: 'bar' }, routes:
          [
            { name: 'nested1', path: `${url}/nested1/:id` },
            { name: 'nested2', path: `${url}/nested2/:id` }
          ]
        })
      default:
        throw Error('not implemented exception')
    }
  }, 3000)
})

class CmsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      template: null,
      content: null,
      routes: [],
      loading: false,
      success: false,
      error: false
    }
  }
  loadCmsRouteData(match) {
    // need to support nested routes (non-hierarchical params) without reloading the cms route data.
    // params chould be querystring or /fo
    // add support for named params?
    // for querystrings no backend call needs to be made? just check location and get data custom

    // use matchPath if routes is set to detect if it's a nested route, if it is don't get data
    // als use matchPath or nested route the get params to the components?  
    this.setState({ loading: true })
    callCmsApi(match.url)
      .then(({ template, content, routes }) => {
        this.setState({ loading: false, success: true, error: false, template, content, match, route, routes })
      })
  }
  componentWillReceiveProps({ match }) {
    this.loadCmsRouteData(match)
  }
  componentDidMount() {
    this.loadCmsRouteData(this.props.match)
  }
  render() {
    console.info('here')
    if ((!this.state.success && !this.state.error) || this.state.loading) {
      return <div>Loading ...</div>
    }
    const elemMap = {
      home: HomeView,
      foo: FooView,
      nestedRoute: NestedRouteView
    }
    const cmsView = React.createElement(elemMap[this.state.template], { content: this.state.content, routes: this.state.routes })
    // use route to add support for params in view component
    return <Route path={this.state.route.pattern} component={cmsView} /> // how to deal with props?
  }
}

function HomeView({ content: { foo } }) {
  return (
    <div>
      <h1>Home template</h1>
      <div>some content: {foo}</div>
      <Link to='/foo'>go to foo</Link>
    </div>
  )
}

function FooView({ content: { foo } }) {
  return (
    <div>
      <h1>Foo template</h1>
      <div>some content: {foo}</div>
    </div>
  )
}

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

function CmsRoute({ path }) {
  return (
    <Route path={path || '*'} component={CmsView} />
  )
}

function App() {
  return (
    <div>
      <div>Header</div>
      <div>
        <CmsRoute />
      </div>
      <div>Footer</div>
    </div>)
}

// component that renders a route with specified component if data is coming back from server

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('app'))