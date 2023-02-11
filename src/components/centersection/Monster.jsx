import React from "react";
import SearchImg from "../assets/Group 8.png";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Tree1 from "../assets/tree1.png";
import "./Monstar.css";

const Monster = () => {
  return (
    <div className="monster-wrapper">
      <div className="search-con">
        <img src={SearchImg} alt="" width={370} />
      </div>
      <div className="wraper-result">
        <div className="search-result">
          <span>Search Result For "Monster"</span>
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
              <span>Monstar Vr</span>
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
            <img src={Tree1} alt="" height={150} />
            <div className="start-con">
              <span>Monstar Vr</span>
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
            <img src={Tree1} alt="" height={150} />
            <div className="start-con">
              <span>Monstar Vr</span>
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
            <img src={Tree1} alt="" height={150} />
            <div className="start-con">
              <span>Monstar Vr</span>
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
