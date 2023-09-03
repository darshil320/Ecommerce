import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const options = {
    color:"rgba(20,20,20,0.1)",
    value:3.5,
    activeCOlor:"tomato",
    edit:false,
    size:window.innerWidth < 600 ? 20 : 25,
    isHalf:true,
    color:"red",
}
const Product = ({Product}) => {
  return (
    <Link className='productCard' to={`/product/${Product._id}`}>
      <div className="productCard">
        <img src={Product.images[0].url} alt="product" />
        <p>{Product.name}</p>
        <div>
            <ReactStars
            {...options}
            />
        </div>
        <p>{Product.price}</p>
      </div>
    
    </Link>
  )
}

export default Product