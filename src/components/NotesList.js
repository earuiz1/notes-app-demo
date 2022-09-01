import React from "react";
import Note from "./Note";
import "./NotesList.css";

function NotesList(props) {
  return (
    <div className="notes-list-container">
      {props.notes.map((note) => (
        <Note id={note.id} title={note.title} text={note.text} date={note.date}/>
      ))}
    </div>
  );
}

export default NotesList;
