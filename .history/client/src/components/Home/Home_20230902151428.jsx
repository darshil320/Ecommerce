import React, { Fragment, useEffect } from "react";
import './Home.css';
import { CgMouse } from "react-icons/cg";
import Product from './Product';
import MetaData from '../layout/Metadata';
import {useSelector, useDispatch} from 'react-redux';

import { getProduct } from '../../actions/productAction';




const Home = () => {
const dispatch = useDispatch();
const {loading, products, error, productsCount} = useSelector((state) => state.products);

useEffect(() => {
  dispatch(getProduct());

},[dispatch])

  return (
    <Fragment>
      <MetaData title="DMC" />
      <div className="banner">
        <p>welcome to The DMC</p>
        <h1>Find amazing products below</h1>
        <a href="#container" className="">
          <button>
            scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container"></div>
      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <Product product={product} />
          ))}
      </div>
    </Fragment>
  );
}

export default Home