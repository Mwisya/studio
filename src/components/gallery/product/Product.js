import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className='product-wrapper'>
        <div className="product-left"></div>
        <div className="product-right">
            <p>Eclusive description of the product on sale goes here</p>
            <p>See similar products</p>
            <div className="price">
                <span className='price-now'>Ksh 7500</span>
            </div>
            <button>Add to Cart</button>
            <div className="payments">
                <p>Mpesa</p>
                <p>KCB</p>
                <p>Equity</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product