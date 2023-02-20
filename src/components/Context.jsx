import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { itemsCon } from "./Data";

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
  const [getValue, setGetValue] = useState(itemsCon[0].plantItems);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);

    setCheckItem(e.target.id);
  };

  const handleCurrentItemId = (id) => {
    console.log(id);
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

  const formateItem = () => {
    const newItem = itemsCon.map((item) => {
      let id = item.id;
      let plantItem = item.plantItems.map(
        ({ img, name, id, price, images, description }) => {
          return {
            img,
            name,
            id,
            price,
            images,
            description,
          };
        }
      );
      const plantsContent = [id, plantItem];
      return plantsContent;
    });
    return newItem;
  };

  useEffect(() => {
    const allItems = formateItem();
    allItems.find((item) => {
      if (item[0] === checkItem) {
        setGetValue(item[1]);
      }
    });
  }, [checkItem]);
  console.log(getValue);

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
      getValue,
    }),
    [
      currentItemId,
      cart,
      animateHeart,
      animateItem,
      animateHeart,
      checkItem,
      getValue,
      isChecked,
    ]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default ContextProvider;
