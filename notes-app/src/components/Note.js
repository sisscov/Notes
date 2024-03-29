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
  function handleCancel() {
    setEditing(false);
    setEditedNote(props.name);
  }
  function handleEdit() {
    setEditing(true);
    setEditedNote(props.name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    emptyNote();
    props.editNote(props.id, editedNote);
    setEditing(false);
  }

  function emptyNote() {
    if (editedNote === "") {
      alert("Your note is empty. Write something or click cancel");
      handleSubmit.preventDefault();
    }
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>Edit your note</label>
        <input
          className="edit-note"
          id={props.id}
          type="text"
          value={editedNote}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <ButtonGroup>
          <Button
            type="button"
            className="btn-cancel"
            variant="secondary"
            onClick={() => handleCancel()}
          >
            Cancel<span className="visually-hidden">editing {props.name}</span>
          </Button>
          <Button type="submit" className="btn-save" variant="success">
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
            onClick={() => handleEdit()}
          >
            Edit<span className="visually-hidden">{props.name}</span>
          </Button>
          <Button
            type="button"
            className="btn-delete"
            onClick={() => props.deleteNote(props.id)}
          >
            🗑️<span className="visually-hidden">{props.name}</span>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
  return (
    <li className="note-list">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}
