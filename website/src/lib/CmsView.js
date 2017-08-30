import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { getViewData } from './cmsApi'

class CmsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: null,
      content: null,
      loading: true,
      error: false
    }
  }
  getViewData(match) {
    // need to support nested routes (non-hierarchical params) without reloading the cms route data.
    // params chould be querystring or /fo
    // add support for named params?
    // for querystrings no backend call needs to be made? just check location and get data custom

    // use matchPath if routes is set to detect if it's a nested route, if it is don't get data
    // als use matchPath or nested route the get params to the components?  
    this.setState({ loading: true })
    getViewData(match.url)
      .then(({ route, content }) => {
        console.info('received view data', route, content)
        this.setState({ loading: false, success: true, error: false, route, content })
      })
      .catch(error => {
        console.error(error)
        this.setState({ loading: false, error: true })
      })
  }
  componentWillReceiveProps({ match }) {
    this.getViewData(match)
  }
  componentDidMount() {
    this.getViewData(this.props.match)
  }
  render() {
    if (this.state.loading) {
      return <div>Loading ...</div>
    }

    const elementByTemplate = this.props.templateMapping[this.state.route.template]
    if (!elementByTemplate) {
      throw Error(`component not found for template ${this.state.route.template}`)
    }

    const content = this.state.content
    return <Route path={this.state.route.pattern} component={(props) => React.createElement(elementByTemplate, { ...props, content })} /> // use route to add support for params in view component
  }
}

export default CmsView