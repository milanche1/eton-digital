import React, { useState } from "react";
import Checkout from "../Checkout/Checkout";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div id="shop">
        <Link to="/" style={{ cursor: "pointer", fontSize: "18px" }}>
          Shop
        </Link>
      </div>
      {/* <Link
        to="/cart"
        style={{ cursor: "pointer", marginLeft: "30px", marginRight: "25px" }}
      > */}
      <i
        style={{ cursor: "pointer", marginLeft: "30px", marginRight: "25px" }}
        onClick={() => setOpen(!open)}
        class="fas fa-shopping-cart fa-2x"
      ></i>
      {open && props.children}
      {/* </Link> */}
    </nav>
  );
};

export default Navbar;
