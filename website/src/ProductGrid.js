import React from 'react'

import ProductGridItem from './ProductGridItem'

function ProductGrid({ products, currency }) {
  return (
    <div className='product-grid'>
      {products.map(product => <ProductGridItem product={product} currency={currency} key={product.name} />)}
    </div >
  )
}

export default ProductGrid