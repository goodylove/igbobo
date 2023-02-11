import React from "react";
import "./Categories.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const Categoriesection = () => {
  return (
    <div className="general-wrapper">
      <div className="filter">Filter</div>
      <div className="con">
        <div className="categorie">
          <span className="catego">Categorie</span>
          <div className="wrap-list">
            <ul>
              <li>
                <input type="checkbox" />
                <span>Gardening</span>
              </li>
              <li>
                <input type="checkbox" checked />

                <span>plants</span>
              </li>
              <li>
                <input type="checkbox" />

                <span>seeds</span>
              </li>
              <li>
                <input type="checkbox" />

                <span>bulb</span>
              </li>
              <li>
                <input type="checkbox" />

                <span>planters</span>
              </li>
              <li>
                <input type="checkbox" />

                <span>Others</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="price-range">
          <span>Price Range</span>
          <div className="wrap-price">
            <ul className="price-list">
              <li>
                <select className="max">
                  <option value="max">Max</option>
                </select>
              </li>
              <li className="price">$40</li>
            </ul>
            <div className="set-price">set price</div>
          </div>
        </div>
        <div className="rating">
          <span>Rating</span>
          <div className="wrap-rating">
            <ul>
              <li style={{ width: 30 }}>
                <input type="checkbox" checked />
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
                <AiFillStar className="icon-start" />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>And above</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="promo-wrap">
        <div className="promo">
          <div className="cont">
            <h3>Get 30% off</h3>
            <p>share your refferal code and get a discount</p>
            <div className="set-share">share</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categoriesection;
