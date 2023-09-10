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
import { grey, purple } from '@mui/material/colors'


const categories = [
  "laptop",
  "shoes",
  "Bottom",
  "Tops",
  "Montitor",
  "Camera",
  "SmartPhones",
];


const Products = () => {  
  const alert = useAlert();
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

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  }
  

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    
    dispatch(getProduct(keyword, currentPage, price, category,ratings));
  }, [dispatch, keyword, currentPage, price, category,ratings,error,alert]);
  
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);

  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Products - DMC" />
          <h2 className="productsHeading">Products</h2>

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
        </Fragment>
      )}
    </Fragment>
  );
}
export default Products




