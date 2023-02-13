import React from "react";
import SearchImg from "../assets/Group 8.png";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Tree1 from "../assets/tree1.png";
import Gold from "../assets/gold.png";
import plant from "../assets/plant.png";
import leaf from "../assets/leaf.png";
import "./Monstar.css";

const Monster = () => {
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
        <div className="plan1">
          <div className="plant-holder">
            <img src={Tree1} alt="" height={150} />
            <div className="start-con">
              <span className="tree-name">Monstar Vr</span>
              <ul className="stars-c">
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>(74)</li>
              </ul>
              <div className="tree-price">
                <div className="pri">
                  <span>price</span>
                  <span className="price-am">$340</span>
                </div>
                <div className="cart-p">
                  <span>Add to cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plan1">
          <div className="plant-holder">
            <img src={Gold} alt="" height={150} />
            <div className="start-con">
              <span className="tree-name">Monstera Delicious</span>
              <ul className="stars-c">
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>(74)</li>
              </ul>
              <div className="tree-price">
                <div className="pri">
                  <span>price</span>
                  <span className="price-am">$340</span>
                </div>
                <div className="cart-p">
                  <span>Add to cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plan1">
          <div className="plant-holder">
            <img src={leaf} alt="" height={120} />
            <div className="start-con">
              <span className="tree-name">Monstar green</span>
              <ul className="stars-c">
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>(74)</li>
              </ul>
              <div className="tree-price">
                <div className="pri">
                  <span>price</span>
                  <span className="price-am">$340</span>
                </div>
                <div className="cart-p">
                  <span>Add to cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plan1">
          <div className="plant-holder">
            <img src={plant} alt="" height={120} />
            <div className="start-con">
              <span className="tree-name">Monstar tree</span>
              <ul className="stars-c">
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiFillStar className="icon-start" />
                </li>
                <li>
                  <AiOutlineStar />
                </li>
                <li>(74)</li>
              </ul>
              <div className="tree-price">
                <div className="pri">
                  <span>price</span>
                  <span className="price-am">$340</span>
                </div>
                <div className="cart-p">
                  <span>Add to cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Monster;
