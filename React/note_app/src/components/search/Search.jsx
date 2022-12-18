import React from "react";
import "./style.css";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        className="search-input"
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search . . . "
      />
    </div>
  );
};

export default Search;
