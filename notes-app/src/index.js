import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id:"note-0", name: "Abc"},
  { id:"note-1", name: "123"},
  { id:"note-2", name: "1a2b3c"}
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App notes={DATA}/>
  </React.StrictMode>
);

ReactDOM.render(<App notes={DATA} />, document.getElementById("root"));