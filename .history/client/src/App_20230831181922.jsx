
import './App.css';
import Header from './components/layout/Header.js';
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
  
    return () => {
      second
    }
  }, [third])
  

  return (
  <Router>
    <Header/>
  </Router>
  );
}

export default App;
