import React, { useState } from "react";
import NotesList from "./components/NotesList";
import Nav from "./components/Nav/Nav";
import { v4 as uuid } from "uuid";

const dummy_notes = [
  {
    id: uuid(),
    title: "Difference between “ == “ and “ === “ operators.",
    text: "Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types. ",
    date: "01/03/2021",
  },
  {
    id: uuid(),
    title: "Why do we use the word “debugger” in javascript?",
    text: "The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.",
    date: "01/05/2021",
  },
  {
    id: uuid(),
    title: "What is NaN property in JavaScript?",
    text: "NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.",
    date: "02/21/2021",
  },
  {
    id: uuid(),
    title: "Explain Higher Order Functions in javascript.",
    text: "Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Higher-order functions are a result of functions being first-class citizens in javascript.",
    date: "05/13/2021",
  },
];

function App() {
  const [note, setNote] = useState(dummy_notes);
  const [searchedWord, setSearchedWord] = useState('');

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

  const searchNote = (searchedNote) => {
      console.log('In App.js',searchedNote);
      setSearchedWord(searchedNote);
  }

  return (
    <React.Fragment>
      <Nav onSearchNote={searchNote}/>
      <div className="container">
        <NotesList
          notes={note}
          onSaveData={savedData}
          onDeleteNote={deleteNote}
          searchedWord={searchedWord}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
