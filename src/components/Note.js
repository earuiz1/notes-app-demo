import React, { useState } from "react";
import "./Note.css";

import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";

function Note(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  const editClickHandle = () => {
    console.log("Clicked");
    setIsClicked(true);
  };

  const deleteClickHandler = () => {
    //console.log(props.id);
    props.onSavedID(props.id);
  };

  const changeTitle = (event) => {
    console.log("Title Edited");
    setEditedTitle(event.target.value);
  };

  const changeBody = (event) => {
    console.log("Body Edited");
    setEditedBody(event.target.value);
  };

  const saveClickHandle = () => {
    if (editedTitle.trim().length > 0 && editedBody.trim().length > 0) {
      const editedNoteData = {
        id: props.id,
        title: editedTitle,
        text: editedBody,
        date: new Date().toLocaleString(),
      };

      props.onEdited(editedNoteData);

      setIsClicked(false);

      //Clear input values using two-way b
      setEditedTitle("");
      setEditedBody("");
    }

    console.log("Empty field!");
  };

  const goBackHandler = () => {
    console.log("clicked");
    setIsClicked(false);

    //Clear input values using two-way b
    setEditedTitle("");
    setEditedBody("");
  };

  return (
    <div>
      {isClicked === false && (
        <div className="note-container">
          <div className="note-corner-icon">
            <FaEdit size={22} onClick={editClickHandle} />
          </div>
          <div className="note-title">
            <h3>{props.title}</h3>
          </div>
          <div className="note-body">
            <span>{props.text}</span>
          </div>
          <div className="note-footer">
            <span>{props.date}</span>
            <BsFillTrashFill size={20} onClick={deleteClickHandler} />
          </div>
        </div>
      )}
      {isClicked === true && (
        <div className="note-container">
          <div className="note-corner-icon">
            <IoSave size={22} onClick={saveClickHandle} />
          </div>
          <div className="note-title">
            <input
              type="text"
              onChange={changeTitle}
              placeholder="Edit Title..."
              value={editedTitle}
              autoFocus
            />
          </div>
          <div className="note-body">
            <textarea
              rows="8"
              cols="28"
              onChange={changeBody}
              placeholder="Edit Body..."
              value={editedBody}
            />
            <div className="note-footer-icon">
              <RiArrowGoBackFill size={24} onClick={goBackHandler} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
