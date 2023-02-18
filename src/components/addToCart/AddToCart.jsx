import React, { useCallback, useContext, useMemo } from "react";

import Heart from "../assets/love button.png";

import { Context } from "../Context";
import "./AddToCart.css";

const AddToCart = () => {
  const {
    items,
    currentItemId,
    handleAddItemToCart,
    handleFindProductItemInCart,
    handleItemQtyChange,
    handleRemoveItemFromCart,
    animateHeart,
  } = useContext(Context);

  let plantItemsCon = items[0].plantItems;
  let plantContent = plantItemsCon.map(
    ({ img, name, id, price, images, description }) => {
      return {
        img: img,
        name: name,
        id: id,
        price: price,
        image: images,
        description: description,
      };
    }
  );
  // console.log(plantContent);

  const currentItem = useMemo(
    () =>
      plantContent.find((item) => item.id === currentItemId) || plantContent[0],
    [currentItemId]
  );
  console.log(currentItem);

  const itemInCart = handleFindProductItemInCart(currentItem.id);

  const handleDecreaseQty = () => {
    if (itemInCart.qty <= 1) {
      handleRemoveItemFromCart(itemInCart.id);
      return;
    }
    handleItemQtyChange(itemInCart.id, itemInCart.qty - 1);
  };

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
              {currentItem.image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={currentItem.name}
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
          <img
            src={Heart}
            alt=""
            className={animateHeart ? "love-animate" : "love - h"}
          />

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
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddToCart;
