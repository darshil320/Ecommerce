import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Rating } from "@mui/material";
import ReviewCard from "./ReviewCard";
import {useAlert} from "react-alert";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";

function ProductDetails() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    let qty = quantity + 1;
    if (qty >= product.stock) return;
    setQuantity(qty);
  }
  const decreaseQuantity = () => {
    let qty = quantity - 1;
    if (qty <= 0) return;
    setQuantity(qty);
  }

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added to Cart");
  
  }

  useEffect(() => {
    dispatch(getProductDetails(id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  
  }, [dispatch, id,error,alert]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} - DMC`} />
          <div className="ProductDetails">
            <div className="carousel">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
                <p> {product.category}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating
                  value={product.ratings}
                  readOnly
                  size="small"
                  precision={0.5}
                />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numofReviews} Reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>MRP : {`$${product.price}.00`}</h1>
                <p>incl. of taxes</p>
                <p>(Also includes all applicable duties)</p>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input
                      readOnly
                      type="number"
                      className="ProductsInput"
                      value={quantity}
                    />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    className="addtocart"
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Bag
                  </button>
                </div>
                <p>
                  Status:{" "}
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">Write a Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductDetails;
