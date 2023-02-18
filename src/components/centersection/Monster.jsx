import React, { useContext } from "react";
import SearchImg from "../assets/Group 8.png";

import "./Monstar.css";
import Item from "./../Item";
import { Context } from "../Context";

const Monster = () => {
  const { items, handleCurrentItemId, checkItem } = useContext(Context);

  const formateItem = () => {
    const newItem = items.map((item) => {
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
  const allItems = formateItem();
  const itemItem = allItems.find((item) => {
    if (item[0] === checkItem) {
      let returnValue = item[1];
      return returnValue;
    }
    return;
  });
  console.log(itemItem);

  let plantItemsCon = items[0].plantItems;

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
        {plantItemsCon.map(({ id, name, price, img }) => {
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
