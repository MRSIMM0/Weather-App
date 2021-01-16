import React from "react";
import ReactDom from "react-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "../js/index.css";
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
