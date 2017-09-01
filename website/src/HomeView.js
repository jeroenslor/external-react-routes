import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'

// todo modify header with helmet
// todo modify body className also with helmet?

function HomeView({ layout, page }) {
  const pageContent = page.content

  return (
    <div>
      <MobileNav />
      <Header layout={layout} />

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

      <Footer layout={layout} />
    </div>
  )
}

export default HomeView