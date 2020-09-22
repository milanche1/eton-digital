import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductState";
import CheckoutItems from "./CheckoutItems";

export const Checkout = () => {
  const context = useContext(ProductContext);
  return (
    <div>
      <h2 className="text-center">Your Cart</h2>
      {context.checkout.map((item) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
};

export default Checkout;
