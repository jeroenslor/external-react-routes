import React from 'react'
import { Route } from 'react-router-dom'

import CmsView from './CmsView'

function CmsRoute({ path, templateMapping }) {
  return (
    <Route path={path || '*'} render={(props) => <CmsView templateMapping={templateMapping} {...props} />} /> // use render to avoid mount and unmount of cmsview
  )
}

export default CmsRoute