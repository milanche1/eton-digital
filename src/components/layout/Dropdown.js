import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <h1>Hello World</h1>
      <Link class="btn btn-blue" to="/cart">
        Go To Checkout
      </Link>
    </div>
  );
};

export default Dropdown;
