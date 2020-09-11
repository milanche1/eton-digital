import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Products from "./components/Products/Products";

class App extends Component {
  state = {
    products: [],
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
      <div className="App">
        <Navbar />
        <div className="container">
          <Products products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
