import React from 'react'
import { Route } from 'react-router-dom'

import CmsView from './CmsView'

function CmsRoute({ path, templateMapping }) {
  return (
    <Route path={path || '*'} component={(props) => <CmsView templateMapping={templateMapping} {...props} />} />
  )
}

export default CmsRoute