//OLD NAVBAR CODE, NO LONGER USING



import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

//Nav bar content
import Home from "../contents/Home";
import About from "../contents/About"; 
import Doodles from "../contents/Doodles";

//projects content
import Bumblebee from '../projects/BumblebeeSpaces';


import Logo from '../img/main_icon.svg'

class Navbar extends Component {

  render() {
    return (
        <HashRouter>
          <div className="navWrapper">
            <ul className="sidenav" id="navigation">
              <NavLink to="/"><img src={Logo} className="logo"></img></NavLink>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/doodles">Doodles</NavLink></li>
              <li><NavLink exact to="/">Work</NavLink></li>
            </ul>
            <div className="projectLinks">
              <NavLink to="/bumblebeespaces">Bumblebee Spaces</NavLink>
            </div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Doodles" component={Doodles}/>
              <Route path="/BumblebeeSpaces" component={Bumblebee}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}
 
export default Navbar;