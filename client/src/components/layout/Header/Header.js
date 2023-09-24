import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import six from "../../../images/six.svg"
import { FaUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <ReactNavbar
      logo={six}
      burgerColor="#6168f8"
      navColor1="#ccdcff"
      navColor2="#b3beff"
      navColor3="#9a99f2"
      navColor4="rgb(142, 135, 240)"
      burgerColorHover="#d2ff85"
      logoWidth="100%"
      logoHoverColor="#6168f8"
      link1Size="1.8rem"
      link1Color="#121212"
      link1Padding="1vmax"
      link1Family="Lato"
      link1ColorHover="#edf2f4"
      nav2justifyContent="flex-end"
      link1Margin="1vmax"
      link2Margin="0"
      link3Margin="0"
      link4Margin="0"
      nav3justifyContent="flex-start"
      link1Text="HOME"
      link2Text="PRODUCTS"
      link3Text="ABOUT US"
      link4Text="CONTACT US"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      profileIconUrl="/login"
      nav4justifyContent="flex-start"
      searchIconMargin="0.5vmax"
      cartIconMargin="1vmax"
      profileIconMargin="0.5vmax"
      searchIconColor="#121212"
      cartIconColor="#121212"
      profileIconColor="#121212"
      searchIconColorHover="#edf2f4"
      cartIconColorHover="#edf2f4"
      profileIconColorHover="#edf2f4"
      searchIcon={true}
      SearchIconElement={FaSearch}
      profileIcon={true}
      ProfileIconElement={FaUserCircle}
      profileIconSize="2vmax"
      cartIcon={true}
      CartIconElement={FaShoppingCart}
    />
  );
}

export default Header;