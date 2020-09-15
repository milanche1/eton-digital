import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Spinner from "./components/layout/Spinner";
import Dropdown from "./components/layout/Dropdown";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkout, setCheckout] = useState([]);

  const addToState = (state) => {
    state.map((item) => {
      setCheckout((oldArr) => [...oldArr, item]);
    });
  };

  console.log(checkout);

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
        <Navbar>
          <Dropdown checkout={checkout} />
        </Navbar>
        <div className="container">
          {loading ? (
            <Spinner />
          ) : (
            <Switch>
              <Route
                exact
                component={() => (
                  <Products addToState={addToState} products={products} />
                )}
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
