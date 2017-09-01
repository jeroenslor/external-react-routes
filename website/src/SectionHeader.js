import React from 'react'

function SectionHeader({ title }) {
  return (
    <section className='section section--themed section--header section--content-center-bottom'>
      <div className='section__hero-content'>
        <h1 className='no-air'>{title}</h1>
      </div>
    </section>
  )
}

export default SectionHeader
