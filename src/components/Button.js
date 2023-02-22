// import React from "react";
// const Button = ({ children, handleClick }) => {
//   console.log("button", children);
//   return <button onClick={handleClick}>{children}</button>;
// };

// export default React.memo(Button);

import React, { useContext, useEffect, useMemo, useState } from "react";

import { Context } from "./Context";

const Button = () => {
  const { cart } = useContext(Context);
  // const newQty = cart.map(({ qty }) => qty);
  // const [upDatePrice, setUpdDatePrice] = useState(null);

  // const newPrice = cart.map(({ product }) => product.price);
  // const sum = newPrice.reduce((acc, price) => acc + price, 0);

  // // const sumTotalPrice = useMemo(() => {
  // //   return qty * product.price;
  // // });

  // useEffect(() => {
  //   setUpdDatePrice(sum);
  // }, [upDatePrice]);
  const totalPrice = cart.reduce((acc, item) => {
    const curentPrice = item.qty * item.product.price;
    return acc + curentPrice;
  }, 0);

  return <button className="btn-add">CHECKOUT - ${totalPrice}</button>;
};

export default React.memo(Button);
