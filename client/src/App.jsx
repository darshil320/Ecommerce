import './App.css';
import Header from './components/layout/Header/Header.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Profile from './components/User/Profile';
import { loadUser } from './actions/userAction';
import store from "./store";
import UpdateProfile from './components/User/UpdateProfile'
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword.jsx";
import Cart from './components/Cart/Cart';



function App() {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families:["Roboto","Open Sans","Rubik","Lato","Poppins"]
      }
    })
      store.dispatch(loadUser());
  }, [])
  

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
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
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
