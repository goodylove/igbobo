import React from "react";
import AddToCart from "./addToCart/AddToCart";
import { TfiClose } from "react-icons/tfi";

const MobileViewItem = ({ item, onClick }) => {
  return (
    <div className={item ? "mobile show" : "mobile"}>
      <div style={{ padding: "1rem" }} className="close-cart">
        <TfiClose onClick={onClick} />
      </div>
      <AddToCart />
    </div>
  );
};

export default MobileViewItem;
