import React from "react";
import Note from "./Note";
import NewNote from "./NewNote/NewNote";
import "./NotesList.css";

function NotesList(props) {
  const addNote = (data) => {
    props.onAddNote(data);
  };

  const deleteNote = (saved_ID) => {
    props.onDeleteNote(saved_ID);
  };

  const editNote = (editedNoteData) => {
    props.onEdited(editedNoteData);
  };

  return (
    <div className="notes-list-container">
      <NewNote onAddNote={addNote} />
      {props.notes
        .filter((note) => note.title.toLowerCase().includes(props.searchedWord))
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            date={note.date}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
    </div>
  );
}

export default NotesList;
