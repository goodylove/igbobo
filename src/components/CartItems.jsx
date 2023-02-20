import React, { useContext, useMemo } from "react";

import { Context } from "./Context";
const CartItems = () => {
  const {
    items,
    currentItemId,
    handleAddItemToCart,
    handleFindProductItemInCart,
    handleItemQtyChange,
    handleRemoveItemFromCart,
    animateHeart,
    checkItem,
    getValue,
  } = useContext(Context);

  // let plantItemsCon = items[0].plantItems;
  let plantContent = getValue.map(
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
          {/* <div>
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
          </div> */}
          {/* {itemInCart ? (
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
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
