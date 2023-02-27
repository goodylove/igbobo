import React from "react";
import { TfiClose } from "react-icons/tfi";

import { Link } from "react-router-dom";

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
      <div>
        <CheckOut />;
      </div>
    </div>
  );
};

export default CheckOutPage;
