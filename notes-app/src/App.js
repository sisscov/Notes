import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Note from "./components/Note";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const notesList = notes.map((note) => (
    <Note id={note.id} name={note.name} key={note.id} />
  ));
  function addNote(name) {
    const newNote = { id: "id", name };
    setNotes([...notes, newNote]);
  }
  return (
    <div className="container">
      <h1 className="title">Your notes</h1>
      <Form addNote={addNote} />
      <h2>You have 3 notes</h2>
      <ul role="list" className="notes-list" aria-labelledby="notes-list">
        {notesList}
      </ul>
    </div>
  );
}

export default App;
