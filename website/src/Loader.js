import React from 'react'

function Loader({loading}) {
  return loading ? <div className='loader'></div> : null
}

export default Loader