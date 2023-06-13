import React from 'react'
import Dresses from '../dresses/Dresses'
import Shoes from '../shoes/Shoes'
import Tops from '../tops/Tops'
import Trousers from '../trousers/Trousers'
import './products.css'

const Products = () => {
  return (
    <section className='products'>
        <div className="products-wrapper">
            <Dresses/>
            <Tops/>
            <Shoes/>
            <Trousers/>
        </div>
    </section>
  )
}

export default Products