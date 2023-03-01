import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import LogoNav from ".././assets/Logo (1).png";
import { MdClose } from "react-icons/md";
import Cart from "../assets/heart.png";
import Heart from "../assets/Group 2.png";

import Pic from "../assets/Ellipse 1.png";
import "./Nav.css";
import { Context } from "../Context";

const Nav = () => {
  const {
    cartQuantityCount,
    animateItem,
    isCartClicked,
    navbarOpen,
    handleNavBarToggle,
    idRef,
    handleChange,
  } = useContext(Context);

  return (
    <>
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
              <Link to="/cartpage">
                <button
                  ref={idRef}
                  id="cart"
                  value={cartQuantityCount}
                  className={animateItem ? "animate-num" : "num"}
                >
                  {cartQuantityCount}
                </button>
              </Link>
            </li>
            <li>
              <img src={Heart} alt="" />
            </li>
            <li>
              <img src={Pic} alt="" />
            </li>
          </ul>
        </div>
        {/* navbar */}
        <div className="toggle">
          <ul>
            <li>
              <img src={Cart} alt="" />
              <Link to="/cartpage">
                <button
                  ref={idRef}
                  id="cart"
                  value={cartQuantityCount}
                  className={animateItem ? "animate-num" : "num"}
                >
                  {cartQuantityCount}
                </button>
              </Link>
            </li>
          </ul>

          <button className="togge" onClick={handleNavBarToggle}>
            {navbarOpen ? (
              <MdClose style={{ width: "32px", height: "32px" }} />
            ) : (
              <FiMenu
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default Nav;
