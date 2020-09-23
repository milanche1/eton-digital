import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductState";
import { ProductItems } from "./ProductItems";

const Products = () => {
  const context = useContext(ProductContext);

  useEffect(() => {
    context.getProducts();
  }, []);

  return (
    <div style={productStyle}>
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
