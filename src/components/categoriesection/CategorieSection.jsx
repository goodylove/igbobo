import React, { useContext } from "react";
import "./Categories.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Context } from "../Context";
const Categoriesection = () => {
  const { handleChange, isChecked } = useContext(Context);
  return (
    <div className="general-wrapper">
      <div className="filter">
        <span className="fil">Filter</span>
      </div>
      <div className="con">
        <div className="categorie">
          <span className="catego">Categorie</span>
          <div className="wrap-list">
            <ul>
              <li>
                <input
                  type="radio"
                  id="lant"
                  name="group1"
                  onChange={handleChange}
                />
                <span>Gardening</span>
              </li>
              <li>
                <input
                  type="radio"
                  value="plant"
                  name="group1"
                  id="plant"
                  onChange={handleChange}
                />

                <span>plants</span>
              </li>
              <li>
                <input
                  type="radio"
                  value="room"
                  name="group1"
                  id="room"
                  onChange={handleChange}
                />

                <span>rooms</span>
              </li>
              <li>
                <input name="group1" type="radio" onChange={handleChange} />

                <span>bulb</span>
              </li>
              <li>
                <input name="group1" type="radio" onChange={handleChange} />

                <span>planters</span>
              </li>
              <li>
                <input name="group1" type="radio" onChange={handleChange} />

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
              <li className="price">$400</li>
            </ul>
            <div className="set-price">Set Price</div>
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
