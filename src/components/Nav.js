import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import Logo from '../img/main_icon.svg'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="navwrapper">
      		<ul className="mainnav">
      		<NavLink to="/"><img src={Logo} className="logo"></img></NavLink>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/doodles">Doodles</NavLink></li>
              <li><NavLink exact to="/">Work</NavLink></li>
      		</ul>
      </div>
    )
  }
}