import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";

const api_key = "7497a9ea-637d-4955-ab84-3601a78a3fb6";
function App() {
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
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const showSearchResultsHandler = (passValue) => {
    if (passValue.length === 0) return;
    setFlag(false);
    setDogsData(passValue);
  };

  const removeFavoriteHandler = (id) => {
    // console.log(id);
    const temp = [...favorites];
    // setFavorites(favorites.filter((fvrt) => fvrt.id !== id));

    setFavorites(temp.filter((tmp) => tmp.id !== id));
    console.log(temp);
  };
  const setFavoriteHandler = (id) => {
    console.log(id);
    const temp = dogsData.find((dog) => dog.id === id);
    const newarr = [...favorites, temp];
    setFavorites(newarr);
    console.log(temp);
  };

  console.log(favorites);

  console.log(dogsData);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              loading={loading}
              flag={flag}
              dogsData={dogsData}
              setFavoriteHandler={setFavoriteHandler}
              showSearchResultsHandler={showSearchResultsHandler}
              showHi
            />
          }
        />
        <Route path="/:dogId" element={<DetailPage dogsData={dogsData} />} />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              favoriteDogs={favorites}
              removeFavorite={removeFavoriteHandler}
              heart
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
