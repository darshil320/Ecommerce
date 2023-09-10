import React from 'react'
import './Productcard.css'
import ReactStars from 'react-rating-stars-component'
import nike from "../../images/nike.png";
import { Link } from 'react-router-dom';
function Productcard({product}) {

const options = {
    color: "rgba(20,20,20,0.1)",
    value: product.ratings,
    activeCOlor: "tomato",
    edit: false,
    size: window.innerWidth < 600 ? 20 : 25,
    isHalf: true,
  };

  return (
    <Link class="containers" to={`/product/${product._id}`}>
      <div class="card">
        <div class="card-head">
          <img src={nike} alt="logo" class="card-logo" />
          <img
            src={product.images[0].url}
            className="product-img"
            alt={product.name}
          />
          <div class="product-detail">
            <h2>{product.name}</h2> {product.description}
          </div>
          <span class="back-text">FAS</span>
        </div>
        <div class="card-body">
          <div class="product-desc">
            <span class="product-title">
              {product.name}
              <span class="badge">New</span>
            </span>
            <span class="product-caption">{product.category}</span>
            <div className="product-rating">
              <ReactStars {...options} />
              <span>({product.numofReviews})</span>
            </div>
          </div>
          <div class="product-properties">
            <span class="product-size">
              <h4>Size</h4>
              <ul class="ul-size">
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">8</a>
                </li>
                <li>
                  <a href="#">9</a>
                </li>
                <li>
                  <a href="#" class="active">
                    10
                  </a>
                </li>
                <li>
                  <a href="#">11</a>
                </li>
              </ul>
            </span>
            <span class="product-color">
              <h4>Colour</h4>
              <ul class="ul-color">
                <li>
                  <a href="#" class="orange active"></a>
                </li>
                <li>
                  <a href="#" class="green"></a>
                </li>
                <li>
                  <a href="#" class="yellow"></a>
                </li>
              </ul>
            </span>
            <span class="product-price">
              <b>{`${product.price}$`}</b>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Productcard