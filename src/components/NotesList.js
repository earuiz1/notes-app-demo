import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import "./NotesList.css";

function NotesList(props) {

  const savedData = (data) => {
    //console.log('NoteList.js', data);
    props.onSaveData(data);
  }

  const savedID = (saved_ID) => {
    //console.log('In NoteList.js',saved_ID);
    props.onDeleteNote(saved_ID);
  }

  return (
    <div className="notes-list-container">
      {props.notes.map((note) => (
        <Note key={note.id} id={note.id} title={note.title} text={note.text} date={note.date} onSavedID={savedID}/>
      ))}
    <NewNote onSaveData={savedData}/>
    </div>
  );
}

export default NotesList;
