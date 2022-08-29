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
    <Note
      id={note.id}
      name={note.name}
      key={note.id}
      deleteNote={deleteNote}
      editNote={editNote}
    />
  ));
  const notesNoun = notesList.length !== 1 ? "notes" : "note";
  const headingText = `You have ${notesList.length} ${notesNoun}`;
  function addNote(name) {
    const newNote = { id: `note-${nanoid()}`, name };
    setNotes([...notes, newNote]);
  }
  function editNote(id, editedNote) {
    const editedNotesList = notes.map((note) => {
      if (id === note.id) {
        return { ...note, name: editedNote };
      }
      return note;
    });
    setNotes(editedNotesList);
  }
  return (
    <div className="bg">
      <div className="container">
        <h1 className="title">Your notes</h1>
        <Form addNote={addNote} />
        <div className="notes-container">
          <h2 className="heading-text">{headingText}</h2>
          <ul role="list" className="notes-list" aria-labelledby="notes-list">
            {notesList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
