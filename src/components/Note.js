import React, { useState } from "react";
import "./Note.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";

function Note(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedBody, setEditedBody] = useState(props.text);

  const editClickHandle = () => {
    console.log("Clicked");
    setIsClicked(true);
  };

  const changeTitle = (event) => {
    console.log("Title Edited");
    setEditedTitle(event.target.value);
  };

  const changeBody = (event) => {
    console.log("Body Edited");
    setEditedBody(event.target.value);
  };

  const deleteClickHandler = () => {
    //console.log(props.id);
    props.onDelete(props.id);

    //Show a success pop up message
    toast.success("Note successfully deleted!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  //
  const saveClickHandle = () => {
    //Check if both inputs are not empty
    if (editedTitle.trim().length > 0 && editedBody.trim().length > 0) {
      //Create an object in which you will store the new edited note data
      const editedNoteData = {
        id: props.id,
        title: editedTitle,
        text: editedBody,
        date: new Date().toLocaleString(),
      };

      //Lift the object data up
      props.onEdit(editedNoteData);

      //Show the original note once the info has been passed up.
      setIsClicked(false);

      //Clear input values using two-way binding
      // setEditedTitle(editedTitle);
      // setEditedBody("");

      //Show a success pop up message
      toast.success("Note successfully edited!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    //If any or both inputs are empty
    else {
      //Show an error pop up message if the user tries to save an edited note with emptu fields.
      toast.error("Invalid Input: Empty fields!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      //console.log("Empty field!");
    }

    //console.log("Empty field!");
  };

  const goBackHandler = () => {
    console.log("clicked");
    setIsClicked(false);

    //Clear input values using two-way b
    // setEditedTitle("");
    // setEditedBody("");
  };

  return (
    <div>
      <ToastContainer limit={1} />
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
