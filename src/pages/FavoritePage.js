import React from "react";
import Card from "../components/Card";
import CardHolder from "../components/CardHolder";
import "./FavoritePage.css";

const FavoritePage = ({ favoriteDogs }) => {
  return (
    <div className="favorites">
      <div className="titleFavorite">My favorites</div>
      <CardHolder>
        {favoriteDogs.map((dog) => (
          <Card className="fvrtCard" dog={dog} key={Date.now()} />
        ))}
      </CardHolder>
    </div>
  );
};

export default FavoritePage;
