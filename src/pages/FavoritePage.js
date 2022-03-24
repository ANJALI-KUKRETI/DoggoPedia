import React, { useState } from "react";
import Card from "../components/Card";
import CardHolder from "../components/CardHolder";
import "./FavoritePage.css";

const FavoritePage = ({ favoriteDogs, removeFavorite }) => {
  return (
    <div className="favorites">
      <div className="titleFavorite">My favorites</div>
      <CardHolder>
        {favoriteDogs.map((dog) => (
          <Card dog={dog} key={Math.random()} removeFavorite={removeFavorite} />
        ))}
      </CardHolder>
    </div>
  );
};

export default FavoritePage;
