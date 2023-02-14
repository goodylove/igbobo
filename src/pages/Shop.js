import React, { useState } from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";
import { motion } from "framer-motion";
import { itemsCon } from "../components/Data";
import "./Shop.css";

const Shop = () => {
  const [item, setItem] = useState([]);
  let [id] = itemsCon;
  const handleClick = (e) => {
    const item = itemsCon.filter((item) => item.id === e);
    console.log(item);
    setItem(item);
    return item;
  };

  return (
    <div className="shop">
      <div className="wrapper">
        <div className="cate">
          <Categoriesection />
        </div>
        <div className="mon">
          <Monster items={itemsCon} onClick={() => handleClick()} />
        </div>
        <div className="animate">{item ? <AddToCart /> : ""}</div>
      </div>
    </div>
  );
};

export default Shop;
