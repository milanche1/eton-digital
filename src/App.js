import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Spinner from "./components/layout/Spinner";
import Dropdown from "./components/layout/Dropdown";
import { ProductContext, ProductProvider } from "./context/ProductState";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [checkout, setCheckout] = useState([]);
  return (
    <ProductProvider>
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
                <Route exact component={Products} path="/" />
                <Route
                  exact
                  path="/cart"
                  component={() => {
                    return <Checkout checkout={checkout} />;
                  }}
                />
              </Switch>
            )}
          </div>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
