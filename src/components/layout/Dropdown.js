import React from "react";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

const Dropdown = (props) => {
  // console.log(props.checkout);
  return (
    <div className="dropdown">
      <h1>Hello World</h1>
      <ul>
        {props.checkout.length > 0 ? (
          props.checkout.map((item, index) => {
            return <li>{item.title}</li>;
          })
        ) : (
          <li>no items</li>
        )}
      </ul>
      <Link class="btn btn-blue" to="/cart">
        Go To Checkout
      </Link>
    </div>
  );
};

export default Dropdown;
