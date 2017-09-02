import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DefaultLayout from './DefaultLayout'

// todo modify header with helmet
// todo modify body className also with helmet?

class HomeView extends Component {
  componentDidMount() {
    console.log('component did mount homeview')
  }

  render() {
    const { layout, page, loading } = this.props
    const pageContent = page.content

    return (
      <DefaultLayout layout={layout} loading={loading}>
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
      </DefaultLayout>
    )
  }
}

export default HomeView