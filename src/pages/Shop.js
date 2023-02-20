import React from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";

import "./Shop.css";
import CheckOut from "./../components/checkout/CheckOut";
import SinglePlant from "./../components/SinglePlant";

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
        {/* <SinglePlant /> */}
      </div>
    </div>
  );
};

export default Shop;
