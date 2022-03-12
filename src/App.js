import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";
import MainBanner from "./components/MainBanner";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

const api_key = "7497a9ea-637d-4955-ab84-3601a78a3fb6";
function App() {
  const [dogsData, setDogsData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
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

  const showSearchResultsHandler = (searchedData) => {
    console.log(searchedData);
    setDogsData(searchedData);
  };
  return (
    <div className="App">
      <Navbar showResults={showSearchResultsHandler} />
      <MainBanner />
      {loading && <Spinner />}

      {!loading && (
        <CardHolder>
          {dogsData.map((dog) => (
            <Card
              key={dog.id}
              image={dog.image.url}
              name={dog.name}
              height={dog.height.metric}
              lifeSpan={dog.life_span}
              breedGroup={dog.breed_group}
            />
          ))}
        </CardHolder>
      )}
    </div>
  );
}

export default App;
