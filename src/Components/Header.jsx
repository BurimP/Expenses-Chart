import React from "react";
import img1 from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <p>My balance</p>
      <h1>$921.48</h1>
      <img alt="" src={img1}></img>
    </div>
  );
};

export default Header;
