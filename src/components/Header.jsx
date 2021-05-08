import React from "react";
import {Link} from "react-router-dom";
import "../Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div class="overlay">
          <Link to ="/">
            <h1 className="text-center  mt-3 mb-4">Crypto-Tracker</h1>
          </Link>
          <h3>Track Your Crypto With Us </h3>
          <p>It will help you to track your favorite cryptocurrency 24 x 7 easily & smoothly!!</p>
          <Link exact to="/portfolio-tracker">
            <button 
            className="btn btn-danger btn-lg" 
            type="button">
              Portfolio Tracker
            </button>
          </Link>
        </div>
      </header>
      
    </div>
  );
};

export default Header;
