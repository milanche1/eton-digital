import React from "react";
import CheckoutItems from "./CheckoutItems";

export const Checkout = (props) => {
  console.log(props.checkout);
  return (
    <div>
      <h2 className="text-center">Your Cart</h2>
      {props.checkout.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};

export default Checkout;
