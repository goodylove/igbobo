import React, { useContext, useState } from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";
import MobileViewItem from "./../components/MobileViewItem";
import { Context } from "../components/Context";
import MobileCategorie from "./../components/MobileCategorie";

import "./Shop.css";

const Shop = () => {
  const { show, RemoveMobileReviewItem, handleChange } = useContext(Context);

  return (
    <div className="shop">
      <MobileCategorie onClick={handleChange} />
      <div className="wrapper">
        <div className="cate">
          <Categoriesection />
        </div>
        <div className="mon">
          <Monster />
        </div>
        <AddToCart />
        <MobileViewItem item={show} onClick={RemoveMobileReviewItem} />
      </div>
    </div>
  );
};

export default Shop;
