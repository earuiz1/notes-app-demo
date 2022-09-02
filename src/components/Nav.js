import React from "react";
import { GrDocumentNotes } from "react-icons/gr";
import SearchBar from "./SearchBar";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-header">
        <GrDocumentNotes size={25} />
        <h1>Notes App</h1>
      </div>
      <div className="nav-body">
        <SearchBar />
      </div>
    </div>
  );
}

export default Nav;
