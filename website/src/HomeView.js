import React from 'react'

import { Link } from 'react-router-dom'

// todo modify header with helmet
// todo modify body className also with helmet?

function HomeView({ layout, page }) {
  const layoutContent = layout.content
  const pageContent = page.content

  return (
    <div>
      <div className='mobile-nav'>
        <nav className='nav-bar'>
        
        </nav>
      </div>
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

      <main>
        <section className='section section--full-height background-image-full overlay overlay--dark section--content-center section--thick-border'
          style={{ backgroundImage: pageContent.heroBackgroundImageUrl ? `url('http://cms.react-cms-rendering.local${pageContent.heroBackgroundImageUrl}')` : null }}>
          <div className='section__hero-content'>
            <h1>{pageContent.heroHeader}</h1>
            <p className='section__description'>{pageContent.heroDescription}</p>
            <Link className='button button--border--solid' to={pageContent.heroCtaUrl}>
              {pageContent.heroCtacaption}
            </Link>

          </div>
        </section>
      </main>

      <footer className='section--themed'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 ta-center'>
                    {layoutContent.footerAddress}
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default HomeView