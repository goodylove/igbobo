import React, { useContext, useEffect, useMemo, useState } from "react";
import "./CartPage.css";
import { Context } from "../components/Context";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import CartItems from "../components/cartItem/CartItems";

const CartPage = () => {
  const { cart } = useContext(Context);
  return (
    <div className="cart-page">
      <div className="overall-wrapper">
        <div className="close-icon">
          <Link to="/">
            <TfiClose />
          </Link>
        </div>
        <div className="cartpage-con-product">
          {cart?.map(({ qty, product }) => {
            return <CartItems qty={qty} product={product} />;
          })}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default CartPage;
