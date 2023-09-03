import React, { Fragment } from 'react'
import './Home.css';
import { FaMouse } from "react-icons/fa";
const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>welcome to The DMC</p>
        <h1>Find amazing products below</h1>
        <a href="#container" className="">
          <button>
            scroll <FaMouse />
          </button>
        </a>
      </div>
    </Fragment>
  );
}

export default Home