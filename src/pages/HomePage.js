import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import CardHolder from "../components/CardHolder";
import MainBanner from "../components/MainBanner";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const api_key = "7497a9ea-637d-4955-ab84-3601a78a3fb6";
const HomePage = ({ getDogsArray, getFavoritesArray }) => {
  const [dogsData, setDogsData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setFlag(true);
    async function fetchData() {
      setIsLoading(true);
      const request = await axios.get("https://api.thedogapi.com/v1/breeds", {
        headers: {
          "x-api-key": api_key,
        },
      });
      setDogsData(request.data.slice(0, 50));
      // console.log(request.data);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, []);

  const showSearchResultsHandler = (passValue) => {
    if (passValue.length === 0) return;
    setFlag(false);
    // console.log(passValue);
    setDogsData(passValue);
  };

  const setFavoriteHandler = (id) => {
    console.log(id);
    // const temp = [];
    // const initialDogs = [...dogsData];
    const temp = dogsData.find((dog) => dog.id === id);
    const newarr = [...favorites, temp];

    setFavorites(newarr);

    console.log(temp);
  };
  getDogsArray(dogsData);
  getFavoritesArray(favorites);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  // console.log(favorites);
  return (
    <>
      <Navbar showResults={showSearchResultsHandler} />
      {flag && <MainBanner />}
      {loading && <Spinner />}
      {!loading && (
        <CardHolder showHi>
          {dogsData.map((dog) => (
            <Card dog={dog} onFavorite={setFavoriteHandler} />
          ))}
        </CardHolder>
      )}
    </>
  );
};

export default HomePage;
