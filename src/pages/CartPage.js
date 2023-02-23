import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./CartPage.css";
import { Context } from "../components/Context";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import CartItems from "../components/cartItem/CartItems";

const CartPage = () => {
  const { cart, handleRemoveItemFromCart } = useContext(Context);
  // console.log(cart);
  const totalPrice = cart.reduce((acc, item) => {
    const curentPrice = item.qty * item.product.price;

    return acc + curentPrice;
  }, 0);

  const handleRemoveItem = (productId) => {
    const removeItem = cart.filter((item) => item.product.id !== productId);
    console.log(removeItem, "remove");
    return removeItem;
  };

  return (
    <div className="cart-page">
      <div className="overall-wrapper">
        <div className="close-icon">
          <Link to="/">
            <TfiClose />
          </Link>
        </div>
        <div className="cartpage-con-product">
          {cart?.map(({ qty, product, index }) => {
            return (
              <CartItems
                qty={qty}
                product={product}
                key={index}
                onClick={() => handleRemoveItem(product.id)}
              />
            );
          })}
        </div>
        <Link to="/checkoutpage">
          <Button>CheckOut${totalPrice}</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
