import React, { useState, createContext, useMemo, useCallback } from "react";
import Categoriesection from "./categoriesection/CategorieSection";
import { itemsCon } from "./Data";
import Monster from "./centersection/Monster";
import AddToCart from "./addToCart/AddToCart";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [currentItemId, setCurrentItemId] = useState({});
  const [cart, setCart] = useState([
    // {
    //   id: 1,
    //   qty: 3,
    //   product: {
    //     id: 2,
    //     price: 20,
    //     name: "Monster VR",
    //   },
    // },
    // {
    //   id: 2,
    //   qty: 21,
    //   product: {
    //     id: 3,
    //     price: 400,
    //     name: "Monster goeo",
    //   },
    // },
  ]);
  const [animateItem, setAnimateItem] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [checkItem, setCheckItem] = useState();

  const handleChange = (e) => {
    setCheckItem(e.target.id);
  };

  const handleCurrentItemId = (id) => {
    setCurrentItemId(id);
  };

  const cartQuantityCount = useMemo(
    () => cart.reduce((acc, item) => item.qty + acc, 0),
    [cart]
  );

  const handleRemoveItemFromCart = useCallback((itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  }, []);

  const handleAddItemToCart = useCallback(
    (producId, productPrice, productName) => {
      const item = {
        id: cart.length,
        qty: 1,
        product: {
          id: producId,
          price: productPrice,
          name: productName,
        },
      };

      setCart((prev) => {
        const newCart = [...prev];
        newCart.push(item);

        return newCart;
      });

      setAnimateItem(true);
      setAnimateHeart(true);
    },
    [cart.length]
  );

  const handleFindProductItemInCart = useCallback(
    (productId) => cart.find((item) => item.product.id === productId),
    [cart]
  );

  const handleItemQtyChange = useCallback(
    (itemId, qty) => {
      const newCart = [...cart];
      const item = newCart.find((item) => item.id === itemId);
      item.qty = qty;

      setCart(newCart);
      if (item.qty === 0) {
        setAnimateItem(false);
      }
    },
    [cart]
  );

  const contextValue = useMemo(
    () => ({
      items: itemsCon,
      handleCurrentItemId,
      currentItemId,
      cart,
      cartQuantityCount,
      handleAddItemToCart,
      handleFindProductItemInCart,
      handleItemQtyChange,
      handleRemoveItemFromCart,
      animateItem,
      animateHeart,
      handleChange,
      checkItem,
    }),
    [currentItemId, cart, animateHeart, animateItem, animateHeart, checkItem]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default ContextProvider;
