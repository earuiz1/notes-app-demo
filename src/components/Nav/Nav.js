import React from "react";
import { GrDocumentNotes } from "react-icons/gr";
import SearchBar from "./SearchBar";
import "./Nav.css";

function Nav(props) {
  const searchNote = (searchedNote) => {
    //console.log('In ....js',searchedNote);
    props.onSearchNote(searchedNote);
  };
  return (
    <header>
      <div className="nav-container">
        <div className="nav-header">
          <GrDocumentNotes size={25} />
          <h1>Notes App</h1>
        </div>
        <div className="nav-body">
          <SearchBar onSearch={searchNote} />
        </div>
      </div>
    </header>
  );
}

export default Nav;
