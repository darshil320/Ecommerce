import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import six from "../../../six.svg"
import { FaUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";


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
      logoHoverColor="#ffffff"
      link1Size="1.8rem"
      link1Color="#121212"
      link1Padding="1vmax"
      link1Family="Lato"
      link1ColorHover="#edf2f4"
      nav2justifyContent="flex-end"
      link1Margin="1vmax"
      link2Margin="0"
      link3Margin="0"
      link4Margin="1vmax"
      nav3justifyContent="flex-start"
      link1Text="Home"
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