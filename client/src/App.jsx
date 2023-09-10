import './App.css';
import Header from './components/layout/Header/Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader"
import { useEffect } from 'react';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';
import Products from './components/Product/Products.jsx';
import Search from './components/Product/Search';
import Authentication from './components/User/Authentication';



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families:["Roboto","Open Sans","Rubik","Lato","Poppins"]
      }
    })
  }, [])
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetails  />}
        />
        <Route
          path="/products"
          element={<Products/>}
        />
        <Route
          path="/products/:keyword"
          element={<Products/>}
        />
        <Route
          path="/search"
          element={<Search/>}
        />
        <Route
          path="/login"
          element={<Authentication/>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
