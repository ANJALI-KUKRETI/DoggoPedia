import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";

function App() {
  const [dogsDataToPass, setDogsDataToPass] = useState([]);
  const getDogsArrayHandler = (dogsData) => {
    setDogsDataToPass(dogsData);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage getDogsArray={getDogsArrayHandler} />}
        />
        <Route
          path="/:dogId"
          element={<DetailPage dogsData={dogsDataToPass} />}
        />
      </Routes>
    </div>
  );
}

export default App;
