import React from "react";
import Vector from "../assets/Vector.png";
import { CiCreditCard1 } from "react-icons/ci";
import "./Form.css";
const Form = () => {
  return (
    <form className="form-control">
      <label htmlFor="cardnum" id="cardnum">
        Card Number
      </label>
      <span className="input-vector">
        <CiCreditCard1 className="card-icon" />
        <input type="text" className="card-num" />
      </span>
      <label htmlFor="cardnum" id="cardholder">
        Card Holder Name
      </label>
      <span className="input-vector">
        <CiCreditCard1 className="card-icon" />
        <input type="text" className="card-holder" />
      </span>
      <label htmlFor="cardnum" id="exp-date">
        Exp.date
      </label>
      <span className="input-vector">
        <input type="text" />
      </span>
      <label htmlFor="cardnum" id="cvv">
        Cvv
      </label>
      <span className="input-vector">
        <input type="text" />
      </span>
      <label htmlFor="cardnum" id="amount">
        Amount
      </label>
      <span className="input-vector">
        <input type="text" />
      </span>
    </form>
  );
};

export default Form;
