import React from 'react'

function ProductGridItem({ product, currency }) {
  return (
    <a href={product.url} className='product-grid__item' style={{backgroundImage: `url('http://cms.react-cms-rendering.local${product.imageUrl}')`}}>
      <div className='product-grid__item__overlay'>
        <div className='product-grid__item__name'>{product.name}</div>
        <div className='product-grid__item__price'>{currency} {product.price}</div>
      </div>
    </a>
  )
}

export default ProductGridItem
