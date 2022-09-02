import React, { useState } from "react";
import NotesList from "./components/NotesList";
//import Header from "./components/Header";
import Nav from "./components/Nav";
import { v4 as uuid } from "uuid";

const dummy_notes = [
  {
    id: uuid(),
    title: "Note 1",
    text: "Note text 1",
    date: "01/03/2021",
  },
  {
    id: uuid(),
    title: "Note 2",
    text: "Note text 2",
    date: "01/05/2021",
  },
  {
    id: uuid(),
    title: "Note 3",
    text: "Note text 3",
    date: "02/21/2021",
  },
  {
    id: uuid(),
    title: "Note 4",
    text: "Note text 4",
    date: "05/13/2021",
  },
];

function App() {
  const [note, setNote] = useState(dummy_notes);

  const savedData = (data) => {
    //console.log('App.js',data);
    setNote((prevState) => {
      return [data, ...prevState];
    });
  };

  const deleteNote = (noteID) => {
    //console.log('In App.js', noteID);
    const filteredNotes = note.filter((n) => n.id !== noteID);

    setNote(filteredNotes);

    //console.log(note);
  };

  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <NotesList
          notes={note}
          onSaveData={savedData}
          onDeleteNote={deleteNote}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
