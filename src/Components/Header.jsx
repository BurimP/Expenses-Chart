import React from "react";
import img1 from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img alt="" src={img1}></img>
    </div>
  );
};

export default Header;
