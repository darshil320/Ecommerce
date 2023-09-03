import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({Product}) => {
  return (
    <Link className='productCard' to={`/product/${Product._id}`}>
      <div className="productCard">
        <img src={Product.image} alt="product" />
        <p>{Product.name}</p>
        <p>{Product.price}</p>
      </div>
    
    </Link>
  )
}

export default Product