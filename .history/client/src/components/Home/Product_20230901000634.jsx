import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import other from '../../images/other.svg'

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
      <div className="productCard" key={key}>
        <img
          src="https://images.unsplash.com/photo-1566678124687-0cf350e352c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTQ2MDU1OHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt={product.name}
        />

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