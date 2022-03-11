import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">DoggoPedia</div>
      <div className="searchBar">
        <form>
          <input
            type="text"
            className="search"
            placeholder="Who do you want to find?"
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
