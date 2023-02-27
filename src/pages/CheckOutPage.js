import React from "react";
import { TfiClose } from "react-icons/tfi";

import { Link } from "react-router-dom";
import Animate from "./../components/AnimateImage";

import CheckOut from "../components/checkout/CheckOut";

import "./CheckOutPage.css";

const CheckOutPage = () => {
  return (
    <div className="c-page">
      <div className="close-icon">
        <Link to="/cartpage">
          <TfiClose />
        </Link>
      </div>
      <div className="check-cont">
        <CheckOut />
        <Animate />
      </div>
    </div>
  );
};

export default CheckOutPage;
