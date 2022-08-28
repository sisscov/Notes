import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Note from "./components/Note";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  function deleteNote(id) {
    const remainingNotes = notes.filter((note) => id !== note.id);
    setNotes(remainingNotes);
  }
  const notesList = notes.map((note) => (
    <Note id={note.id} name={note.name} key={note.id} deleteNote={deleteNote} />
  ));
  const notesNoun = notesList.length !== 1 ? "notes" : "note";
  const headingText = `You have ${notesList.length} ${notesNoun}`;
  function addNote(name) {
    const newNote = { id: `note-${nanoid()}`, name };
    setNotes([...notes, newNote]);
  }
  return (
    <div className="container">
      <h1 className="title">Your notes</h1>
      <Form addNote={addNote} />
      <h2>{headingText}</h2>
      <ul role="list" className="notes-list" aria-labelledby="notes-list">
        {notesList}
      </ul>
    </div>
  );
}

export default App;
