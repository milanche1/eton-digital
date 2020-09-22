import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductState";

export const ProductItems = (props) => {
  const context = useContext(ProductContext);
  return (
    <div className="card">
      <img src={props.product.image} alt="" />
      <div className="box">
        <h4>{props.product.title}</h4>
        <p>{props.product.price}$</p>
        <p>{props.product.description}</p>
        <div className="button-area">
          <a
            onClick={(e) => {
              e.preventDefault();
              context.checkoutProduct(props.product);
            }}
            href="#"
            className="btn btn-purple"
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};
