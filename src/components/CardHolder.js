import React from "react";
import "./CardHolder.css";

const CardHolder = (props) => {
  return (
    <div className="holder">
      <h1 className="dogsHeading">Say Hi to these cutiess!</h1>
      <div className="cardHolder">{props.children}</div>
    </div>
  );
};

export default CardHolder;
