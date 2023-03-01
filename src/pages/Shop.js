import React, { useContext, useState } from "react";
import Categoriesection from "./../components/categoriesection/CategorieSection";
import Monster from "./../components/centersection/Monster";
import AddToCart from "./../components/addToCart/AddToCart";
import MobileViewItem from "./../components/MobileViewItem";
import MobileCategorie from "../components/MobileCategorie";

import { Context } from "../components/Context";

import "./Shop.css";

const Shop = () => {
  const { show, RemoveMobileReviewItem, handleChange, navbarOpen } =
    useContext(Context);

  return (
    <div className="shop">
      <div className="wrapper">
        <MobileCategorie onClick={handleChange} isOpen={navbarOpen} />
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
