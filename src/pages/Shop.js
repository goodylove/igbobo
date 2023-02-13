import React from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="wrapper">
        <div className="cate">
          <Categoriesection />
        </div>
        <div className="mon">
          <Monster />
        </div>
        <div className="animate">
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default Shop;
