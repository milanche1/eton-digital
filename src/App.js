import React, { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Spinner from "./components/layout/Spinner";

const App = () => {
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getApi() {
      setLoading(true);

      const res = await axios.get(
        "https://my-json-server.typicode.com/brankostancevic/products/products"
      );
      setProducts(res.data);
      setLoading(false);
    })();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          {loading ? (
            <Spinner />
          ) : (
            <Switch>
              <Route
                exact
                component={() => <Products products={products} />}
                path="/"
              />
              <Route exact component={Checkout} path="/cart" />
            </Switch>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
