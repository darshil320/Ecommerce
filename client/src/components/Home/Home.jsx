import React, { Fragment, useEffect } from "react";
import './Home.css';
import { FaArrowDownLong } from "react-icons/fa6";
import MetaData from '../layout/MetaData.js';
import {useSelector, useDispatch} from 'react-redux';
import  BackgroundVideo  from "../layout/bgVideo/BackgroundVideo";
import { clearErrors, getProduct } from '../../actions/productAction';
import Loader from "../layout/Loader/Loader";
import Productcard from "./Productcard";
import {useAlert} from "react-alert";





const Home = () => {

const alert = useAlert();  
const dispatch = useDispatch();
const {loading, products, error} = useSelector((state) => state.products);

useEffect(() => {
   if (error) {
     alert.error(error);
     dispatch(clearErrors());
   }
  dispatch(getProduct());
},[dispatch,error,alert])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="DMC" />
          <BackgroundVideo>
            <div className="banner" id="hero">
              <p className="gradient-text">welcome to The DMC</p>
              <h1 className="gradient-text2">Find amazing products below</h1>
              <a href="#container" className="scroll">
                <button className="scroll-btn">
                  scroll <FaArrowDownLong />
                </button>
              </a>
            </div>
          </BackgroundVideo>
          <div className="homepage">

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {/* {products &&
              products.map((product) => <Product product={product} />)} */}
            {products &&
              products.map((product) => <Productcard product={product} />)}
          </div>
              </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home