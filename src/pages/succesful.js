import React from "react";

import { Link } from "react-router-dom";

const Succesful = () => {
  return (
    <div
      style={{
        marginTop: "10rem",
        height: "66vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div></div>
      <div>
        <Link to="/">
          <button className="btn" style={{ padding: "10px", border: "none" }}>
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Succesful;
