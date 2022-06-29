import React from 'react'

function ProductList({ products }) {
  return (
    <ul>
        {products.map(theProduct => <li key={theProduct.key}>{theProduct.title}</li>)}
    </ul>
  )
}

export default ProductList