import React,{Fragment,useEffect,useState} from 'react'
import './Products.css'
import { useSelector,useDispatch } from 'react-redux'
import { clearErrors, getProduct  } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import Productcard from '../Home/Productcard'
import { useParams } from 'react-router-dom'
import Pagination from "react-js-pagination";
import { Slider, Typography } from '@mui/material' 
import {useAlert} from 'react-alert'
import MetaData from '../layout/MetaData'
import BackgroundVideo from '../layout/bgVideo/BackgroundVideo'
import { FaArrowDownLong } from 'react-icons/fa6'
import { useRef } from "react";

const categories = [
  "laptop",
  "shoes",
  "Bottom",
  "Tops",
  "Camera",
  "SmartPhones",
];


const Products = () => {  
  const alert = useAlert();
  const productsSectionRef = useRef();
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  useEffect(() => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView();
    }
  }, [products]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (productsSectionRef.current) {
       window.scrollTo(0, productsSectionRef.current.offsetTop);
     }
    dispatch(getProduct(keyword, currentPage, price, category,ratings));
  }, [dispatch, keyword, currentPage, price, category,ratings,error,alert]);
  
   const priceHandler = (event, newPrice) => {
     setPrice(newPrice);
   };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);

  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="allproducts">
          <MetaData title="Products - DMC" />
          <div className="heroproducts" id="hero">
            <BackgroundVideo bgname="sitt" topPosition="0">
              <div className="banner">
                <p className="products-text">welcome to TheHouseOfDMC.</p>
                <h1 className="products-text2">Find amazing products below</h1>
                <a href="#products" className="scroll">
                  <button className="scroll-btn">
                    scroll <FaArrowDownLong />
                  </button>
                </a>
              </div>
            </BackgroundVideo>
          </div>
          <div className="ProductsPage" ref={productsSectionRef}>
            <h2 className="productsHeading" id="products">
              Products
            </h2>

            <div className="filterBox">
              <div className="filter">
                <Typography sx={{ color: "#A99DFD", p: 3, fontSize: "19px" }}>
                  Price
                </Typography>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={25000}
                  sx={{
                    color: "#A99DFD",
                    "& .MuiSlider-rail": {
                      backgroundColor: "#A99DFD",
                    },
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#A99DFD",
                    },
                  }}
                />
              </div>

              <Typography sx={{ color: "#A99DFD", p: 3, fontSize: "19px" }}>
                Categories
              </Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <div className="filter">
                <Typography
                  sx={{ color: "#A99DFD", p: 2, fontSize: "20px" }}
                  component="legend"
                >
                  Ratings
                </Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                  sx={{
                    color: "#A99DFD",
                    "& .MuiSlider-rail": {
                      backgroundColor: "#A99DFD",
                    },
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#A99DFD",
                    },
                  }}
                />
              </div>
            </div>
            <div className="products">
              {products &&
                products.map((product) => (
                  <Productcard key={product._id} product={product} />
                ))}
            </div>

            {resultPerPage < filteredProductsCount && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Products




