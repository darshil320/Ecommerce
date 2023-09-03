import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import './Home.css'

const Product = ({product}) => {

  const options = {
    color: "rgba(20,20,20,0.1)",
    value: product.ratings,
    activeCOlor: "tomato",
    edit: false,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };

  return (
    <Link className="productCard">
      <div className="productCard">
        <img src={product.images[0].url} alt={product.name} />

        <p>{product.name}</p>
        <div>
          <ReactStars {...options} />
          <span>({product.numofReviews})</span>
        </div>
        <p>{`$${product.price}`}</p>
      </div>
    </Link>
  );
}

export default Product