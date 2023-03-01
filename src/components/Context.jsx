import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { itemsCon } from "./Data";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState();
  const [currentItemId, setCurrentItemId] = useState({});
  const [animateItem, setAnimateItem] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [checkItem, setCheckItem] = useState();
  const [getValue, setGetValue] = useState(itemsCon[0].plantItems);
  const [isChecked, setIsChecked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [show, setShowItem] = useState(false);
  const [cart, setCart] = useState([
    // {
    //   id: 1,
    //   qty: 3,
    //   product: {
    //     id: 2,
    //     price: 20,
    //     name: "Monster VR",
    //     img: Tree1,
    //   },
    // },
    // {
    //   id: 2,
    //   qty: 21,
    //   product: {
    //     id: 3,
    //     price: 400,
    //     name: "Monster goeo",
    //     img: Tree1,
    //   },
    // },
  ]);

  const handleNavBarToggle = () => {
    setNavbarOpen((prev) => !prev);
    return;
  };
  const handleChange = (e) => {
    setIsChecked(e.target.checked);

    setCheckItem(e.target.id);
  };

  const handleCurrentItemId = (id) => {
    setCurrentItemId(id);
    setShowItem(true);
    console.log("working");
  };

  const cartQuantityCount = useMemo(
    () => cart.reduce((acc, item) => item.qty + acc, 0),
    [cart]
  );
  console.log(cartQuantityCount);
  const handleRemoveItemFromCart = useCallback(
    (itemId) => {
      const newCart = [...cart];
      const item = newCart.filter((item) => item.id !== itemId);
      console.log(item);
      setCart(item);
      return;
    },
    [cart]
  );

  const RemoveMobileReviewItem = () => {
    setShowItem(false);
  };

  // const handleItemRemoveFromCart = useCallback((itemId) => {
  //   const newCart2 = cart.filter((item) => item.id !== itemId);
  //   console.log(newCart2);
  //   setCart(newCart2);
  // }, []);

  const handleAddItemToCart = useCallback(
    (producId, productPrice, productName, productImg) => {
      const item = {
        id: cart.length + 1,
        qty: 1,
        product: {
          id: producId,
          price: productPrice,
          name: productName,
          img: productImg,
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

  const contextValue = useMemo(
    () => ({
      items: itemsCon,
      handleCurrentItemId,
      currentItemId,
      show,
      isCartClicked,
      cart,
      navbarOpen,
      handleNavBarToggle,

      cartQuantityCount,
      handleAddItemToCart,
      handleFindProductItemInCart,
      handleItemQtyChange,
      handleRemoveItemFromCart,
      animateItem,
      animateHeart,
      handleChange,
      // handleItemRemoveFromCart,
      checkItem,
      getValue,
      RemoveMobileReviewItem,
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
      show,
      navbarOpen,
    ]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default ContextProvider;
