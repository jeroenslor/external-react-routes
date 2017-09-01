import React from 'react'

function Header({ layout }) {
  const layoutContent = layout.content

  return (
    <header className='header'>
      <div className='logo'>
        {
          layoutContent.siteLogoUrl
            ? (<div className='nav-link--home'>
              <img className='logo-image' src={layoutContent.siteLogoUrl} alt={layoutContent.siteName} />
            </div>)
            : <a className='nav-link nav-link--home nav-link--home__text logo-text' href='/'>{layoutContent.siteName}</a>
        }
      </div>
      <nav className='nav-bar top-nav'>

      </nav>
      <div className='mobile-nav-handler'>
        <div className='hamburger lines' id='toggle-nav'>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
