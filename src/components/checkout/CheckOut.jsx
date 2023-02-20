import React from "react";
import Card from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Card3 from "../assets/card3.png";
import Form from "./../form/Form";

import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div className="checkout-container">
      <div className="card-container">
        <img src={Card} alt="card-1" width={99} />
        <img src={Card2} alt="card-2" />
        <img src={Card3} alt="card-3" width={99} />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default CheckOut;
