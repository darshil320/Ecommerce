import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import other from '../../../images/other.svg'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1><img src={other} alt="" srcset="" /></h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Darshil lashkari</p>
      </div>
      <div className="rightFooter"></div>
    </footer>
  );
}

export default Footer