import React, { Component } from 'react'

import DefaultLayout from './DefaultLayout'
import SectionHeader from './SectionHeader'
import ProductGrid from './ProductGrid'

class ProductsView extends Component {
  componentDidMount() {
    console.log('component did mount productsview')
  }

  render() {
    const { page, layout, globalization, loading } = this.props
    const pageContent = page.content

    return (
      <DefaultLayout layout={layout} loading={loading}>
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
      </DefaultLayout>
    )
  }
}

export default ProductsView
