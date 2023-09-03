import React, { Fragment } from 'react'
import './Home.css';
import { CgMouse } from "react-icons/cg";
import Product from './Product';

const product = [
  {
    id: 1,
    name: "Product 1",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 29.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 9.99,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 39.99,
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 49.99,
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 14.99,
  },
  {
    id: 7,
    name: "Product 7",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 24.99,
  },
  {
    id: 8,
    name: "Product 8",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 34.99,
  },
  {
    id: 9,
    name: "Product 9",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 8.99,
  },
  {
    id: 10,
    name: "Product 10",
    image: "https://source.unsplash.com/random/200x150/?product",
    price: 59.99,
  },
];


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
      <Product product = {product}/>
    </Fragment>
  );
}

export default Home