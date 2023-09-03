import React, { Fragment } from 'react'
import { CgMouse } from "react-icons/all";
const Home = () => {
  return (
    <Fragment>
         <div className="banner">
            <p>welcome to The DMC</p>
            <h1>Find amazing products below</h1>
            <a href=""#container" className="btn-banner">
                <button>
                    scroll <CgMouse/>
                </button>
            </a>
         </div>
    </Fragment>
  )
}

export default Home