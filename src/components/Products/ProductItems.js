import React from "react";

export const ProductItems = (props) => {
  return (
    <div>
      <p>{props.product.title}</p>
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
    </div>
  );
};
