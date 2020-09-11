import React from "react";

export const ProductItems = (props) => {
  return (
    <div className="card">
      <img src={props.product.image} alt="" />
      <div className="container">
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>
        <p>{props.product.description}</p>
        <a href="#" className="cart-button">
          Add To Cart
        </a>
      </div>
    </div>
  );
};
