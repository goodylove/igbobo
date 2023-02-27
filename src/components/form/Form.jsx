import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCreditCard1 } from "react-icons/ci";
import Button from "../Button";
import "./Form.css";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputValue, setInputValue] = useState({
    cardNumber: "",
    cardHolderName: "",
    cvv: "",
    date: "",
    amount: "",
  });
  const [checkError, setCheckError] = useState(false);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form-control" onSubmit={handleSubmit(handleClick)}>
      <label htmlFor="cardNumber" id="cardnum">
        Card Number
      </label>
      <span className="input-vector">
        <CiCreditCard1 className="card-icon" />
        <input
          type="text"
          name="cardNumber"
          {...register("cardNumber", { required: true, maxLength: 15 })}
          className="card-num"
          maxLength={15}
          onChange={handleChange}
          id={checkError ? "error " : ""}
        />
        {errors.cardNumber && (
          <p style={{ color: "red", fontSize: 10 }}>
            Please check the First Name
          </p>
        )}
      </span>
      <label htmlFor="cardholder" id="cardholder">
        Card Holder Name
      </label>
      <span className="input-vector">
        <CiCreditCard1 className="card-icon" />
        <input
          {...register("cardHolder", { required: true })}
          name="cardholder"
          type="text"
          className="card-holder"
          onChange={handleChange}
          id={checkError ? "error " : ""}
        />
        {errors.cardholder && (
          <p style={{ color: "red", margin: 0, fontSize: 10 }}>
            Please check the cardHolder
          </p>
        )}
      </span>
      <div className="exp-cvv-container">
        <span>
          <label htmlFor="date">Exp.date</label>

          <input
            {...register("date", { required: true })}
            name="date"
            type="date"
            id="exp-date"
            placeholder="MM.DD.YY"
            onChange={handleChange}
          />
          {errors.date && (
            <p style={{ color: "red", margin: 0, fontSize: 10 }}>
              Please check the date{" "}
            </p>
          )}
        </span>

        <span>
          <label htmlFor="cvv">Cvv Code</label>

          <input
            {...register("cvv", { required: true })}
            type="text"
            name="cvv"
            id="cvv"
            placeholder="*****"
            maxLength={3}
            onChange={handleChange}
          />
          {/* {errors.cvv && <p>Please check the cvv</p>} */}
        </span>
      </div>

      <label htmlFor="amount">Amount($)</label>

      <input
        style={{ paddingLeft: "5px" }}
        {...register("amount", { required: true })}
        type="text"
        name="amount"
        id="amount"
        onChange={handleChange}
        // id={checkError ? "error " : ""}
      />
      {errors.amount && (
        <p style={{ color: "red", margin: 0, fontSize: 10 }}>
          Please check the amount
        </p>
      )}
      <span className="save-container">
        <input
          type="checkbox"
          id="save-future"

          // onChange={handleChange}
          // id={checkError ? "error " : ""}
        />
        <span> Save card for future</span>
      </span>
      <button id="pay-btn-checkout">Order-Now</button>
      {/* <Button>Order-Now</Button> */}
    </form>
  );
};

export default Form;
