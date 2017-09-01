import React from 'react'

function Footer({ layout }) {
  const layoutContent = layout.content

  return (
    <footer className='section--themed'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 ta-center'>
            {layoutContent.footerAddress}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
