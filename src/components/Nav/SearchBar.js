import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar(props) {

  const changeHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <FaSearch size={15} />
      <input type="text" placeholder="Search..." onChange={changeHandler} />
    </div>
  );
}

export default SearchBar;
