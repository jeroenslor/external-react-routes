import React from 'react'

import { Link } from 'react-router-dom'

function HomeView({ content: { foo } }) {
    return (
      <div>
        <h1>Home template</h1>
        <div>some content: {foo}</div>
        <Link to='/foo'>go to foo</Link>
      </div>
    )
  }

  export default HomeView