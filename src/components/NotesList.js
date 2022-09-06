import React from "react";
import Note from "./Note";
import NewNote from "./NewNote/NewNote";
import "./NotesList.css";

function NotesList(props) {

  const savedData = (data) => {
    props.onSaveData(data);
  }

  const savedID = (saved_ID) => {
    props.onDeleteNote(saved_ID);
  }

  return (
    <div className="notes-list-container">
      <NewNote onSaveData={savedData}/>
      {props.notes.filter((note) => note.title.toLowerCase().includes(props.searchedWord)).map((note) => <Note key={note.id} id={note.id} title={note.title} text={note.text} date={note.date} onSavedID={savedID}/>)}
    </div>
  );
}

export default NotesList;
