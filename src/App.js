import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


 import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import Body from "./components/pages/Body";
import Hair from "./components/pages/Hair";
import Cart from "./components/pages/Cart";
import Fragrance  from "./components/pages/Fragrance";
import Gifts from "./components/pages/Gifts";
import Kits from "./components/pages/Kits";
import Read from "./components/pages/Read";
import SkinCare from "./components/pages/SkinCare";
import Stores from "./components/pages/Stores";
import Login from "./components/pages/Login";




function App() {
  return (
   
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/SkinCare" element={<SkinCare />}/>
        <Route path="/Body" element={<Body />}/>
        <Route path="/Fragrance" element={<Fragrance />}/>
        <Route path="/Hair" element={<Hair />}/>
        <Route path="/Kits" element={<Kits />}/>
        <Route path="/Read" element={<Read />}/>
        <Route path="/Gifts" element={<Gifts />}/>
      </Routes>
    </Router>
   
  );
}

export default App;
