import React from 'react'

function FooView({ match, content: { foo } }) {
  console.log(match)
    return (
      <div>
        <h1>Foo template</h1>
        <div>some content: {foo}</div>
        <div>page param: {match.params.id}</div>
      </div>
    )
  }

  export default FooView