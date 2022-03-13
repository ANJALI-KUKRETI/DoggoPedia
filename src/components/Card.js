import React from "react";
import { BsHeart } from "react-icons/bs";

import "./Card.css";

const Card = ({ image, height, name, breedGroup, lifeSpan }) => {
  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="upper">
        <div className="name">{name}</div>
        <BsHeart className="favorite" />
      </div>
      <div className="height">
        <span className="title"> Height:</span>
        <span className="value">{height}</span>
      </div>
      <div className="weight">
        <span className="title"> Life Span:</span>
        <span className="value">{lifeSpan}</span>
      </div>
      <div className="origin">
        <span className="title"> Breed group:</span>
        <span className="value">{breedGroup}</span>
      </div>
    </div>
  );
};

export default Card;
