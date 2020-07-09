import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

import Home from "../contents/Home";

class BackButton extends Component {

  render() {
    return (
        <div className="backbuttonwrapper">
            <NavLink className="backbutton" to="/">Back to work</NavLink>   
        </div>
    );
  }
}
 
export default BackButton;