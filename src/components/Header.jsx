import React from "react";
import {Link} from "react-router-dom";
import "../Header.css";

const Header = () => {
  return (
    <div>
      <Link to ="/">
        <header>
          <div class="overlay">
            <h1 className="text-center  mt-3 mb-4">Crypto-Tracker</h1>
            <h3>Track Your Crypto With Us </h3>
            <p>It will help you to track your favorite cryptocurrency 24 x 7 easily & smoothly!! </p>
          </div>
        </header>
      </Link>
    </div>
  );
};

export default Header;
