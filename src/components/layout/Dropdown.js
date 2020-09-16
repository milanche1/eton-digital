import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  console.log(props.checkout);
  return (
    <div className="dropdown">
      <h1>Hello World</h1>
      <ul>
        {props.checkout.length > 0 ? (
          props.checkout.map((item, index) => {
            return <li>{item}</li>;
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
