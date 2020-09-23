import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Spinner from "./components/layout/Spinner";
import Dropdown from "./components/layout/Dropdown";
import { ProductProvider } from "./context/ProductState";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Navbar>
            <Dropdown />
          </Navbar>
          <div className="container">
            <Switch>
              <Route exact component={Products} path="/" />
              <Route
                exact
                path="/cart"
                component={() => {
                  return <Checkout />;
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
