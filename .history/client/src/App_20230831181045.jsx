
import './App.css';
import Header from './components/layout/Header.js';
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader"
function App() {
  return (
  <Router>
    <Header/>
  </Router>
  );
}

export default App;
