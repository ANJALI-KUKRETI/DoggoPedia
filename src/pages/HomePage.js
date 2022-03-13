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
const HomePage = () => {
  const [dogsData, setDogsData] = useState([]);
  const [loading, setIsLoading] = useState(false);
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
      console.log(request.data);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, []);

  const showSearchResultsHandler = (passValue) => {
    if (passValue.length === 0) return;
    setFlag(false);
    console.log(passValue);
    setDogsData(passValue);
  };
  return (
    <>
      {" "}
      <Navbar showResults={showSearchResultsHandler} />
      {flag && <MainBanner />}
      {loading && <Spinner />}
      {!loading && (
        <CardHolder>
          {dogsData.map((dog) => (
            <Link
              to={`/${dog.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                key={dog.id}
                image={
                  dog.reference_image_id
                    ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
                    : "https://media.istockphoto.com/vectors/cartoon-cute-beagle-puppy-vector-character-mascot-vector-id1180989037?k=20&m=1180989037&s=612x612&w=0&h=7LRREi55KTZUNdW9eTKxp3iyYhnT7GaVvwA_LoP3jjE="
                }
                name={dog.name}
                height={dog.height.metric}
                lifeSpan={dog.life_span}
                breedGroup={dog.breed_group}
              />
            </Link>
          ))}
        </CardHolder>
      )}
    </>
  );
};

export default HomePage;
