import React  from 'react';
import {Link} from 'react-router-dom';
import Home from "./pages/Home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'

import { useLocation } from 'react-router-dom'
//import Card from "./pages/Cards/Card";

import "./CSS/nav.css"

function Navbar() {
  const location = useLocation();
  

    return (
  <div>
    { location.pathname === '/' && 
      <div id="header">
        <div className="header-content">Enjoy complimentary shipping on all Hong Kong and Macau orders. Due to a high volume of orders, deliveries may take longer than usual to arrive.&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faPlus} /></div>
      </div>
    }
  <div id="main1">
    <div id="left">
    <Link className="navbar-brand text-dark" to="/">Home</Link>
    <Link className="navbar-brand text-dark" to="/SkinCare">SkinCare</Link>
    <Link className="navbar-brand text-dark" to="/Body">Body</Link>
    <Link className="navbar-brand text-dark" to="/Hair">Hair</Link>
    <Link className="navbar-brand text-dark" to="/Fragrance">Fragrance</Link>
    <Link className="navbar-brand text-dark" to="/Kits">Kits </Link>
    <Link className="navbar-brand text-dark" to="/Gifts">Gifts</Link>
    <Link className="navbar-brand text-dark" to="/Read">Read</Link>
    <Link className="navbar-brand text-dark" to="/Stores">Stores</Link>
    <FontAwesomeIcon icon={faSearch} />
  &nbsp; &nbsp;
  <Link className="navbar-brand text-dark" to="/">Close</Link>
  
  </div>
  <div id="right">
 
  <Link className="navbar-brand text-dark" to="/Cart">Cart</Link>
  <Link className="navbar-brand text-dark" to="/Login">Login</Link>
  
  
  </div>
  
  </div>
  
  
 

  
</div>
    );
}

export default Navbar;
