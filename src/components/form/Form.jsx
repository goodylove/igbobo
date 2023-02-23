import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import Button from "../Button";
import "./Form.css";
const Form = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form-control" onSubmit={handleClick}>
      <label htmlFor="cardnum" id="cardnum">
        Card Number
      </label>
      <span className="input-vector">
        <CiCreditCard1 className="card-icon" />
        <input type="text" className="card-num" maxLength={15} />
      </span>
      <label htmlFor="cardnum" id="cardholder">
        Card Holder Name
      </label>
      <span className="input-vector">
        <CiCreditCard1 className="card-icon" />
        <input type="text" className="card-holder" />
      </span>
      <div className="exp-cvv-container">
        <span>
          <label htmlFor="cvv">Exp.date</label>

          <input type="text" id="exp-date" placeholder="MM.DD.YY" />
        </span>

        <span>
          <label htmlFor="cvv">Cvv Code</label>

          <input type="text" id="cvv" placeholder="*****" maxLength={3} />
        </span>
      </div>

      <label htmlFor="amount">Amount($)</label>

      <input type="text" id="amount" />
      <span className="save-container">
        <input type="checkbox" id="save-future" />
        <span> Save card for future</span>
      </span>
      {/* <button id="pay-btn-checkout">Order-Now</button> */}
      <Button>Order-Now</Button>
    </form>
  );
};

export default Form;
