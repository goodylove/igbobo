import React, { useCallback, useContext, useMemo } from "react";
// import Part1 from "../assets/Group 21.png";
// import Part2 from "../assets/Group 20.png";
// import Part3 from "../assets/Group 19.png";
// import Part4 from "../assets/Group 18.png";
// import Part5 from "../assets/Group 17.png";
import Heart from "../assets/love button.png";

import { Context } from "../Context";
import { motion } from "framer-motion";
// import { BsHeart } from "react-icons/bs";
import "./AddToCart.css";
// let getAnItem = [];

const AddToCart = () => {
  const {
    items,
    currentItemId,
    handleAddItemToCart,
    handleFindProductItemInCart,
    handleItemQtyChange,
    handleRemoveItemFromCart,
  } = useContext(Context);

  const currentItem = useMemo(
    () => items.find((item) => item.id === currentItemId) || items[0],
    [currentItemId]
  );

  const itemInCart = handleFindProductItemInCart(currentItem.id);

  const handleDecreaseQty = () => {
    if (itemInCart.qty <= 1) {
      handleRemoveItemFromCart(itemInCart.id);
      return;
    }
    handleItemQtyChange(itemInCart.id, itemInCart.qty - 1);
  };
  // const handleAddItemToCart = () => {
  //   getAnItem.push(currentItem);
  //   console.log(currentItem);
  // };
  // console.log(getAnItem);
  return (
    <div className="addtocart">
      <div className="second-wrapper">
        <div className="addCart-item">
          <div className="tree-items">
            <img
              src={currentItem.img}
              alt={currentItem.name}
              className="main-tree"
            />
            <div className="thumbnail">
              {currentItem.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${currentItem.name}-image-${index + 1}`}
                  className="img-item"
                />
              ))}
            </div>
          </div>
          <div className="details">
            <p className="name-tr">{currentItem.name}</p>
            <p>{currentItem.description}</p>
            <div className="detail-reviews">
              <span style={{ color: "green" }}>Details</span>
              <span>Reviews</span>
            </div>
          </div>
        </div>
        <div className="addCart-btn">
          <img src={Heart} alt="" className="love-h" />

          {itemInCart ? (
            <div>
              <button
                className="add-btn"
                onClick={() =>
                  handleItemQtyChange(itemInCart.id, itemInCart.qty + 1)
                }
              >
                +
              </button>
              {itemInCart.qty}
              <button
                className="subtract-btn"
                onClick={handleDecreaseQty}
                // disabled={itemInCart.qty <= 1}
              >
                -
              </button>
            </div>
          ) : (
            <button
              className="btn-add"
              onClick={() =>
                handleAddItemToCart(
                  currentItem.id,
                  currentItem.price,
                  currentItem.name
                )
              }
            >
              ${currentItem.price}-Add To Cart
              {/* <div className="num">{getAnItem.length}</div> */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddToCart;
