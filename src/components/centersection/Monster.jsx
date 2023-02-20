import React, { useContext, useEffect, useState } from "react";
import SearchImg from "../assets/Group 8.png";

import "./Monstar.css";
import Item from "./../Item";
import { Context } from "../Context";

const Monster = () => {
  const { items, handleCurrentItemId, getValue } = useContext(Context);
  // const [getValue, setGetValue] = useState(items[0].plantItems);

  // const formateItem = () => {
  //   const newItem = items.map((item) => {
  //     let id = item.id;
  //     let plantItem = item.plantItems.map(
  //       ({ img, name, id, price, images, description }) => {
  //         return {
  //           img,
  //           name,
  //           id,
  //           price,
  //           images,
  //           description,
  //         };
  //       }
  //     );
  //     const plantsContent = [id, plantItem];
  //     return plantsContent;
  //   });
  //   return newItem;
  // };

  // useEffect(() => {
  //   const allItems = formateItem();
  //   allItems.find((item) => {
  //     if (item[0] === checkItem) {
  //       setGetValue(item[1]);
  //     }
  //   });
  // }, [checkItem]);
  // console.log(getValue);

  return (
    <div className="monster-wrapper">
      <div className="search-con">
        <img src={SearchImg} alt="" width={352} />
      </div>
      <div className="wraper-result">
        <div className="search-result">
          <div>
            <span style={{ color: "gray" }}> Search Result For</span>
            <span>"Monster"</span>
          </div>
          <div className="sort-con">
            <span className="sort-text">Sort</span>
            <span className="btn">Relevant</span>
            <span className="popular">Popular</span>
            <span className="news">News</span>
            <select name="" id="sel-btn">
              <option>price</option>
            </select>
          </div>
        </div>
      </div>
      <div className="plant-con">
        {getValue.map(({ id, name, price, img }) => {
          return (
            <Item
              id={id}
              name={name}
              price={price}
              img={img}
              key={id}
              onClick={() => handleCurrentItemId(id)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Monster;
