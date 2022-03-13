import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import axios from "axios";
import "./Navbar.css";

const api_key = "7497a9ea-637d-4955-ab84-3601a78a3fb6";

const Navbar = ({ showResults }) => {
  const [searchedData, setSearchedData] = useState("");
  const [passValue, setPassValue] = useState([]);

  const takingValueHandler = (event) => {
    setSearchedData(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      async function fetchData() {
        const request = await axios.get(
          `https://api.thedogapi.com/v1/breeds/search?q=${searchedData}`,
          {
            headers: {
              "x-api-key": api_key,
            },
          }
        );
        console.log(request.data);
        showResults(request.data);
        setPassValue(request.data);
        setSearchedData("");
        return request;
      }
      fetchData();
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [searchedData, showResults]);

  const passValueHandler = (event) => {
    event.preventDefault();
    showResults(passValue);

    // console.log(passValue);
  };

  return (
    <div className="nav">
      <div className="logo">DoggoPedia</div>
      <div className="searchBar">
        <form onSubmit={passValueHandler}>
          <input
            type="text"
            className="search"
            placeholder="Who do you want to find?"
            value={searchedData}
            onChange={takingValueHandler}
          />
          <button type="submit" className="searchBtn">
            <FaSearch /> Search
          </button>
        </form>
        <div className="favorites">
          <BsHeart className="favoriteNavbar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
