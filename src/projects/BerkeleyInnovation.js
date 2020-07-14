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
        <div className="caseContent">
          <div className="section summary">
            <p>I was the Marketing Director for Berkeley Innovation during my Fall 2019 semester.  I was in charge of coordinating and designing materials
             for all of our social media, and worked on extending the overall outreach of the club.</p>
            <p>Some of my proudest accomplishments as Marketing Director were:</p>
            <ul>
              <li>Reviving our instagram and kicking off our Medium blog</li>
              <li>Getting club merch for our members</li>
              <li>Surviving recruitment!</li>
            </ul>
          </div>
          <div className="section 1">
            <SectionHeader title="Recruitment: Find Your Place in Space"/>
            <p>Berkeley Innovation was an organization that really helped me find my place in the design community, 
            so I wanted our recruitment materials to reflect that and reach out to other people who were also looking 
            to find a community to fit in with.</p>
            <p>I really enjoyed the idea of an adventurer in space as the centerpiece of the theme.  I also wanted to include 
            the element of a post-card like flyer for recruitment, and represent the club as a community in space writing to earth.  </p>
            <p>After sharing with some other club members for feedback, I decided to change the character to an astronaut to more accurately reflect space.</p>
            <p>We also did Facebook profile photos for current members and club officers to market club recruitment.  
            I added small doodles to the photos, following the space theme.  Photos taken by Jessie Nguyen.</p>
            <p>For more personal and informational outreach about the club, I curated member spotlights on four current members and coordinated the 
            social media marketing for them. You can read the interviews on the Berkeley Innovation Medium blog.</p>
          </div>
          <div className="section 2">
            <SectionHeader title="Club-Hosted Events"/>
            <p>I was in charge of the marketing and marketing materials for all events that Berkeley Innovation hosted during the semester. 
            Here are some of the graphics I made for those events.</p>
            <div className="title2">Facebook Product Design Talk</div>
            <div className="title2">Alumni Panel</div>
            <div className="title2">Y-Labs Workshop</div>
          </div>
          <div className="section 3">
            <SectionHeader title="For Fun"/>
            <p>I made some fun illustrations combining well-known characters with the iconic orange sumo costume the members occasionally wear during recruitment. 
             We turned some of these into stickers and gave them out as end of semester gifts. </p>
             <p>Being Marketing Director really gave me a lot of creative freedom to explore and try things out, and also learn a lot of how coordinating and 
             formatting media works.  I had a great time (but had to take a social media break after).</p>
          </div>
        </div>
       </div>
    );
  }
}

export default Bi;