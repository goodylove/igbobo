import React from "react";

import { Link } from "react-router-dom";
import LogoNav from ".././assets/Logo (1).png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="log-con">
        <img src={LogoNav} alt="LOGO" />
        <span>igbobo</span>
      </div>
      <div className="menu-con">
        <ul>
          <li>Shop</li>
          <li>Plant care</li>
          <li>Worh-shop</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="cart-con"></div>
    </div>
  );
};
export default Nav;
