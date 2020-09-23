import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductState";

export const Checkout = () => {
  const context = useContext(ProductContext);
  let val = 0;
  return (
    <div>
      <h2 className="text-center">Your Cart</h2>
      {context.checkout.map((item) => {
        val += item.price;
        return (
          <li className="d-flex justify-content-start">
            <img
              src={item.image}
              alt="img"
              style={{ width: "100px", borderRadius: "5px" }}
            />
            {item.title}
            <a href="#" onClick={() => context.removeItem(item.id)}>
              Remove
            </a>
          </li>
        );
      })}
      <h3>Total {val}</h3>
    </div>
  );
};

export default Checkout;
