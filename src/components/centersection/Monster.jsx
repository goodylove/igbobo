import React from "react";
import SearchImg from "../assets/Group 8.png";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Tree1 from "../assets/tree1.png";
import Gold from "../assets/gold.png";
import plant from "../assets/plant.png";
import leaf from "../assets/leaf.png";
import "./Monstar.css";
import Items from "./../Items";

const Monster = ({ items, onClick }) => {
  console.log(items);
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
        {items.map(({ id, name, price, img }) => {
          return (
            <Items
              id={id}
              name={name}
              price={price}
              img={img}
              key={id}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Monster;
