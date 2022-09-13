import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Nav from "./components/Nav/Nav";
import { v4 as uuid } from "uuid";

const dummy_notes = [
  {
    id: uuid(),
    title: "Buy Grocerires Tomorrow",
    text: "I'm planning to make some mexican food for my friends.",
    date: "01/03/2021",
  },
  {
    id: uuid(),
    title: "Doctor Appointment",
    text: "Don't forget you have a doctor's appoinment, next week. Make sure to not forget your mask as well.",
    date: "01/05/2021",
  },
];

function App() {
  const [note, setNote] = useState(dummy_notes);
  const [searchedWord, setSearchedWord] = useState("");

  useEffect(() => {
    /* Getting the data from local storage and parsing it into a JSON object. */
    const localNotes = JSON.parse(localStorage.getItem("note_data"));

    if (localNotes) {
      console.log("Checking how many times I render");
      setNote(localNotes);
    }
  }, []);

  useEffect(() => {
    /* Storing the data in the local storage. */
    localStorage.setItem("note_data", JSON.stringify(note));
  }, [note]);

  //Add new notes function
  const addNote = (note_data) => {
    //console.log('App.js',data);
    setNote((prevState) => {
      return [note_data, ...prevState];
    });
  };

  //Delete notes function
  const deleteNote = (noteID) => {
    //console.log('In App.js', noteID);
    const filteredNotes = note.filter((n) => n.id !== noteID);
    setNote(filteredNotes);
  };

  //Search notes function
  const searchNote = (searchedNote) => {
    console.log("In App.js", searchedNote);
    setSearchedWord(searchedNote);
  };

  //Edit notes function
  const editedNote = (editedNoteData) => {
    const updatedNotesArray = note.map((n) => {
      if (n.id === editedNoteData.id) {
        return editedNoteData;
      }

      return n;
    });
    setNote(updatedNotesArray);
  };

  return (
    <React.Fragment>
      <Nav onSearchNote={searchNote} />
      <div className="container">
        <NotesList
          notes={note}
          onAddNote={addNote}
          onDeleteNote={deleteNote}
          searchedWord={searchedWord.toLowerCase()}
          onEdited={editedNote}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
