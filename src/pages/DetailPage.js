import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./DetailPage.css";

const DetailPage = ({ dogsData }) => {
  const params = useParams();
  console.log(dogsData);
  console.log(params.dogId);
  const currDog = dogsData.find((dog) => {
    return dog.id === +params.dogId;
  });
  console.log(currDog);
  return (
    <div className="container">
      <Link to="/" className="top">
        <BsFillArrowLeftCircleFill />
      </Link>
      <div className="down">
        <div className="leftContainer">
          <img
            src={
              currDog.reference_image_id
                ? `https://cdn2.thedogapi.com/images/${currDog.reference_image_id}.jpg`
                : "https://media.istockphoto.com/vectors/cartoon-cute-beagle-puppy-vector-character-mascot-vector-id1180989037?k=20&m=1180989037&s=612x612&w=0&h=7LRREi55KTZUNdW9eTKxp3iyYhnT7GaVvwA_LoP3jjE="
            }
            alt="detailImage"
          />
        </div>
        <div className="rightContainer">
          <div className="detailName">{currDog.name}</div>
          <div className="bredFor">
            <span className="valueFor">Bred for:-</span>
            <span className="ans">{currDog.bred_for}</span>
          </div>
          <div className="Breed Group">
            <span className="valueFor">Bred Group:-</span>
            <span className="ans">{currDog.breed_group}</span>
          </div>
          <div className="height">
            <span className="valueFor">Height:-</span>
            <span className="ans">{currDog.height.metric} m</span>
          </div>
          <div className="weight">
            <span className="valueFor">Weight:-</span>
            <span className="ans">{currDog.weight.metric} m</span>
          </div>
          <div className="lifeSpan">
            <span className="valueFor">Life Span:-</span>
            <span className="ans">{currDog.life_span}</span>
          </div>
          <div className="origin">
            <span className="valueFor">Origin:-</span>
            <span className="ans">{currDog.origin}</span>
          </div>
          <div className="temperament">
            <span className="valueFor">Temperament:-</span>
            <span className="ans">{currDog.temperament}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
