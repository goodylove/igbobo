import React, { useContext } from "react";
import SearchImg from "../assets/Group 8.png";

import "./Monstar.css";
import Item from "./../Item";
import { Context } from "../Context";

const Monster = () => {
  const { handleCurrentItemId, getValue } = useContext(Context);

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
