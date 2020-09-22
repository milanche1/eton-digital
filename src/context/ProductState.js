import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const initialState = {
    products: [],
    checkout: [],
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/brankostancevic/products/products"
    );
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  const checkoutProduct = (id) => {
    dispatch({
      type: "CHECKOUT_PRODUCT",
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        checkout: state.checkout,
        getProducts,
        checkoutProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
