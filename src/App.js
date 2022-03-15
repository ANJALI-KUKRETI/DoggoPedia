import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  const [dogsDataToPass, setDogsDataToPass] = useState([]);
  const [favoritesArray, setFavoritesArray] = useState([]);
  const getDogsArrayHandler = (dogsData) => {
    setDogsDataToPass(dogsData);
  };
  const getFavoritesArrayHandler = (favorites) => {
    setFavoritesArray(favorites);
  };
  console.log(favoritesArray);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              getDogsArray={getDogsArrayHandler}
              getFavoritesArray={getFavoritesArrayHandler}
              showHi
            />
          }
        />
        <Route
          path="/:dogId"
          element={<DetailPage dogsData={dogsDataToPass} />}
        />
        <Route
          path="/favorites"
          element={<FavoritePage favoriteDogs={favoritesArray} />}
        />
      </Routes>
    </div>
  );
}

export default App;
