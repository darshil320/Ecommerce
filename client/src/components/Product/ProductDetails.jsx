import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Rating } from "@mui/material";
import ReviewCard from "./ReviewCard";
import {useAlert} from "react-alert";

function ProductDetails({}) {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );


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
        <h2>Loading...</h2>
      ) : (
        <Fragment>
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
                <h1>{`$${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input type="number" value="1" />
                    <button>+</button>
                    <button className="addtocart">Add to cart</button>
                  </div>
                  <p>
                    Status:{" "}
                    <b
                      className={product.stock < 1 ? "redColor" : "greenColor"}
                    >
                      {product.stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p>
                </div>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
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
