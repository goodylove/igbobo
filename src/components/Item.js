import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Context } from "./Context";
// import "./centersection/Monster.css";

const Item = ({ id, img, price, name, onClick }) => {
  const item = useContext(Context);

  return (
    <div className="plan1" id={id}>
      <div className="plant-holder">
        <img src={img} alt="" height={150} width={150} onClick={onClick} />
        <div className="start-con">
          <span className="tree-name">{name}</span>
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
              <span className="price-am">${price}</span>
            </div>
            <div className="cart-p">
              <button className="btn-item" onClick={onClick}>
                View Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
