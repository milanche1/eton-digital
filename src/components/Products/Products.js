import React from "react";
import { ProductItems } from "./ProductItems";

const Products = (props) => {
  return (
    <div style={productStyle}>
      {props.products.map((product) => {
        return <ProductItems product={product} />;
      })}
    </div>
  );
};

const productStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Products;
