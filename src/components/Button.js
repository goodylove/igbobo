// import React from "react";
// const Button = ({ children, handleClick }) => {
//   console.log("button", children);
//   return <button onClick={handleClick}>{children}</button>;
// };

// export default React.memo(Button);

import React, { useContext, useEffect, useMemo, useState } from "react";

import { Context } from "./Context";

const Button = ({ children }) => {
  const { cart } = useContext(Context);

  // const totalPrice = cart.reduce((acc, item) => {
  //   const curentPrice = item.qty * item.product.price;
  //   return acc + curentPrice;
  // }, 0);

  return <button className="btn-add">{children}</button>;
};

export default React.memo(Button);
