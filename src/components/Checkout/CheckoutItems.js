import React from "react";

const CheckoutItems = (props) => {
  return (
    <div>
      <ul>
        <li>{props.item.title}</li>
      </ul>
    </div>
  );
};

export default CheckoutItems;
