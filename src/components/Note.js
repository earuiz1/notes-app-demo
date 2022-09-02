import React from 'react';
import './Note.css';

import { BsFillTrashFill } from "react-icons/bs";

function Note(props) {

    const clickHandler = () => {
        //console.log(props.id);
        props.onSavedID(props.id);
    }

  return (
    <div className="note-container">
        <div className="note-title">
            <h3>{props.title}</h3>
        </div>
        <div className="note-body">
            <span>{props.text}</span>
        </div>
        <div className="note-footer">
            <p>{props.date}</p>
            <BsFillTrashFill size = {20} onClick={clickHandler}/>
        </div>
    </div>
  )
}

export default Note;