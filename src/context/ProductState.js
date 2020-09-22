import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const initialState = {
    products: [],
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/brankostancevic/products/products"
    );
    console.log("console reached");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  return (
    <ProductContext.Provider value={{ products: state.products, getProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};
