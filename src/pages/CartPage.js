import React, { useContext, useEffect, useMemo, useState } from "react";
import "./CartPage.css";
import { Context } from "../components/Context";

import CartItems from "./../components/CartItems";
import AddToCart from "./../components/addToCart/AddToCart";

const CartPage = () => {
  const { cart } = useContext(Context);

  return (
    <div className="cart-page">
      <div>
        {cart?.map(({ qty, product }) => {
          return <CartItems qty={qty} product={product} />;
        })}
      </div>
    </div>
  );
};

export default CartPage;
