import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductState";
import { ProductItems } from "./ProductItems";

const Products = (props) => {
  const [checkout, setCheckout] = useState([]);
  const context = useContext(ProductContext);

  useEffect(() => {
    context.getProducts();
  }, []);

  const sendDataState = () => {
    props.addToState(checkout);
  };
  return (
    <div style={productStyle} onChange={sendDataState}>
      {context.products.map((product) => {
        return <ProductItems id={product.id} product={product} />;
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
