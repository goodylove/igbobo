import React, { useContext } from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";

import CheckOut from "./../components/checkout/CheckOut";
import SinglePlant from "./../components/SinglePlant";
import { Context } from "../components/Context";

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
          {/* <CheckOut /> */}
        </div>
        <AddToCart />
        {/* <AddToCart /> */}
        {/* <SinglePlant /> */}
        {/* <CartItems /> */}
      </div>
    </div>
  );
};

export default Shop;
