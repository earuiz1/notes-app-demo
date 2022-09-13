import React, { useState } from "react";
import "./NewNote.css";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuid } from "uuid";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewNote(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  //Set limits for title and body
  let titleLimit = 30;
  let bodyLimit = 200;

  const changeTitleHandler = (event) => {
    if (event.target.value.length <= titleLimit) {
      //console.log("Title Edited");
      setNoteTitle(event.target.value);
    }
  };

  const changeTextHandler = (event) => {
    if (event.target.value.length <= bodyLimit)
      //console.log(event.target.value);
      setNoteText(event.target.value);
  };

  const addClickHandler = () => {
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

      //console.log(note_data);
      props.onAddNote(note_data);

      toast.success("Note successfully Added", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      //Show an error pop up message if the user tries to save a new note with empty fields
      toast.error("Invalid Input: Empty fields!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      console.log("Empty");
    }
  };

  return (
    <div>
      <div className="new-note-container">
        <div className="new-note-title">
          <input
            type="text"
            placeholder="New Title..."
            onChange={changeTitleHandler}
            value={noteTitle}
          />
          <span className="new-note-counter">
            Characters remaining: {titleLimit - noteTitle.length}
          </span>
        </div>
        <div className="new-note-body">
          <textarea
            rows="8"
            cols="28"
            placeholder="Enter new note..."
            onChange={changeTextHandler}
            value={noteText}
          />
          <span className="new-note-counter">
            Characters remaining: {bodyLimit - noteText.length}
          </span>
        </div>
        <div className="new-note-footer">
          <AiOutlinePlusCircle size={22} onClick={addClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default NewNote;
