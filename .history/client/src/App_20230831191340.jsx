
import './App.css';
import Header from './components/layout/Header/Header.js';
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader"
import { useEffect } from 'react';
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
    <Footer/>
  </Router>
  );
}

export default App;
