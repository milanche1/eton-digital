import React, { useState } from "react";
import { ProductItems } from "./ProductItems";

const Products = (props) => {
  const [checkout, setCheckout] = useState([]);

  const checkoutFun = (product) => {
    if (checkout.indexOf(product.id) === -1) {
      setCheckout((oldArr) => [...oldArr, product.title]);
      sendDataState();
    } else {
      return 0;
    }
  };

  const sendDataState = () => {
    props.addToState(checkout);
  };

  return (
    <div style={productStyle} onChange={sendDataState}>
      {props.products.map((product) => {
        return (
          <ProductItems
            checkoutFun={checkoutFun}
            id={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

const productStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
  marginTop: "0.7rem",
};

export default Products;
