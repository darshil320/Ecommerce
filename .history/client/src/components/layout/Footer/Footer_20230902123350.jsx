import React from 'react'
import playStore from "../../../../../images/playStore.png";
import appStore from "../../../../../images/Appstore.png";
import two from '../../../images/two.svg'
import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>
          <img src={two} />
        </h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Darshil lashkari</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <div className="links">
          <a href="http://instagram.com/_darshil.04_">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/darshil-lashkari/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/darshil320">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer