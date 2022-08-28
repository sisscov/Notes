import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addNote(name);
    //clear input after form submit
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-note" className="label-add">
        Add your notes below
      </label>
      <textarea
        type="text"
        id="new-note"
        className="input-add"
        placeholder="Your note text..."
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <Button type="submit" className="btn-add" variant="primary">
        Add
      </Button>
    </form>
  );
}

export default Form;
