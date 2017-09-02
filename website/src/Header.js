import React from 'react'
import { Link } from 'react-router-dom'

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
            : <Link className='nav-link nav-link--home nav-link--home__text logo-text' to='/'>{layoutContent.siteName}</Link>
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
