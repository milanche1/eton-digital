import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  state = {
    products: [],
    checkout: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://my-json-server.typicode.com/brankostancevic/products/products"
    );
    this.setState({ products: res.data, loading: false });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route
              exact
              component={() => <Products products={this.state.products} />}
              path="/"
            />
            <Route exact component={Checkout} path="/cart" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
