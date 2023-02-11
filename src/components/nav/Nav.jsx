import React from "react";

import { Link } from "react-router-dom";
import LogoNav from ".././assets/Logo (1).png";
import Cart from "../assets/heart.png";
import Heart from "../assets/Group 2.png";
import Pic from "../assets/Ellipse 1.png";
import "./Nav.css";

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
      <div className="cart-con">
        <ul>
          <li>
            <img src={Cart} alt="" />
          </li>
          <li>
            <img src={Heart} alt="" />
          </li>
          <li>
            <img src={Pic} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
