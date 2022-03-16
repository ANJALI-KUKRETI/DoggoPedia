import React from "react";
import { BsHeart } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ heart, onFavorite, dog, removeFavorite }) => {
  return (
    <div className="card">
      <Link
        to={`/${dog.id}`}
        key={dog.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={
            dog.reference_image_id
              ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
              : "https://media.istockphoto.com/vectors/cartoon-cute-beagle-puppy-vector-character-mascot-vector-id1180989037?k=20&m=1180989037&s=612x612&w=0&h=7LRREi55KTZUNdW9eTKxp3iyYhnT7GaVvwA_LoP3jjE="
          }
          className="image"
        />
      </Link>
      <div className="upper">
        <div className="name">{dog.name}</div>
        {heart ? (
          <BsHeart className="favorite" onClick={() => onFavorite(dog.id)} />
        ) : (
          <IoIosRemoveCircleOutline
            className="favorite"
            onClick={() => {
              removeFavorite(dog.id);
            }}
          />
        )}
      </div>
      <div className="height">
        <span className="title"> Height:</span>
        <span className="value">{dog.height.metric}</span>
      </div>
      <div className="weight">
        <span className="title"> Life Span:</span>
        <span className="value">{dog.life_span}</span>
      </div>
      <div className="origin">
        <span className="title"> Breed group:</span>
        <span className="value">{dog.breed_group}</span>
      </div>
    </div>
  );
};

export default Card;
