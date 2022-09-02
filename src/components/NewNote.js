import React, { useState } from "react";
import "./NewNote.css";

import { AiFillSave } from "react-icons/ai";
import { v4 as uuid } from "uuid";

function NewNote(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const changeTitleHandler = (event) => {
    //console.log(event.target.value);
    setNoteTitle(event.target.value);
  };

  const changeTextHandler = (event) => {
    //console.log(event.target.value);
    setNoteText(event.target.value);
  };

  const clickHandler = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      const note_data = {
        id: uuid(),
        title: noteTitle,
        text: noteText,
        date: new Date().toLocaleString(),
      };

      //Clear values using two-way binding
      setNoteTitle("");
      setNoteText("");

      console.log(note_data);
      props.onSaveData(note_data);
    }
  };

  return (
    <div className="new-note-container">
      <div className="new-note-title">
        <input
          type="text"
          placeholder="New Title..."
          onChange={changeTitleHandler}
          value={noteTitle}
        />
      </div>
      <div className="new-note-body">
        <textarea
          rows="8"
          cols="28"
          placeholder="Enter new note..."
          onChange={changeTextHandler}
          value={noteText}
        />
      </div>
      <div className="new-note-footer">
        <AiFillSave size={20} onClick={clickHandler} />
      </div>
    </div>
  );
}

export default NewNote;
