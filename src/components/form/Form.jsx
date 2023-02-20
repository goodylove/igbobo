import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
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
        <input type="text" className="card-num" />
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

          <input type="text" id="cvv" placeholder="*****" />
        </span>
      </div>

      <label htmlFor="amount">Amount($)</label>

      <input type="text" id="amount" />
      <span className="save-container">
        <input type="checkbox" id="save-future" />
        <span> Save card for future</span>
      </span>
      <button id="pay-btn-checkout">pay$500</button>
    </form>
  );
};

export default Form;
