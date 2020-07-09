import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import SectionHeader from '../components/SectionHeader';
import HeroBanner from '../components/HeroShot';
import NavElem from '../components/projectNav';
import BackButton from '../components/BackButton';
import Home from "../contents/Home";

import "../css/projects.css";

class Bi extends Component {

	componentDidMount() {
        window.scrollTo(0, 0);
    }
    
  render() {
  	// const style = this.state.hideNav ? {display: 'none'} : {}
    return (
       <div className="projectContainer">
        <div className="backbuttoncontainer">
          <BackButton/>
          <Route exact path="/" component={Home}/>
        </div>
        <HeroBanner title="Berkeley Innovation" subtext="Creating the Digital and Online Presence for a student-run organization/ Marketing & Graphic Design"/>
       </div>
    );
  }
}

export default Bi;