import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import twoblack from '../../../images/twoblack.svg'
import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftFooter">
        <div className="container">
          <div className="left-top">
            <a href="#hero">
              <button>
                <h1>↑</h1>
              </button>
            </a>
          </div>
          <div className="left-text">
            <div className="socials">
              <a href="/products"> Instagram | Dribbble | Linked In</a>
            </div>

            <h5>
              Shipping <span id="star">✲</span> worldwide.
            </h5>
            <h5> Based in Surat.</h5>
          </div>
        </div>
        <h4>Download our App</h4>
        <p>Download app for Android and IOS</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <img src={twoblack} />
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Darshil lashkari</p>
      </div>
      <div className="rightFooter">
        <div className="container">
          <div className="list-group">
            <ul className="list">
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="list-group">
            <ul className="list">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Exchange Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Place Return</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
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
      </div>
    </footer>
  );
}

export default Footer