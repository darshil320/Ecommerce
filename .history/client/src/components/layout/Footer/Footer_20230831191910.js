import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter"></div>
      <div className="rightFooter"></div>
    </footer>
  );
}

export default Footer