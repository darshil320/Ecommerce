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
    <Link className="containers" to={`/product/${product._id}`}>
      <div className="card">
        <div className="card-head">
          <img src={nike} alt="logo" className="card-logo" />
          <img
            src={product.images[0].url}
            className="product-img"
            alt={product.name}
          />
          <div className="product-detail">
            <h2>{product.name}</h2> {product.description}
          </div>
          <span className="back-text">FAS</span>
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              {product.name}
              <span className="badge">New</span>
            </span>
            <span className="product-caption">{product.category}</span>
            <div className="product-rating">
              <ReactStars {...options} />
              <span>({product.numofReviews})</span>
            </div>
          </div>
          <div className="product-properties">
            <span className="product-size">
              <h4>Size</h4>
              <ul className="ul-size">
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
                  <a href="#" className="active">
                    10
                  </a>
                </li>
                <li>
                  <a href="#">11</a>
                </li>
              </ul>
            </span>
            <span className="product-color">
              <h4>Colour</h4>
              <ul className="ul-color">
                <li>
                  <a href="#" className="orange active"></a>
                </li>
                <li>
                  <a href="#" className="green"></a>
                </li>
                <li>
                  <a href="#" className="yellow"></a>
                </li>
              </ul>
            </span>
            <span className="product-price">
              <b>{`${product.price}$`}</b>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Productcard