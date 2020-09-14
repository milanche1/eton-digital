import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div style={{ width: "200px", display: "block", margin: "0 auto" }}>
      <img src={spinner} alt="spinner gif" />
      <h2>Fetching data</h2>
    </div>
  );
};
export default Spinner;
