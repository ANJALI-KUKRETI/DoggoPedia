import React from "react";
import Card from "../components/Card";
import CardHolder from "../components/CardHolder";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const HomePage = ({
  loading,
  flag,
  dogsData,
  setFavoriteHandler,
  showSearchResultsHandler,
  favorites,
}) => {
  console.log(favorites);

  return (
    <>
      <Navbar showResults={showSearchResultsHandler} />
      {flag && <MainBanner />}
      {loading && <Spinner />}
      {!loading && (
        <CardHolder showHi>
          {dogsData.map((dog) => (
            <Card
              dog={dog}
              onFavorite={setFavoriteHandler}
              heart
              favorites={favorites}
            />
          ))}
        </CardHolder>
      )}
    </>
  );
};

export default HomePage;
