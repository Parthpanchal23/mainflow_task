import React from "react";
import logo from "../assets/logo.svg";
const Loader = () => {
  return (
    <div >
      <img src={logo} className="App-logo" alt="loading ..." />
      <p>Loading ...</p>
    </div>
  );
};

export default Loader;
