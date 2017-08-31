import React from 'react'

import { Link } from 'react-router-dom'

function HomeView({ content }) {
  return (
    <section className="section section--full-height background-image-full overlay overlay--dark section--content-center section--thick-border"
      style={{backgroundImage: content.heroBackgroundImageUrl ? `url('${content.heroBackgroundImageUrl}')` : null}}>
      <div className="section__hero-content">
        <h1>{content.heroHeader}</h1>
        <p className="section__description">{content.heroDescription}</p>
        <Link className='class="button button--border--solid"' to={content.heroCtaUrl}>
          {content.heroCtacaption}
        </Link>

      </div>
    </section>
    )
}

export default HomeView