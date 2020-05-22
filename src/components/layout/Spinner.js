import React, { Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="spinner"
      style={{ display: "block", margin: "auto", width: "200px" }}
    />
  </Fragment>
);

export default Spinner