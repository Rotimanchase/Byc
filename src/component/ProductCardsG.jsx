import React from 'react'
import Product from './Product'

const ProductCardsG = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {Product.map((cards, index) => (
            <div className="col" key={`${index}`}>
              <Product product={cards} />
            </div>
          ))}
        </div>
        
        {/* Hover instructions */}
        <p className="text-center text-muted small mt-4">Hover over any card to see action buttons</p>
      </div>
    </div>
  )
}

export default ProductCardsG
