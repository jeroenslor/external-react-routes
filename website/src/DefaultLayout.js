import React from 'react'

import Header from './Header'
import Footer from './Footer'
import MobileNav from './MobileNav'
import Loader from './Loader'

function DefaultLayout({ children, layout, loading }) {
  return (
    <div>
      <Loader loading={loading} />
      <MobileNav />
      <Header layout={layout} />

      <main>
        {children}
      </main>

      <Footer layout={layout} />
    </div>
  )
}

export default DefaultLayout
