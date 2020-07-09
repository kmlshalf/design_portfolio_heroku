import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import SectionHeader from '../components/SectionHeader';
import HeroBanner from '../components/HeroShot';
import NavElem from '../components/projectNav';
import BackButton from '../components/BackButton';
import Home from "../contents/Home";

import "../css/projects.css";

class Bampfa extends React.Component {

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
        <HeroBanner title="Bampfa AR" subtext=" Creating an Interactive AR Exhibit Experience/ UI+Interaction Design"/>
       </div>
    );
  }
}

export default Bampfa;