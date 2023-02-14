import React, { useState, createContext } from "react";
import Categoriesection from "./categoriesection/CategorieSection";
import { itemsCon } from "../components/Data";
import Monster from "./centersection/Monster";
import AddToCart from "./addToCart/AddToCart";
export const ContextHolder = createContext();

const ParentCom = () => {
  const handleClick = (e) => {
    const item = itemsCon.filter((item) => item.id === e);
    console.log(item);

    return item;
  };

  return (
    <div className="shop">
      <ContextHolder.Provider value={itemsCon}>
        <div className="wrapper">
          <div className="cate">
            <Categoriesection />
          </div>
          <div className="mon">
            <Monster items={itemsCon} onClick={() => handleClick()} />
          </div>
          <AddToCart />
        </div>
      </ContextHolder.Provider>
    </div>
  );
};
export default ParentCom;
