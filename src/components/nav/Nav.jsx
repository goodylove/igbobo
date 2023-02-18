import React, { useContext } from "react";

import { Link } from "react-router-dom";
import LogoNav from ".././assets/Logo (1).png";
import Cart from "../assets/heart.png";
import Heart from "../assets/Group 2.png";
import Pic from "../assets/Ellipse 1.png";
import "./Nav.css";
import { Context } from "../Context";
import { motion } from "framer-motion";

const Nav = () => {
  const { cartQuantityCount, animateItem } = useContext(Context);
  console.log(animateItem);
  return (
    <div className="nav">
      <div className="log-con">
        <img src={LogoNav} alt="LOGO" />
        <span className="igbobo">Igbobo</span>
      </div>
      <div className="menu-con">
        <ul className="list">
          <li className="shop-shop">
            Shop
            <hr
              style={{
                // marginTop: "1rem",
                position: "absolute",
                top: "42px",
                width: "42px",
                color: "green",
                backgroundColor: "green",
                height: "2px",
              }}
            />
          </li>
          <li>Plant care</li>
          <li>Worh-shop</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="cart-con">
        <ul className="list-cart">
          <li>
            <img src={Cart} alt="" />
            <div className={animateItem ? "animate-num" : "num"}>
              {cartQuantityCount}
            </div>
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
