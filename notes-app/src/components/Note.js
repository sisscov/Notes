import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Note(props) {
  return (
    <li className="note-list">
      <div className="note">
        <label className="label-note" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <ButtonGroup>
        <Button type="button" className="btn" variant="secondary">
          Edit<span className="visually-hidden"></span>
        </Button>
        <Button type="button" className="btn delete" variant="danger">
          Delete<span className="visually-hidden"></span>
        </Button>
      </ButtonGroup>
    </li>
  );
}
