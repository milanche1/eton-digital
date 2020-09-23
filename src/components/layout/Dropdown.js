import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductState";

const Dropdown = () => {
  const context = useContext(ProductContext);
  return (
    <div className="dropdown">
      <ul
        className=""
        style={{ listStyle: "none", paddingLeft: "0px", fontSize: "19px" }}
      >
        {context.checkout.length > 0 ? (
          context.checkout.map((item) => {
            return (
              <Fragment>
                <li
                  className="d-flex justify-content-start"
                  style={{ marginBottom: "100px;" }}
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "50px",
                      marginRight: "10px",
                      borderRadius: "5px",
                    }}
                  />
                  <p>{item.title}</p>
                </li>
                <hr />
              </Fragment>
            );
          })
        ) : (
          <div>No items!</div>
        )}
      </ul>
      <Link class="btn btn-blue" to="/cart">
        Go To Checkout
      </Link>
    </div>
  );
};

export default Dropdown;
