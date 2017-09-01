import React from 'react'

import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'
import SectionHeader from './SectionHeader'
import ProductGrid from './ProductGrid'

function ProductsView({ page, layout, globalization }) {
  const pageContent = page.content

  return (
    <div>
      <MobileNav />
      <Header layout={layout} />
      <SectionHeader title={page.content.pageTitle} />

      <section className='section'>
        <div className='container'>
          <nav className='nav-bar nav-bar--center nav-bar--air-bottom'>
            <a className='nav-link nav-link--black nav-link--active' href=''>All</a>
            <a className='nav-link nav-link--black' href=''>Clothing</a>
            <a className='nav-link nav-link--black' href=''>Instruments</a>
            <a className='nav-link nav-link--black' href=''>Accessories</a>
            <a className='nav-link nav-link--black' href=''>Other</a>
          </nav>
          <ProductGrid products={pageContent.featuredProducts} currency={pageContent.currency} />
        </div>
      </section>
      <Footer layout={layout} />
    </div >
  )
}

export default ProductsView
