import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { BrowserRouter } from 'react-router-dom'
import "./css/index.css";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>, 
  document.getElementById("root")
);
