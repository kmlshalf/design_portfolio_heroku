import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import SectionHeader from '../components/SectionHeader';
import HeroBanner from '../components/HeroShot';
import NavElem from '../components/projectNav';
import BackButton from '../components/BackButton';
import Home from "../contents/Home";

import "../css/projects.css";

class Ethical extends Component {
  render() {
  	// const style = this.state.hideNav ? {display: 'none'} : {}
    return (
      <div className="projectContainer">
        <div className="backbuttoncontainer">
          <BackButton/>
          <Route exact path="/" component={Home}/>
        </div>
        <HeroBanner title="EthiCAL Apparel" subtext="Leading + Designing for a student-run apparel business/ Apparel Design"/>
       </div>
    );
  }
}

export default Ethical;