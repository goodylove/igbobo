import React, { useContext, useMemo } from "react";
import "./CartItem.css";
import { Context } from "../Context";

const CartItems = ({ qty, product, onClick, id }) => {
  const {
    items,
    currentItemId,
    handleAddItemToCart,
    handleFindProductItemInCart,
    handleItemQtyChange,
    handleRemoveItemFromCart,
    animateHeart,
    checkItem,
    handleItemRemoveFromCart,
    getValue,
  } = useContext(Context);

  const itemInCart = handleFindProductItemInCart(product.id);
  console.log(itemInCart);

  const handleDecreaseQty = () => {
    if (itemInCart.qty <= 1) {
      handleRemoveItemFromCart(itemInCart.id);
      return;
    }
    handleItemQtyChange(itemInCart.id, itemInCart.qty - 1);
  };

  // const sumTotalPrice = useMemo(() => {
  //   return qty * product.price;
  // });

  return (
    <div className="item-in-cart">
      <div className="second-wrapper-cart">
        <div className="addCart-items">
          <div className="tree-item">
            <img src={product.img} alt={product.name} className="main-tree" />
          </div>
          <div className="details-item">
            <p className="name-tr">{product.name}</p>
            <div className="cart-item-price">${product.price}</div>
            <span>Quanity{qty}</span>
          </div>
        </div>
        <div className="addCart-btn">
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
              disabled={itemInCart.qty <= 1}
            >
              -
            </button>
          </div>

          <button
            className="remove-item"
            onClick={() => handleRemoveItemFromCart(itemInCart.id)}
          >
            RemoveItem
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
