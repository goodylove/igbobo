import React, { useState, createContext } from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";
import { motion } from "framer-motion";
import { itemsCon } from "../components/Data";
import "./Shop.css";
import ParentCom from "./../components/ParenCom";
// import ContextProvider from "../components/Context";

const Shop = () => {
  return (
    // <div className="shop">
    //   <div className="wrapper">
    //     <div className="cate">
    //       <Categoriesection />
    //     </div>
    //     <div className="mon">
    //       <Monster items={itemsCon} onClick={() => handleClick()} />
    //     </div>
    //     ? <AddToCart />
    //   </div>
    // </div>

    <ParentCom />
  );
};

export default Shop;
