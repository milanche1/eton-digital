import React from "react";
import Checkout from "../Checkout/Checkout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="shop">
        <Link to="/" style={{ cursor: "pointer" }}>
          Shop
        </Link>
      </div>
      <Link to="/cart" style={{ cursor: "pointer" }}>
        <i class="fas fa-shopping-cart"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
