import React, { useContext, useMemo } from "react";

import { Context } from "./Context";
const CartItems = ({ qty, product }) => {
  //   const {
  //     items,
  //     currentItemId,
  //     handleAddItemToCart,
  //     handleFindProductItemInCart,
  //     handleItemQtyChange,
  //     handleRemoveItemFromCart,
  //     animateHeart,
  //     checkItem,
  //     getValue,
  //   } = useContext(Context);

  //   // let plantItemsCon = items[0].plantItems;
  //   let plantContent = getValue.map(
  //     ({ img, name, id, price, images, description }) => {
  //       return {
  //         img: img,
  //         name: name,
  //         id: id,
  //         price: price,
  //         image: images,
  //         description: description,
  //       };
  //     }
  //   );
  //   // console.log(plantContent);

  //   const currentItem = useMemo(
  //     () =>
  //       plantContent.find((item) => item.id === currentItemId) || plantContent[0],
  //     [currentItemId]
  //   );
  //   console.log(currentItem);

  //   const itemInCart = handleFindProductItemInCart(currentItem.id);

  //   const handleDecreaseQty = () => {
  //     if (itemInCart.qty <= 1) {
  //       handleRemoveItemFromCart(itemInCart.id);
  //       return;
  //     }
  //     handleItemQtyChange(itemInCart.id, itemInCart.qty - 1);
  //   };

  return (
    <div className="addtocart">
      <div className="second-wrapper">
        <div className="addCart-item">
          <div className="tree-items">
            <img src={product.img} alt={product.name} className="main-tree" />
            {/* <div className="thumbnail">
              {product.image.map((image, index) => (
               <img
                key={index}
                src={image}
                alt={product.name}
                className="img-item"
              />
              ))}{" "}
            </div> */}
          </div>
          <div className="details">
            <p className="name-tr">{product.name}</p>
            <p>{product.description}</p>
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
                  currentItem.name,
                  currentItem.img
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
