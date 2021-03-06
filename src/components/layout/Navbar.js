import React, { useState } from "react";
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
      <i
        style={{ cursor: "pointer", marginLeft: "30px", marginRight: "25px" }}
        onClick={() => setOpen(!open)}
        className="fas fa-shopping-cart fa-2x"
      ></i>
      {open && props.children}
    </nav>
  );
};

export default Navbar;
