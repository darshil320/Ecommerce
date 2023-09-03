import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import six from "../../six.svg"

const Header = () => {
  return (
    <ReactNavbar
      logo={six}
      burgerColor="#212529"
      navColor1="#ced4da"
      navColor2="#adb5bd"
      navColor3="#6c757d"
      navColor4="#495057"
      burgerColorHover="#2b2d42"
      logoWidth="100%"
      logoHoverColor="#4a4e69"
      link1Size="1.2rem"
      link1Color="#121212"
      link1Padding="1vmax"
      link1ColorHover="#ee6c4d"
      nav2justifyContent="flex-end"
      link1Margin="1vmax"
      link2Margin="0"
      link3Margin="0"
      link4Margin="1vmax"
      nav3justifyContent="flex-start"
      link1Text="Home"
      link1Family="sans-serif"
      link2Text="Products"
      link3Text="About Us"
      link4Text="Contact Us"
      nav4justifyContent="flex-start"
      searchIconMargin="0.5vmax"
      cartIconMargin="1vmax"
      profileIconMargin="0.5vmax"
      searchIconColor="#121212"
      cartIconColor="#121212"
      profileIconColor="#121212"
      searchIconColorHover="crimson"
      cartIconColorHover="crimson"
      profileIconColorHover="crimson"
    />
  );
}

export default Header;