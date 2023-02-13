import React from "react";
import Tree1 from "../assets/tree1.png";
import Part1 from "../assets/Group 21.png";
import Part2 from "../assets/Group 20.png";
import Part3 from "../assets/Group 19.png";
import Part4 from "../assets/Group 18.png";
import Part5 from "../assets/Group 17.png";
import Heart from "../assets/love button.png";
// import { BsHeart } from "react-icons/bs";
import "./AddToCart.css";

const AddToCart = () => {
  return (
    <div className="addtocart">
      <div className="second-wrapper">
        <div className="addCart-item">
          <div className="tree-items">
            <img src={Tree1} alt="" className="main-tree" />
            <div className="thumbnail">
              <img src={Part1} alt="" className="img-item" />
              <img src={Part2} alt="" className="img-item" />
              <img src={Part3} alt="" className="img-item" />
              <img src={Part4} alt="" className="img-item" />
              <img src={Part5} alt="" className="img-item" />
            </div>
          </div>
          <div className="details">
            <p className="name-tr">Monstar Vr</p>
            <p>
              Monstera Vr are well know for their beautiful looks, long split
              leaves and their nice smell. they are widely popular all over east
              Europe.
            </p>
            <div className="detail-reviews">
              <span style={{ color: "green" }}>Details</span>
              <span>Reviews</span>
            </div>
          </div>
        </div>
        <div className="addCart-btn">
          <img src={Heart} alt="" className="love-h" />
          <button className="btn-add">$340-Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default AddToCart;
