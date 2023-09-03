import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import two from '../../../images/two.svg'
import './Footer.css'
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
        <a href="http://instagram.com/_darshil.04_">Instagram</a>
        <a href="https://www.linkedin.com/in/darshil-lashkari/">LinkedIn</a>
        <a href="https://github.com/darshil320">Github</a>
      </div>
    </footer>
  );
}

export default Footer