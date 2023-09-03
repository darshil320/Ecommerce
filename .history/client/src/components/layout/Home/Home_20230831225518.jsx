import React, { Fragment } from 'react'
import './Home.css';
import { CgMouse } from "react-icons/cg";
import Product from './Product';

const Home = () => {

  return (
    <Fragment>
      <div className="banner">
        <p>welcome to The DMC</p>
        <h1>Find amazing products below</h1>
        <a href="#container" className="">
          <button>
            scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className='homeHeading'>Featured Products</h2>
      <div className="container" id="container"></div>
      <Product/>
    </Fragment>
  );
}

export default Home