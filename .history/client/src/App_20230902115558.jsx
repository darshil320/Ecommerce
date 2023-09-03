import './App.css';
import Header from './components/layout/Header/Header.js';
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader"
import { useEffect } from 'react';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import {getProduct} from '../../actions/productActions.js';

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
    <Header/>
    <Home/>
    <Footer/>
  </Router>
  );
}

export default App;
