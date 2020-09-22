import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductState";

const Dropdown = () => {
  const context = useContext(ProductContext);
  return (
    <div className="dropdown">
      <h1>Hello World</h1>
      <ul>
        {context.checkout.length > 0 ? (
          context.checkout.map((item) => {
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
