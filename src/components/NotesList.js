import React from "react";
import Note from "./Note";
import NewNote from "./NewNote/NewNote";
import "./NotesList.css";

function NotesList(props) {
  const savedData = (data) => {
    props.onSaveData(data);
  };

  const savedID_Delete = (saved_ID) => {
    props.onDeleteNote(saved_ID);
  };

  const savedEditedValues = (editedNoteData) => {
    props.onEdited(editedNoteData);
  };

  return (
    <div className="notes-list-container">
      <NewNote onSaveData={savedData} />
      {props.notes
        .filter((note) => note.title.toLowerCase().includes(props.searchedWord))
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            date={note.date}
            onSavedID={savedID_Delete}
            onEdited={savedEditedValues}
          />
        ))}
    </div>
  );
}

export default NotesList;
