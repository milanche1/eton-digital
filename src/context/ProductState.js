import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const initialState = {
    products: [],
    checkout: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    setLoading();
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

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        checkout: state.checkout,
        loading: state.loading,
        getProducts,
        checkoutProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
