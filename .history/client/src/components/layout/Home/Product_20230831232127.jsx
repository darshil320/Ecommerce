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
    
}
const Product = ({product,key}) => {
  return (
    <Link className="productCard">
      <div className="productCard" key={key
      }>
        <img alt="product" />
        <p>{product.name}</p>
        <div>
          <ReactStars {...options} />
          <span>(288 Reviews)</span>
        </div>
        <p>{product.price}</p>
      </div>
    </Link>
  );
}

export default Product