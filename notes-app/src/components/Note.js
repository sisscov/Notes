import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Note(props) {
  const [isEditing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState("");
  function handleChange(e) {
    setEditedNote(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editNote(props.id, editedNote);
    setEditedNote("");
    setEditing(false);
  }
  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>Edit your note</label>
        <input
          className="edit-note"
          id="{props.id}"
          type="text"
          value={editedNote}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <ButtonGroup>
          <Button
            type="button"
            className="btn"
            variant="secondary"
            onClick={() => setEditing(false)}
          >
            Cancel<span className="visually-hidden">editing {props.name}</span>
          </Button>
          <Button type="submit" className="btn save" variant="success">
            Save
            <span className="visually-hidden">Save note as {props.name}</span>
          </Button>
        </ButtonGroup>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="note-list">
      <div className="note">
        <label className="label-note" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div></div>
      <div>
        <ButtonGroup>
          <Button
            type="button"
            className="btn"
            variant="secondary"
            onClick={() => setEditing(true)}
          >
            Edit<span className="visually-hidden">props.name</span>
          </Button>
          <Button
            type="button"
            className="btn delete"
            variant="danger"
            onClick={() => props.deleteNote(props.id)}
          >
            Delete<span className="visually-hidden">{props.name}</span>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
  return (
    <li className="note-list">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}
