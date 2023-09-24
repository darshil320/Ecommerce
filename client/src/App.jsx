import { useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header.js';
import { BrowserRouter as Router, Routes, Route, Navigate,Switch } from "react-router-dom";
import WebFont from "webfontloader"
import { useEffect } from 'react';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';
import Products from './components/Product/Products.jsx';
import Search from './components/Product/Search';
import Authentication from './components/User/Authentication';
import { useSelector } from 'react-redux';
import UserOptions from './components/layout/Header/UserOptions';
import axios from 'axios';
import Profile from './components/User/Profile';
import { loadUser } from './actions/userAction';
import store from "./store";
import UpdateProfile from './components/User/UpdateProfile'
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from './components/Cart/Cart';
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from './components/Cart/ConfirmOrder';
import Payment from './components/Cart/Payment.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails.jsx";


function App() {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);

  }

  useEffect(() => {
    WebFont.load({
      google: {
        families:["Roboto","Open Sans","Rubik","Lato","Poppins"]
      }
    })
      store.dispatch(loadUser());

      getStripeApiKey();
  }, [])
  window.addEventListener("contextmenu", (e) => e.preventDefault());
useEffect(() => {
  const cursor = document.getElementById("cursor");
  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  const updateCursor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const loop = () => {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.transform = `translate3d(${
      cursorX - cursor.clientWidth / 2
    }px, ${cursorY - cursor.clientHeight / 2}px, 0)`;

    requestAnimationFrame(loop);
  };

  const changeColorOnHover = (e) => {
    if (e.target.classList.contains("hover-target")) {
      cursor.style.backgroundColor = "#d2ff85";
    } else {
      cursor.style.backgroundColor = "#7B68EE";
    }
  };

  window.addEventListener("mousemove", updateCursor);
  window.addEventListener("mouseover", changeColorOnHover);
  loop();

  return () => {
    window.removeEventListener("mousemove", updateCursor);
    window.removeEventListener("mouseover", changeColorOnHover);
  };
}, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <div id="cursor"></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route
          path="/account"
          element={
            !loading &&
            (isAuthenticated ? <Profile /> : <Navigate to="/login" />)
          }
        />
        <Route
          path="/me/update"
          element={
            !loading &&
            (isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" />)
          }
        />
        <Route
          path="/password/update"
          element={
            !loading &&
            (isAuthenticated ? <UpdatePassword /> : <Navigate to="/login" />)
          }
        />
        <Route
          path="/login"
          element={
            !loading &&
            (isAuthenticated ? <Navigate to="/account" /> : <Authentication />)
          }
        />
        <Route
          path="/shipping"
          element={
            !loading &&
            (isAuthenticated === false ? (
              <Navigate to="/account" />
            ) : (
              <Shipping />
            ))
          }
        />
        <Route
          path="/order/confirm"
          element={
            !loading &&
            (isAuthenticated === false ? (
              <Navigate to="/account" />
            ) : (
              <ConfirmOrder />
            ))
          }
        />
        <Route
          path="/order/:id"
          element={
            !loading &&
            (isAuthenticated === false ? (
              <Navigate to="/account" />
            ) : (
              <OrderDetails />
            ))
          }
        />
        <Route
          path="/orders"
          element={
            !loading &&
            (isAuthenticated === false ? (
              <Navigate to="/account" />
            ) : (
              <MyOrders />
            ))
          }
        />

        <Route
          path="/process/payment"
          element={
            !loading &&
            (isAuthenticated ? (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            ) : (
              <Navigate to="/account" />
            ))
          }
        />
        <Route
          path="/success"
          element={
            !loading &&
            (isAuthenticated === false ? (
              <Navigate to="/account" />
            ) : (
              <OrderSuccess />
            ))
          }
        />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
