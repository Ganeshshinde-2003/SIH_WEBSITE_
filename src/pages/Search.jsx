import React from "react";
import "../App.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="search-container">
      <p className="search-heading">Search Books</p>
      <div className="search-section">
        <BiSearchAlt2 className="search-icon" />
      </div>
    </div>
  );
};

export default Search;
