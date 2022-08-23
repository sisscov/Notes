import React from "react";
import ReactDOM from "react-dom/client";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Your notes</h1>
      <form>
        <label htmlFor="new-note" className="label-add">
          Add your notes below
        </label>
        <textarea
          type="text"
          id="new-note"
          className="input-add"
          placeholder="Your note text..."
          autoComplete="off"
          for="exampleFormControlTextarea1"
          rows="3"
        />
        <Button type="submit" className="btn-add" variant="primary">
          Add
        </Button>
      </form>
      <h2>You have 3 notes</h2>
      <ul role="list" className="notes-list" aria-labelledby="notes-list">
        <li className="note-list">
          <div className="note">
            <label className="label-note" htmlFor="todo-0">
              Abc
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
        <li className="note">
          <div className="note">
            <label className="label-note" htmlFor="todo-0">
              123
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
        <li className="note">
          <div className="note">
            <label className="label-note" htmlFor="todo-0">
              1a2b3c
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
      </ul>
    </div>
  );
}

export default App;
